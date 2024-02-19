import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ReactContext from "./context/ReactContext";

const orderStatusList = [
  {
    id: "PENDING",
    text: "Pending",
  },
  {
    id: "ACCEPT",
    text: "Accept",
  },
  {
    id: "AWB_CREATED",
    text: "AWB Created",
  },
  {
    id: "READY_TO_SHIP",
    text: "Ready to Ship",
  },
  {
    id: "SHIPPED",
    text: "Shipped",
  },
  {
    id: "COMPLETED",
    text: "Completed",
  },
  {
    id: "CANCELLED",
    text: "Cancelled",
  },
];

function App() {
  const [isThemeLight, setIsThemeLight] = useState(false);
  const [sidebarSelection, setSidebarSelection] = useState("orders");
  const [seletedOrderStatusListItem, setSelectedOrderStatusListItem] = useState(
    orderStatusList[0].id
  );

  const changeOrderStatus = (oStatusId) => {
    setSelectedOrderStatusListItem(oStatusId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    <ReactContext.Provider
      value={{
        isThemeLight,
        changeTheme: () => setIsThemeLight(!isThemeLight),
        sidebarSelection,
        setSidebarSelection,
        seletedOrderStatusListItem,
        changeOrderStatus,
        orderStatusList,
      }}>
      <Dashboard />
    </ReactContext.Provider>
    
  );
}

export default App;
