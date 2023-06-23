import { IconProps } from "@/interfaces/interfaces";

const TaskIcon = ({ className, onClick }: IconProps) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <mask
        id='mask0_134_630'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'>
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_134_630)'>
        <path
          className='group-hover:fill-meteorite-blue group-[.active]:fill-meteorite-blue'
          d='M13 8V4C13 3.71667 13.0958 3.47917 13.2875 3.2875C13.4792 3.09583 13.7167 3 14 3H20C20.2833 3 20.5208 3.09583 20.7125 3.2875C20.9042 3.47917 21 3.71667 21 4V8C21 8.28333 20.9042 8.52083 20.7125 8.7125C20.5208 8.90417 20.2833 9 20 9H14C13.7167 9 13.4792 8.90417 13.2875 8.7125C13.0958 8.52083 13 8.28333 13 8ZM3 12V4C3 3.71667 3.09583 3.47917 3.2875 3.2875C3.47917 3.09583 3.71667 3 4 3H10C10.2833 3 10.5208 3.09583 10.7125 3.2875C10.9042 3.47917 11 3.71667 11 4V12C11 12.2833 10.9042 12.5208 10.7125 12.7125C10.5208 12.9042 10.2833 13 10 13H4C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12ZM13 20V12C13 11.7167 13.0958 11.4792 13.2875 11.2875C13.4792 11.0958 13.7167 11 14 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12V20C21 20.2833 20.9042 20.5208 20.7125 20.7125C20.5208 20.9042 20.2833 21 20 21H14C13.7167 21 13.4792 20.9042 13.2875 20.7125C13.0958 20.5208 13 20.2833 13 20ZM3 20V16C3 15.7167 3.09583 15.4792 3.2875 15.2875C3.47917 15.0958 3.71667 15 4 15H10C10.2833 15 10.5208 15.0958 10.7125 15.2875C10.9042 15.4792 11 15.7167 11 16V20C11 20.2833 10.9042 20.5208 10.7125 20.7125C10.5208 20.9042 10.2833 21 10 21H4C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20Z'
          fill='#928F99'
        />
      </g>
    </svg>
  );
};

export default TaskIcon;
