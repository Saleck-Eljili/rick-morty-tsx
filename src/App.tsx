import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Card from "./Card";
import Header from "./Header";
import Person from "./Person";

function App() {
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/`;
  let { results }: any = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Card results={results} />} />
          <Route path="/person/:id" element={<Person />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
