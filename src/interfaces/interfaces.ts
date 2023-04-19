import { ReactNode } from "react";

export interface IconProps {
    className?: string,
}

export interface SquareProps {
    color: string;
    title: string;
    subtitle: string;
    children: ReactNode;
  }