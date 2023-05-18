import React, { useEffect } from "react";
import "./App.css";

import { Appliance } from "./classes";

const MAX_CONCURRENCY = 2;

(async () => {
  const db = [
    '{"price": 105, "category": "kitchen", "stock": 0, "size": "large", "isWaterResistant": true}',
    '{"price": 200, "category": "kitchen", "stock": 0, "size": "medium", "isWaterResistant": false}',
    '{"price": 100, "category": "kitchen", "stock": 5, "size": "small", "isWaterResistant": true}',
    '{"price": 100, "category": "kitchen", "stock": 2, "size": "large", "isWaterResistant": false}',
    '{"price": 800, "category": "bathroom", "stock": 0, "isElectric": true, "voltage": 220}',
    '{"price": 200, "category": "bathroom", "stock": 3, "isElectric": false, "voltage": 110}',
    '{"price": 100, "category": "bathroom", "stock": 7, "isElectric": true, "voltage": 330}',
    '{"price": 50,  "category": "bathroom", "stock": 5, "isElectric": false, "voltage": 440}',
    '{"price": 150, "category": "livingroom", "stock": 0, "weight": 100, "height": 200}',
    '{"price": 100, "category": "livingroom", "stock": 1, "weight": 200, "height": 100}',
    '{"price": 100, "category": "livingroom", "stock": 2, "weight": 150, "height": 150}',
    '{"price": 300, "category": "livingroom", "stock": 3, "weight": 120, "height": 180}',
  ];

  const appliances = db.map((data) => Appliance.deserialize(data));
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
