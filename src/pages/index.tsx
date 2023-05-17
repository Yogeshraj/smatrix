import Quadrants from "@/components/quadrants/Quadrants";
import Sidebar from "@/components/sidebar/Sidebar";
import useStore from "@/store/store";
import { useEffect, useState } from "react";

export default function Home() {
  const { mainData, fetchLocalStorage, deleteTask } = useStore();

  useEffect(() => {
    fetchLocalStorage();
  }, [fetchLocalStorage]);

  if (!mainData) {
    return "Loading";
  }

  return (
    <div className='container'>
      <div className='grid grid-cols-[72%_27%] gap-4'>
        <Quadrants mainData={mainData} fetchLocalStorage={fetchLocalStorage} deleteTask={deleteTask} />
        <Sidebar />
      </div>
    </div>
  );
}
