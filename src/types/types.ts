import React from "react";

export interface ModalProps {
  children?: React.ReactElement;
  isActive: boolean;
  onClick?: () => void;
  onClose?: any;
  title?: string;
}

export interface SubHeaderProps {
  entries: number;
  label: string;
}

export interface TimeEntryProps {
  activity: string;
  client: string;
  date?: string;
  endTime: string;
  id: number;
  startTime: string;
}
