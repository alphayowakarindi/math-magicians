function Navbar() {
  return (
    <div className="navbar">
      <h1><a href="/home">Math Magicians</a></h1>
      <ul>
        <li>
          <a href="/home">Home |</a>
        </li>
        <li>
          <a href="/calculator">Calculator |</a>
        </li>
        <li>
          <a href="/auote">Quote |</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
