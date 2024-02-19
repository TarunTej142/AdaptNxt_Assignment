import React, { useContext } from "react";

// CSS Module
import styles from "./index.css";

// Components
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import MainBody from "../Body";

// Context
import ReactContext from "../../context/ReactContext";

const Dashboard = () => {
  const { isThemeLight } = useContext(ReactContext);
  return (
    <div className={isThemeLight ? styles.Dashboard : styles.DarkDashboard}>
      <Navbar />
      <div className={styles.CenterBody}>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Dashboard;
