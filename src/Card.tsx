import "./App.scss";
interface Props {
  results: Array<{}>;
}

function Card({ results }: Props) {
  return (
    <div className="card">
      {results &&
        results.map((x: any) => (
          <a href={`/person/${x.id}`} key={x.id}>
            {(() => {
              if (x.status === "Dead") {
                return <h5 style={{ background: "red" }}>{x.status}</h5>;
              } else if (x.status === "Alive") {
                return <h5 style={{ background: "green" }}>{x.status}</h5>;
              } else {
                return <h5 style={{ background: "blue" }}>{x.status}</h5>;
              }
            })()}
            <img src={`${x.image}`} alt="" />
            <p>{x.name}</p>
          </a>
        ))}
    </div>
  );
}

export default Card;
