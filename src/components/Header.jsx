import React from "react";
import logo from "../assets/logo.png";
import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; 

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar
      className="sticky top-0 z-50 py-3"
      style={{
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        borderBottom: "1.5px solid #06b6d4"
      }}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Shales Logo" />
            <span className="text-xl tracking-tight text-cyan-900">Shales</span>
          </Link>
          <div className="flex gap-2 md:order-2 items-center"> 
            <Link to='/log-in'>
              <Button outline gradientDuoTone="cyanToBlue" className="md:hidden" pill>
                Log In
              </Button>
              <Button outline gradientDuoTone="cyanToBlue" className="hidden md:block" pill>
                Log In
              </Button>
            </Link>
            <FaSearch className="text-cyan-500 cursor-pointer" size={28} /> 
            <Navbar.Toggle className="md:hidden text-gray-800" />
          </div> 
          <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
              <Link to='/'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/ships"} as={'div'}>
              <Link to='/ships'>Ships</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/services"} as={'div'}>
              <Link to='/services' >Services</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/locations"} as={'div'}>
              <Link to='/locations'>Locations</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={'div'}>
              <Link to='/about' >About Us</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/contact"} as={'div'}>
              <Link to='/contact'>Contact</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;