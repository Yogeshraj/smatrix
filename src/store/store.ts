import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set: any) => ({
      websiteName: "Smatrix",
      
      boards: ['Do', 'Schedule', 'Delegate', 'Limit'],

      mainData: [],
      snackbar: {
        show: false,
        content: "",
        type: "",
      },

      async fetchData() {
        const data = await fetch(
          "https://62b59b5e42c6473c4b362f18.mockapi.io/users"
        );
        const result = await data.json();
        console.log(result);
      },

      updateData: (task: any) => {
        set((state: any) => ({
          ...state,
          mainData: task,
          snackbar: {
            show: true,
            content: "Success added!",
            type: "success",
          },
        }));
      },

      deleteTask: (task: any) => {
        set((state: any) => ({
          ...state,
          mainData: task,
          snackbar: {
            show: true,
            content: "Deleted Successfully!",
            type: "success",
          },
        }));
      },

      resetSnackbar: () => {
        set((state: any) => ({
          ...state,
          snackbar: {
            show: false,
            content: "",
            type: "",
          },
        }));
      },
    }),

    {
      name: "answer-storage", // unique name
      // getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
