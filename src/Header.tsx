import "./App.scss";

function Header() {
  return (
    <div className="header">
      <h3>
        <a href="/">RICK-MORTY</a>
      </h3>
      <div>
        <a href="/">Home</a>
        <a href="/episod">Episod</a>
        <a href="/location">Location</a>
      </div>
    </div>
  );
}

export default Header;
