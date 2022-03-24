import React, { useEffect, useState } from "react";
import "./App.css";
import { client } from "./client";
import Postes from "./Conponents/Postes";
const App = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    client
      .getEntries("Restarant")
      .then((resp) => setRecipe(resp.items))
      .catch((Err) => console.log(Err));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="wraper">
            <span>hallo React</span>
            <Postes recipe={recipe} />
          </div>
        </header>
        <main>
          <div className="wraper"></div>
        </main>
      </div>
    </div>
  );
};

export default App;
