import React, { FC, useEffect } from "react";

interface SnackbarProps {
  snackbarProperties: {
    show: boolean,
    content: string,
    type: string
  },
  resetSnackbar(): any
}

const SnackbarLayout: FC<SnackbarProps> = ({ snackbarProperties, resetSnackbar }) => {
  useEffect(() => {
    if (snackbarProperties.show) {
      setTimeout(() => {
        resetSnackbar();
      }, 2000);
    }
  }, [snackbarProperties])
  
  return (
    <div
      className={`flex justify-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 shadow-2xl absolute bottom-4 left-0 right-0 mx-auto w-[300px] transition-all ${snackbarProperties.show ? 'opacity-1' : 'opacity-0'}`}
      role='alert'>
      <svg
        aria-hidden='true'
        className='flex-shrink-0 inline w-5 h-5 mr-3'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
          clipRule='evenodd'></path>
      </svg>
      <span className='sr-only'>Info</span>
      <div>
        <span className='font-medium'>{snackbarProperties?.content}</span>
      </div>
    </div>
  );
};

export default SnackbarLayout;
