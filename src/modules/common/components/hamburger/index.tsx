import React from "react";
import clsx from "clsx";

import styles from './index.module.scss';

type HamburgerProps = {
  setOpen?: () => void
  barWidth?: number
  barHeight?: number
}

const Hamburger: React.FC<HamburgerProps> = ({ setOpen }) => {
  return (
    <div
      className={clsx("w-10 h-10 relative focus:outline-none")}
      onClick={setOpen}
    >
      <div className="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={clsx(
            `block absolute rounded-sm bg-current -translate-y-1.5`,
            styles.bar
          )}
        ></span>
        <span
          aria-hidden="true"
          className={clsx(
            `block absolute bg-current rounded-sm transform`,
            styles.bar
          )}
        ></span>
        <span
          aria-hidden="true"
          className={clsx(
            `block absolute bg-current rounded-sm translate-y-1.5`,
            styles.bar
          )}
        ></span>
      </div>
    </div>
  );
};

export default Hamburger;
