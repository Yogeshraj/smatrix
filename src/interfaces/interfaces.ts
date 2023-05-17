import { ColumnType } from "@/utils/enums";

export interface IconProps {
  className?: string;
  onClick(): any
}

export interface SquareProps {
  color: string;
  title: string;
  subtitle: string;
  // boardID: number;
  tasks: initialTasksProps[];
  deleteTask(): any
}
export interface initialTasksProps {
  id: any;
  title: string;
  // boardID: number;
  completed: boolean;
}
