import React, { ReactEventHandler } from "react";

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
  teamMembers: string;
  startDate: string;
}
