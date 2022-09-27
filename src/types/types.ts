export interface ButtonProps {
  label: string;
  hasAddIcon: boolean;
  variant?: "primary" | "secondary";
  handleClick: () => void;
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
