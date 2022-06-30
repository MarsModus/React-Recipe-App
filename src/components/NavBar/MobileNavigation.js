import NavLinks from "./NavLinks";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerIcon = (
    <FaHamburger
      className="Hamburger"
      size="30px"
      onClick={() => setIsOpen(!isOpen)}
    />
  );
  const closeIcon = (
    <AiOutlineClose
      className="Hamburger"
      size="30px"
      onClick={() => setIsOpen(!isOpen)}
    />
  );

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="MobileNavigation">
      {isOpen && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      {isOpen ? closeIcon : hamburgerIcon}
    </nav>
  );
};

export default MobileNavigation;
