import { DragDropContext } from "react-beautiful-dnd";
import Square from "./Square";
import { boards } from "@/mockData/mockData";
import { ColumnType } from "@/utils/enums";

const Quadrants = ({ mainData, deleteTask, updateData }: any) => {
  const handleDeleteTask = (id: any, boardName: any) => {
    console.log(id, boardName);
    console.log(mainData);
    let deletedData = mainData[boardName].filter((res: any) => {
      console.log(res);
      return res.id !== id;
    });
    deleteTask({ ...mainData, [boardName]: deletedData });
  };

  function handleOnDragEnd(result: any) {
    const { source, destination } = result;

    // If user tries to drop in an unknown destination
    if (!result.destination) return;

    // if the user drags and drops back in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // If the user drops within the same column but in a different position
    if (source.droppableId === destination.droppableId) {
      const sourceItems = Array.from(
        mainData[source.droppableId as keyof typeof ColumnType] || []
      );
      const droppableId = source.droppableId;
      const [reorderedItem] = sourceItems.splice(result.source.index, 1);
      sourceItems.splice(result.destination.index, 0, reorderedItem);

      updateData({ ...mainData, [droppableId]: sourceItems });
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      const sourceItems = Array.from(
        mainData[source.droppableId as keyof typeof ColumnType] || []
      );
      const destinationItems = Array.from(
        mainData[destination.droppableId as keyof typeof ColumnType] || []
      );

      const destinationdroppableId = destination.droppableId;
      const sourcedroppableId = source.droppableId;

      sourceItems.filter((item: any) => {
        item.id === result.draggableId;
      });
      const [reorderedItem] = sourceItems.splice(result.source.index, 1);
      destinationItems.splice(result.destination.index, 0, reorderedItem);

      updateData({
        ...mainData,
        [sourcedroppableId]: sourceItems,
        [destinationdroppableId]: destinationItems,
      });
      return;
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className='grid grid-cols-2 gap-4 py-5'>
        {boards.map((board, index) => {
          return (
            <Square
              key={index}
              color={board.boardColor}
              boardTitle={board.boardTitle}
              subtitle={board.boardSubtitle}
              tasks={
                mainData &&
                mainData[board.boardTitle as keyof typeof ColumnType]
              }
              deleteTask={handleDeleteTask}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default Quadrants;
