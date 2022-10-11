import React from "react";

export interface Modal {
  children?: React.ReactElement;
  isActive: boolean;
  onClick?: () => void;
  onClose?: any;
  title?: string;
}

export interface SubHeader {
  entries: number;
  handleModal: () => void;
  label: string;
  entriesLabel: string;
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
