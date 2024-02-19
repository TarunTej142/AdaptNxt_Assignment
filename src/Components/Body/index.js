import React, { useContext } from "react";

// CSS Module
import styles from "./index.css";

// Components
import OrderStatusSection from "../OrderStatus";
import OrderDetailsSection from "../OrderDetails";

// Icons
import { IoIosClose } from "react-icons/io";

// Context
import ReactContext from "../../context/ReactContext";

const Body = () => {
  const { sidebarSelection, isThemeLight } = useContext(ReactContext);
  return (
    <div
      className={
        isThemeLight
          ? styles.mainBody
          : `${styles.mainBody} ${styles.mainBodyDark}`
      }
    >
      <div
        className={`${styles.badge} ${isThemeLight ? null : styles.badgeDark}`}
      >
        <p>{sidebarSelection}</p>
        <IoIosClose
          className={styles.icon}
          size={20}
          color={isThemeLight ? "black" : "white"}
        />
      </div>
      <OrderStatus />
      <OrderDetails />
    </div>
  );
};

export default Body;
