import useStore from "@/store/store";
import React, { useEffect, useState } from "react";

const Alltasks = () => {
  const { mainData, boards }: any = useStore();

  // TODO: Define props as proper StateProperties
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    boards.map((data: any) => {
      setTasks((prevState) => [...prevState, mainData[data]]);
    });
  }, [mainData, boards]);

  return (
    <div className='container'>
      <div className='py-5'>
        <div className='text-xl font-bold mb-5'>All Tasks</div>
        {tasks &&
          tasks.map((task: any, index: number) => {
            return (
              <React.Fragment key={index}>
                {task.map((data: any) => {
                  console.log(data);
                  return (
                    <div
                      key={data.id}
                      className='rounded-md border-white border-2 bg-half-white p-2 my-2.5 flex justify-between'
                      title={data.boardName}>
                      {data.title}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Alltasks;
