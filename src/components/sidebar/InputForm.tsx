import React, { useEffect } from "react";
import ToogleSwitch from "../toogleSwtich/ToogleSwitch";
import AddIcon from "../Icons/AddIcon";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import useStore from "@/store/store";

const InputForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const { mainData, updateData }: any = useStore();

  const onSubmit = (data: any) => {
    let boardName;
    const { inputText, important, urgent } = data;
    if (important && urgent) {
      boardName = "Do";
    } else if (important && !urgent) {
      boardName = "Schedule";
    } else if (!important && urgent) {
      boardName = "Delegate";
    } else {
      boardName = "Limit";
    }

    let addNewTask = [
      ...(mainData[boardName] || []),
      {
        id: uuidv4(),
        title: inputText,
        completed: false,
      },
    ];
    updateData({ ...mainData, [boardName]: addNewTask });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form
      className='bg-half-white rounded-2xl p-4 mt-5'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <textarea
          className='placeholder:text-slate-400 bg-half-purple w-full border rounded-lg focus:outline-none text-sm min-h-[110px] p-[15px]'
          placeholder='Type in here...'
          {...register("inputText", { required: true })}></textarea>
      </div>
      <div className='mb-4 bg-half-white rounded-xl border-white border-2 flex justify-between'>
        <div className='p-2 flex-1 flex flex-col border-r-2 border-half-white'>
          <div className='text-[11px] mb-2'>Important</div>
          <div className='bg-half-white rounded-xl border-white border-2 p-2'>
            <ToogleSwitch
              register={register}
              id='important'
              isSubmitSuccessful={isSubmitSuccessful}
            />
          </div>
        </div>

        <div className='p-2 flex-1 flex flex-col'>
          <div className='text-[11px] mb-2'>Urgent</div>
          <div className='bg-half-white rounded-xl border-white border-2 p-2'>
            <ToogleSwitch
              register={register}
              id='urgent'
              isSubmitSuccessful={isSubmitSuccessful}
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
