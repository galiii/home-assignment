import React, { useEffect, useState } from "react";
import DB from './db/appliances.json'
import "./App.css";

import { Appliance } from "./classes";

const MAX_CONCURRENCY = 2;

/*(async () => {
  const appliances = DB.map((data) => Appliance.deserialize(JSON.stringify(data)));
  const results = await Appliance.checkStockConcurrently({ appliances: appliances, maxConcurrency: MAX_CONCURRENCY });
  console.log("Task 1", appliances);
  console.log("Task 2", results);
})();*/

function App() {
  //states
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [results, setResults] = useState<boolean[]>([]);

  //hooks
  useEffect(() => {
    const fetchData = async () => {
      const applianceData = DB.map((data) => Appliance.deserialize(JSON.stringify(data)));
      setAppliances(applianceData);
      const stockResults = await Appliance.checkStockConcurrently({ appliances: applianceData, maxConcurrency: MAX_CONCURRENCY });
      setResults(stockResults);
    };
    console.log("use effect")
    fetchData();
  }, []);

  //render
  return (
    <div className="App">
      <header className="App-header">
        <p>Home assignment</p>
      </header>
      <section>
        <h3>
          Looks on:: <code>Inspect</code>
        </h3>
        <section className="container">
          <h4>Appliances:</h4>
          <ul className="appliances">
            {appliances.map((appliance, index) => (
              <li className="appliance" key={appliance.getItemId()}>
                {`${index})  Price: ${appliance.getPrice()}, Category: ${appliance.getCategory()}`}
              </li>
            ))}
          </ul>
        </section>
        <section className="container pink">
          <h4>Stock Results:</h4>
          <ul className="appliances pink">
            {results.map((isInStock, index) => (
              <li className="appliance  white black round" key={index}>{`Appliance ${index + 1}: ${isInStock ? "In Stock" : "Out of Stock"}`}</li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;
