import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./utils/reportWebVitals";
import { fetchAppliancesData } from "./utils/fetchData";

const renderApp = async () => {
  try {
    const { appliances, results } = await fetchAppliancesData(); //because i dnt want twice calling i do it outside <App />
    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement
    );

    const connectedApp = (
      <React.StrictMode>
        <App appliances={appliances} results={results} />
      </React.StrictMode>
    );
    root.render(connectedApp);
  } catch (error) {
    console.error("error fetching data", error);
  }
};

renderApp();

reportWebVitals();
