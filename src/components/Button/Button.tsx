import { ButtonProps } from "./types";
import c from "classnames";
import styles from "./Button.module.scss";

export const Button = (props: ButtonProps) => {
  const { buttonSize, type, hasImg, ...rest } = props;
  const { className, disabled } = rest;

  return (
    <button
    {...rest}
    className={c(styles.btn, className || "", {
      [styles.primary]: type === "primary" || !type,
      [styles.secondary]: type === "secondary",
      [styles.xs]: buttonSize === "xs",
      [styles.small]: buttonSize === "small",
      [styles.regular]: buttonSize === "medium" || !buttonSize,
      [styles.large]: buttonSize === "large",
      [styles.disabled]: disabled,
      [styles.img]: hasImg,
    })}
    />
  );
};
