import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.scss";

function Person() {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species }: any =
    fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="person">
      <div>
        <h1>{name}</h1>
        <img src={image} alt="" />

        {(() => {
          if (status === "Dead") {
            return <div style={{ color: "red" }}>{status}</div>;
          } else if (status === "Alive") {
            return <div style={{ color: "green" }}>{status}</div>;
          } else {
            return <div style={{ color: "blue" }}>{status}</div>;
          }
        })()}
        <p>
          <span>Gender : </span>
          {gender}
        </p>
        <p>
          <span>Location: </span>
          {location?.name}
        </p>
        <p>
          <span>Origin: </span>
          {origin?.name}
        </p>
        <p>
          <span>Species: </span>
          {species}
        </p>
      </div>
    </div>
  );
}

export default Person;
