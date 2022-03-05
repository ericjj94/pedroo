import Characters from "../../pages/Characters";
import Episodes from "../../pages/Episodes";
import Locations from "../../pages/Locations";
import Header from "../Header";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        {/* add routing here */}
        <Characters />
      </div>
    </div>
  );
};
export default Layout;
