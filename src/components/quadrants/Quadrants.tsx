import { DragDropContext } from "react-beautiful-dnd";
import Square from "./Square";
import { useEffect, useState } from "react";
import { initialTasks, boards } from "@/mockData/mockData";
import { ColumnType } from "@/utils/enums";

const Quadrants = () => {
  const [tasks, updateTasks] = useState(initialTasks);

  function handleOnDragEnd(result: any) {
    // console.log(result);
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
      const sourceItems = Array.from(tasks[source.droppableId as keyof typeof ColumnType]);
      const droppableId = source.droppableId;
      const [reorderedItem] = sourceItems.splice(result.source.index, 1);
      sourceItems.splice(result.destination.index, 0, reorderedItem);
      
      updateTasks({...tasks, [droppableId] : sourceItems})
      localStorage.setItem('Data', JSON.stringify({...tasks, [droppableId] : sourceItems}));
      return;
    }



    if (source.droppableId !== destination.droppableId) {
      const sourceItems = Array.from(tasks[source.droppableId as keyof typeof ColumnType]);
      const destinationItems = Array.from(tasks[destination.droppableId as keyof typeof ColumnType]);

      const destinationdroppableId = destination.droppableId;
      const sourcedroppableId = source.droppableId;
      
      sourceItems.filter((item)=> {item.id === result.draggableId});
      const [reorderedItem] = sourceItems.splice(result.source.index, 1);
      destinationItems.splice(result.destination.index, 0, reorderedItem);

      updateTasks({...tasks, [sourcedroppableId] : sourceItems, [destinationdroppableId] : destinationItems})
      localStorage.setItem('Data', JSON.stringify({...tasks, [sourcedroppableId] : sourceItems, [destinationdroppableId] : destinationItems}));    
      return;
    }
  }

  useEffect(() => {
    let getData = localStorage?.getItem('Data')!;
    if (getData) {
      updateTasks(JSON.parse(getData));
    }
  }, []);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className='grid grid-cols-2 gap-4 py-5'>
        {boards.map((board, index) => {
          return (
            <Square
              key={index}
              color={board.boardColor}
              title={board.boardTitle}
              subtitle={board.boardSubtitle}
              boardID={board.boardID}
              tasks={tasks[board.boardTitle as keyof typeof ColumnType]}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default Quadrants;
