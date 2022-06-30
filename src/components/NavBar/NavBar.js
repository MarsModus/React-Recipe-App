import "./NavBar.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

function NavBar() {
  return (
    <div className="navbar">
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default NavBar;
