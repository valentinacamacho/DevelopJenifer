import  "../Layout/StyleSidebar.css";

 function Sidebar() {
  return (
    <div className="Navbar-Vertical">
      <ul>
      <li>
          <a>Principal</a>
        </li>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Proyects</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;