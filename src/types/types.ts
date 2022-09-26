export interface HomepageProps {
  initialTimeEntries: TimeEntryProps[];
}

export interface ModalProps {
  children: string;
  isActive: boolean;
  onClose?: any;
  onClick?: any;
}

export interface SubHeaderProps {
  entries: number;
  label: string;
}

export interface TimeEntryProps {
  activity: string;
  client: string;
  endTime: string;
  id: number;
  startTime: string;
}
