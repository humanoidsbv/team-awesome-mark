import React, { ReactEventHandler } from "react";

export interface ModalProps {
  children?: React.ReactElement;
  isActive: boolean;
  onClick?: () => void;
  onClose?: any;
  title?: string;
}

export interface SubHeaderProps {
  entries: number;
  handleModal: () => void;
  label: string;
}

export interface TimeEntryProps {
  activity: string;
  client: string;
  date?: string;
  endTime: Date;
  id: number;
  isModalActive?: boolean;
  startTime: Date;
}
