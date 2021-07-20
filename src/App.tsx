import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import Sidebar from "./components/sidebar";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Dashboard />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
