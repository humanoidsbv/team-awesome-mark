export interface ButtonProps {
  label: string;
  plusIcon: boolean;
  variant?: "primary" | "secondary";
  onClick: () => void;
}

export interface HomepageProps {
  initialTimeEntries: TimeEntryProps[];
}

export interface ModalProps {
  children?: string;
  isActive: boolean;
  title?: string;
  onClick?: any;
  onClose?: any;
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
