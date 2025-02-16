import Quadrants from "@/components/quadrants/Quadrants";
import SnackbarLayout from "@/components/snackbar/SnackbarLayout";
import useStore from "@/store/store";

export default function Home() {
  const {
    mainData,
    deleteTask,
    snackbar,
    resetSnackbar,
    updateData,
    boards,
  }: any = useStore();

  if (!mainData) {
    return "Loading";
  }

  return (
    <div className='container min-h-min'>
      <div className='grid  gap-4'>
        <Quadrants
          mainData={mainData}
          deleteTask={deleteTask}
          updateData={updateData}
          boards={boards}
        />
      </div>
      {snackbar.show && (
        <SnackbarLayout
          snackbarProperties={snackbar}
          resetSnackbar={resetSnackbar}
        />
      )}
    </div>
  );
}
