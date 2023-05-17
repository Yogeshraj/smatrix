import React, { FC, useEffect, useState } from "react";
import DragIcon from "../Icons/DragIcon";
import SelectIcon from "../Icons/SelectIcon";
import RemoveIcon from "../Icons/RemoveIcon";
import { SquareProps } from "@/interfaces/interfaces";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Square: FC<SquareProps> = ({ color, boardTitle, subtitle, tasks, deleteTask }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`rounded-2xl bg-${color}-100 border border-${color}-400 p-2.5 min-h-[402px]`}>
      <div className='flex flex-col'>
        <div
          className={`flex border-b border-${color}-400 justify-between p-2 pt-0`}>
          <div className={`text-${color}-700 font-semibold`}>{boardTitle}</div>
          <div className={`text-${color}-700`}>{subtitle}</div>
        </div>

        {isMounted ? (
          <Droppable droppableId={boardTitle}>
            {(provided) => (
              <div
                className='characters min-h-[347px]'
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {tasks?.map(({ id, title }, index) => {
                    return (
                      <Draggable key={id} draggableId={id.toString()} index={index}>
                        {(provided) => (
                          <div
                            className='rounded-[10px] border-white border-2 bg-half-white p-1.5 my-2.5 flex justify-between cursor-grab'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <div className='flex'>
                              <DragIcon className='mr-3.5 cursor-grab' />
                              <div className='half-black'>{title}</div>
                            </div>

                            <div className='flex'>
                              <SelectIcon className='mr-2.5 cursor-pointer' />
                              <RemoveIcon className='cursor-pointer' onClick={()=>deleteTask(id, boardTitle)} />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : null}
      </div>
    </div>
  );
};

export default Square;
