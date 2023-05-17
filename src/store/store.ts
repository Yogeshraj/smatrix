import { create } from "zustand";
import { initialTasks } from "@/mockData/mockData";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      websiteName: "Smatrix",
      mainData: [],
      async fetchData() {
        const data = await fetch(
          "https://62b59b5e42c6473c4b362f18.mockapi.io/users"
        );
        const result = await data.json();
        console.log(result);
      },
      fetchLocalStorage() {
        let getData = localStorage?.getItem("Data") || '';
        if (getData) {
          set((state: any) => ({
            ...state,
            mainData: JSON.parse(getData),
          }));
        } else {
          set((state: any) => ({
            ...state,
            mainData: [],
          }));
        }
      },
      updateData: (data: any, boardName: any) => {
        set((state: any) => ({
          ...state,
          mainData: {
            ...state.mainData,
            [boardName]: [
             ...state.mainData[boardName] || [],
              {
                id: uuidv4(),
                title: data.inputText,
                completed: false,
              },
            ],
          },
        }));
      },

      deleteTask: (id: any, boardName: any) => {
        set((state: any) => ({
          ...state,
          mainData: {
            ...state.mainData,
            [boardName]: [
             ...state.mainData[boardName] || [],
             delete state.mainData[boardName].id === id
            ],
          },
        }));
      }
    }),

    {
      name: "answer-storage", // unique name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useStore;
