import * as React from "react"

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-baldcoral mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
            href="#pablo"
          >
            Baldman's Gatsby Tailwind Starter
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>


          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75" href="#pablo">Home</a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75" href="#pablo">About</a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75" href="#pablo">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
