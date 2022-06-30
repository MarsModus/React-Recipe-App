function NavLinks(props) {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#">Recipes</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#">Favorites</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#">Cupboard</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#">Shoping List</a>
      </li>
    </ul>
  );
}

export default NavLinks;
