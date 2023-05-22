
import "../App.css";

type Appliance = {
  getItemId: () => string;
  getAppliance: () => string;
};

type Result = boolean;

type AppProps = {
  appliances: Appliance[];
  results: Result[];
};


function App({ appliances, results }: AppProps) {
  //states


  //hooks


  //render
  const renderAppliances = () => {
    return (
      <ul className="appliances">
        {
          appliances.map((appliance, index) => (
            <li className="appliance" key={appliance.getItemId()}>
              {appliance.getAppliance()}
            </li>
          ))
        }
      </ul >);
  };



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
          {renderAppliances()}

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
