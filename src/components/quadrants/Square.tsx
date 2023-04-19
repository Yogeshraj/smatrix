import React, { FC, useEffect, useState } from "react";
import DragIcon from "../Icons/DragIcon";
import SelectIcon from "../Icons/SelectIcon";
import RemoveIcon from "../Icons/RemoveIcon";
import { SquareProps } from "@/interfaces/interfaces";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// import dynamic from "next/dynamic";

// const DragDropContext = dynamic(
//   () =>
//     import("react-beautiful-dnd").then((mod) => {
//       return mod.DragDropContext;
//     }),
//   { ssr: false }
// );
// const Droppable = dynamic(
//   () =>
//     import("react-beautiful-dnd").then((mod) => {
//       return mod.Droppable;
//     }),
//   { ssr: false }
// );
// const Draggable = dynamic(
//   () =>
//     import("react-beautiful-dnd").then((mod) => {
//       return mod.Draggable;
//     }),
//   { ssr: false }
// );

const finalSpaceCharacters = [
  {
    id: "g-1",
    content: "Complete Google UX Course",
    displayPosition: 1,
  },
  {
    id: "g-4",
    content: "Complete LeetCode",
    displayPosition: 4,
  },
  {
    id: "g-2",
    content: "Complete udemy Course",
    displayPosition: 2,
  },
  {
    id: "g-3",
    content: "Complete eDX Course",
    displayPosition: 3,
  },
  {
    id: "g-5",
    content: "Commit Changes to Git",
    displayPosition: 5,
  },
];

const Square: FC<SquareProps> = ({ color, title, subtitle, children }) => {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const resetDisplayPositions = (list: any) => {
    const resetList = list.map((c: any, index: number) => {
      const slide = c;
      slide.displayPosition = index + 1;
      return slide;
    });
    updateCharacters(resetList);
    console.log(resetList);
  };

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    resetDisplayPositions(items);

    // updateCharacters(items);
  }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`rounded-2xl bg-${color}-100 border border-${color}-400 p-2.5 min-h-[360px]`}>
      <div className='flex flex-col'>
        <div
          className={`flex border-b border-${color}-400 justify-between p-2 pt-0`}>
          <div className={`text-${color}-700 font-semibold`}>{title}</div>
          <div className={`text-${color}-700`}>{subtitle}</div>
        </div>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          {isMounted ? (
            <Droppable droppableId='characters'>
              {(provided) => (
                <div
                  className='characters'
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {characters
                  .sort((a, b)=> a.displayPosition - b.displayPosition)
                  .map(({ id, content }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div
                            className='rounded-[10px] border-white border-2 bg-half-white p-1.5 my-2.5 flex justify-between cursor-grab'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <div className='flex'>
                              <DragIcon className='mr-3.5 cursor-grab' />
                              <div className='half-black'>{content}</div>
                            </div>

                            <div className='flex'>
                              <SelectIcon className='mr-2.5 cursor-pointer' />
                              <RemoveIcon className='cursor-pointer' />
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
        </DragDropContext>
      </div>
    </div>
  );
};

export default Square;
