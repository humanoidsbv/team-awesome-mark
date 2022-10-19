import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  hasAddIcon?: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export interface Modal {
  children?: React.ReactElement;
  isActive: boolean;
  onClick?: () => void;
  onClose?: () => void;
  title?: string;
}

export interface SubHeader {
  entries: number;
  entriesLabel: string;
  handleModal: () => void;
  label: string;
}

export interface TimeEntry {
  activity?: string;
  client: string;
  endTime: string;
  id?: string;
  startTime: string;
}

export interface TeamEntry {
  client: string;
  firstName: string;
  id?: number;
  lastName: string;
  role: string;
  startDate: string;
}
