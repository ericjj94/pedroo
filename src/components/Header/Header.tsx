import { Link } from "react-router-dom";
import ListItemStyled from "./styled/ListItemStyled";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto m-auto">
          <ListItemStyled>
            <Link to="/">Characters</Link>
          </ListItemStyled>
          <ListItemStyled>
            <Link to="/episodes">Episodes</Link>
          </ListItemStyled>
          <ListItemStyled>
            <Link to="/locations">Locations</Link>
          </ListItemStyled>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
