import React, { useEffect } from "react";
import DB from './db/appliances.json'
import "./App.css";

import { Appliance } from "./classes";

const MAX_CONCURRENCY = 2;

(async () => {
  const appliances = DB.map((data) => Appliance.deserialize(JSON.stringify(data)));
  const results = await Appliance.checkStockConcurrently({ appliances: appliances, maxConcurrency: MAX_CONCURRENCY });
  console.log("Task 1", appliances);
  console.log("Task 2", results);
})();

function App() {
  useEffect(() => { }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Home assignment</p>
      </header>
      <section>
        <h3>
          Looks on:: <code>Inspect</code>
        </h3>
      </section>
    </div>
  );
}

export default App;
