function Navigation() {
  return (
    <nav className="bg-cyan-800 fixed top-0 left-0 right-0 z-10 p-4">
      <div className="grid grid-cols-2">
        <ul
         className="md:mx-40 "
        >
          <li className="mr-6 mx-10 sm:m-0">
            <a className="text-white hover:text-blue-800" href="#">
              Agify API
            </a>
          </li>
        </ul>

        <ul className="grid grid-cols-3">
          <li className="">
            <a className="text-white hover:text-blue-800" href="#">
              Home
            </a>
          </li>
          <li className="">
            <a className="text-white hover:text-blue-800" href="#">
              Data
            </a>
          </li>
          <li className="">
            <a className="text-white hover:text-blue-800" href="#">
              Api
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
