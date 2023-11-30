import { ReactNode } from "react";

export interface IModal {
  modalId: string;
  modalComponent?: ReactNode;
}

export interface IModalState {
  [modalId: string]: {
    open: boolean;
    modalComponent: ReactNode;
  };
}

export type TMuiSize = "small" | "medium" | "large";

export type TMuiColor =
  | "warning"
  | "default"
  | "error"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | undefined;

export interface IPagination<T> {
  data: T[];
  page: number;
  total: number;
  totalPage: number;
}

export interface IOptionHeader {
  userId: string;
  token: string;
}
