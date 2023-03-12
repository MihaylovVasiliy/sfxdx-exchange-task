export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  hasImg?: boolean;
  type?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  buttonSize?: "large" | "medium" | "small" | "xs";
}
