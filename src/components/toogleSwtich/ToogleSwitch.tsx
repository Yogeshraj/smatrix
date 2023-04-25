import React, { useState, InputHTMLAttributes, FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  register: UseFormRegister<FieldValues>; // declare register props
}

const ToogleSwitch: FC<InputProps> = ({ register, id }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden'>
      <div className='flex items-center'>
        <span className='mr-2 text-xs font-medium text-gray-900'>No</span>
        <label className='inline-flex relative items-center cursor-pointer'>
          <input
            type='checkbox'
            className='sr-only peer'
            checked={enabled}
            readOnly
            {...register(id)}
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
        </label>
        <span className='ml-2 text-xs font-medium text-gray-900'>Yes</span>
      </div>
    </div>
  );
};

export default ToogleSwitch;
