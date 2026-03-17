import React from "react";
import logo from "./assets/logo.png";
import styles from "./sidebar.module.css"; // Import the object 'styles'
import { HiArrowSmRight } from "react-icons/hi";
export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>

      <div className={`${styles.col} ${styles.menulist}`}>
        <ul>
          <li>Home</li>
          <li>Feature</li>
          <li>Community</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className={styles.col}>
        <button className={` ${styles.btn} btn btn-success`}>Register Now<HiArrowSmRight /></button>
      </div>
    </div>
  );
}