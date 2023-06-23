export interface IconProps {
  className?: string;
  onClick?: any
}

export interface SquareProps {
  color: string;
  boardTitle: string;
  subtitle: string;
  tasks: initialTasksProps[];
  deleteTask: any,
  completeTask: any,
  index: number
}
export interface initialTasksProps {
  id: any;
  title: string;
  completed: boolean;
}
