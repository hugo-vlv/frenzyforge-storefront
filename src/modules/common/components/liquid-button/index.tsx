import React from "react";

import styles from './index.module.scss';

type ButtonProps = {
  inverted?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  inverted = false,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={styles.btn}>
      <span className={styles.content}>{children}</span>
      <div className={styles.liquid}></div>
    </button>
  );
};

export default Button;
