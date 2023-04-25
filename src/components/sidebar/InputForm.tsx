import React from "react";
import ToogleSwitch from "../toogleSwtich/ToogleSwitch";
import AddIcon from "../Icons/AddIcon";
import { useForm } from "react-hook-form";

const InputForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      className='bg-half-white rounded-2xl p-4'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <textarea
          className='placeholder:text-slate-400 bg-half-purple w-full border rounded-lg focus:outline-none text-sm min-h-[110px] p-[15px]'
          placeholder='Type in here...'
          {...(register("input-text"), { required: true })}></textarea>
      </div>
      <div className='mb-4 bg-half-white rounded-xl border-white border-2 flex justify-between'>
        <div className='p-2 flex-1 flex flex-col border-r-2 border-half-white'>
          <div className='text-[11px] mb-2'>Important</div>
          <div className='bg-half-white rounded-xl border-white border-2 p-2'>
            <ToogleSwitch register={register} id='important' />
          </div>
        </div>

        <div className='p-2 flex-1 flex flex-col'>
          <div className='text-[11px] mb-2'>Urgent</div>
          <div className='bg-half-white rounded-xl border-white border-2 p-2'>
            <ToogleSwitch register={register} id='urgent' />
          </div>
        </div>
      </div>

      <button className='rounded-xl bg-half-purple border-2 border-white p-2 text-meteorite-blue flex justify-between items-center'>
        <AddIcon />
        <div className='font-bold ml-2 text-sm'>Submit</div>
      </button>
    </form>
  );
};

export default InputForm;
