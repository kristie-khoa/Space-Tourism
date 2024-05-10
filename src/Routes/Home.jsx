import { Link, useOutletContext } from "react-router-dom";

function Home() {
  const { handleSetCurrPageIndex } = useOutletContext();

  return (
    <div className="main-content home-page">
      <div className="home col-left">
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="home col-right">
        <Link
          to="/Space-Tourism/destination"
          onClick={() => handleSetCurrPageIndex(1)}
          className="home-explore-button"
        >
          EXPLORE
        </Link>
      </div>
    </div>
  );
}

export default Home;
