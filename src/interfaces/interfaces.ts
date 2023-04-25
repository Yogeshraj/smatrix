import { ColumnType } from "@/utils/enums";

export interface IconProps {
  className?: string;
}

export interface SquareProps {
  color: string;
  title: string;
  subtitle: string;
  boardID: number;
  tasks: initialTasksProps[];
}
export interface initialTasksProps {
  id: any;
  title: string;
  boardID: number;
  completed: boolean;
  displayPosition: number;
}
