import React, { useEffect, useState } from "react";
import ToogleSwitch from "../toogleSwtich/ToogleSwitch";
import AddIcon from "../Icons/AddIcon";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import useStore from "@/store/store";
import getBoardName from "@/utils/getBoardName";

const InputForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const { mainData, updateData, updateAllTasks, allTasks }: any = useStore();

  const [radioState, setRadioState] = useState({
    important: 2,
    urgent: 2,
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setRadioState({
        important: 2,
        urgent: 2,
      });
    }
  }, [isSubmitSuccessful]);

  const onSubmit = (data: any) => {
    const { inputText, important, urgent } = data;
    let { boardName, boardID } = getBoardName(important, urgent);

    let addNewTask = [
      ...(mainData[boardName] || []),
      {
        id: uuidv4(),
        title: inputText.trim(),
        completed: false,
        boardName,
        boardID,
        createdDate: Date.now()
      },
    ];
    updateData({ ...mainData, [boardName]: addNewTask });
    updateAllTasks(...addNewTask);
  };

  return (
    <form
      className='bg-half-white rounded-2xl p-4'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <textarea
          className='placeholder:text-slate-400 bg-half-purple w-full border rounded-lg focus:outline-none text-sm min-h-[158px] p-[15px]'
          placeholder='Type in here...'
          {...register("inputText", { required: true })}></textarea>
      </div>
      <div className='mb-4 bg-half-white rounded-xl border-white border-2 flex justify-between'>
        <div className='p-2 flex-1 flex flex-col border-r-2 border-half-white'>
          <div className='text-[11px] font-medium mb-2'>Important</div>
          <div className='bg-half-white rounded-xl border-white border-2 px-6 py-2'>
            <ToogleSwitch
              register={register}
              id='important'
              setRadioState={setRadioState}
              radioState={radioState}
            />
          </div>
        </div>

        <div className='p-2 flex-1 flex flex-col'>
          <div className='text-[11px] font-medium mb-2'>Urgent</div>
          <div className='bg-half-white rounded-xl border-white border-2 px-6 py-2'>
            <ToogleSwitch
              register={register}
              id='urgent'
              setRadioState={setRadioState}
              radioState={radioState}
            />
          </div>
        </div>
      </div>

      <button className='rounded-xl bg-half-purple border-2 border-white p-2 text-meteorite-blue flex justify-between items-center'>
        <AddIcon />
        <div className='font-bold ml-1 text-sm'>Submit</div>
      </button>
    </form>
  );
};

export default InputForm;
