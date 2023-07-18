import useStore from "@/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface MyItem {
  boardID: string;
  boardName: string;
  completed: boolean;
  title: string;
}

const Table = () => {
  const { allTasks, boards }: any = useStore();
  const [tableAllTask, setTableAllTask] = useState([]);

  useEffect(() => {
    setTableAllTask(allTasks);
  }, [allTasks]);

  return (
    <div>
      <table className='w-full'>
        <thead>
          <tr className='border bg-medium-grey border-gray-200 transition-colors'>
            <th className='h-10 px-3 text-left align-middle font-medium text-muted-foreground max-w-[120px]'>
              #
            </th>
            <th className='h-10 px-3 text-left align-middle font-medium text-muted-foreground'>
              Task Name
            </th>
            <th className='h-10 px-3 text-left align-middle font-medium text-muted-foreground'>
              Quadrant
            </th>
            <th className='h-10 px-3 text-left align-middle font-medium text-muted-foreground'>
              Created Date
            </th>
            <th className='h-10 px-3 text-left align-middle font-medium text-muted-foreground'>
              Completed Date
            </th>
            <th className='h-10 px-3 text-left align-middle font-medium text-muted-foreground'>
              Status
            </th>
            <th className='h-10 px-3 text-left align-middle font-medium text-muted-foreground'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tableAllTask.length ? (
            tableAllTask
              .sort((a: MyItem, b: MyItem) => (a.title > b.title ? 1 : -1))
              .map(
                (
                  { title, boardName, boardID, completed }: MyItem,
                  index: number
                ) => {
                  let getboardInfo = boards.find((board: any) => {
                    return board.boardID === boardID;
                  });
                  console.log(getboardInfo);

                  return (
                    <tr
                      key={index}
                      className='border border-gray-200 transition-colors hover:bg-half-white'>
                      <td
                        key={index}
                        className='h-10 px-3 max-w-[120px] w-[10%]'>
                        {`TASK-${index}`}
                      </td>
                      <td className='h-10 px-3 text-ellipsis overflow-hidden whitespace-nowrap max-w-[300px] w-[40%]'>
                        <div className='flex space-x-2'>
                          <div
                            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-${
                              getboardInfo.boardColor ?? ""
                            }-400`}>
                            {boardName}
                          </div>
                          <span className='max-w-[500px] truncate'>
                            {title}
                          </span>
                        </div>
                      </td>
                      <td className='h-10 px-3 w-[10%]'>{boardName}</td>
                      <td className='h-10 px-3 w-[10%]'>26/04/2023</td>
                      <td className='h-10 px-3 w-[10%]'>28/04/2023</td>
                      <td className='h-10 px-3 w-[10%]'>
                        {completed ? "Completed" : "In Progress"}
                      </td>
                      <td className='h-10 px-3 w-[10%]'>Icon</td>
                    </tr>
                  );
                }
              )
          ) : (
            <tr className='border border-gray-200 transition-colors hover:bg-half-white'>
              <td colSpan={7} className='h-10 px-3 text-center w-full'>No Task found. Please create one <Link href='/' className="underline hover:text-gray-600">here</Link></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
