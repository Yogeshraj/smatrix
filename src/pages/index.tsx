import Quadrants from "@/components/quadrants/Quadrants";
import Sidebar from "@/components/sidebar/Sidebar";
import SnackbarLayout from "@/components/snackbar/SnackbarLayout";
import useStore from "@/store/store";

export default function Home() {
  const { mainData, deleteTask, snackbar, resetSnackbar, updateData }: any = useStore();

  if (!mainData) {
    return "Loading";
  }

  return (
    <div className='container'>
      <div className='grid grid-cols-[72%_27%] gap-4'>
        <Quadrants
          mainData={mainData}
          deleteTask={deleteTask}
          updateData={updateData}
        />
        <Sidebar />
      </div>
      <SnackbarLayout snackbarProperties={snackbar} resetSnackbar={resetSnackbar} />
    </div>
  );
}
