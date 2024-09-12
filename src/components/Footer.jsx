import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import logo from '../assets/logo.png';

export default function FooterComp() {
  return (
    <Footer container className="bg-cyan-600 text-cyan-50">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 ml-16 mr-24">
            <div className="flex items-center flex-shrink-0">
              <img className="h-20 w-20 mr-2" src={logo} alt="Shales Logo" />
              <span className="text-xl tracking-tight text-cyan-50">Shales</span>
            </div>
          </div>
          <div className="flex justify-between mt-4 w-full">
            <div className="flex-auto">
            <Footer.Title title='Explore' className="text-cyan-50"/>
              <Footer.LinkGroup col>
                <Footer.Link href='/' target="_blank" rel="noopener noreferrer" className="text-cyan-50">
                  Home
                </Footer.Link>
                <Footer.Link href='/ships' target="_blank" rel="noopener noreferrer" className="text-cyan-50">
                  Ships
                </Footer.Link>
                <Footer.Link href='/services' target="_blank" rel="noopener noreferrer" className="text-cyan-50">
                  Services
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex-auto">
            <Footer.Title title='Explore' className="text-cyan-50"/>
              <Footer.LinkGroup col>
                <Footer.Link href='/locations' target="_blank" rel="noopener noreferrer" className="text-cyan-50">
                  Locations
                </Footer.Link>
                <Footer.Link href='/about' target="_blank" rel="noopener noreferrer" className="text-cyan-50">
                  About Us
                </Footer.Link>
                <Footer.Link href='/contact' target="_blank" rel="noopener noreferrer" className="text-cyan-50">
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex-auto">
              <Footer.LinkGroup col>
                <Footer.Title title='Follow Dev' className="text-cyan-50"/>
                <Footer.Link href='https://github.com/Vanshika-Tanwar' target="_blank" rel="noopener noreferrer" className="text-cyan-50">
                  GitHub
                </Footer.Link>
                <Footer.Link href='https://www.linkedin.com/in/vanshika-tanwar-75b897297/' target="_blank" rel="noopener noreferrer" className="text-cyan-50">
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex-auto">
              <Footer.LinkGroup col>
                <Footer.Title title='Legal' className="text-cyan-50"/>
                <Footer.Link href='#' className="text-cyan-50">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href='#' className="text-cyan-50">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="text-cyan-50"/>
        <div className="w-full sm-flec sm:items-center sm:justify-between">
          <Footer.Copyright 
            href="#"
            by="Shales"
            year={new Date().getFullYear()}
            className="text-cyan-50"
          />
          <div className="flex gap-6 sm:mt-2 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook} className="text-cyan-50"/>
            <Footer.Icon href='#' icon={BsInstagram} className="text-cyan-50"/>
            <Footer.Icon href='#' icon={BsTwitter} className="text-cyan-50"/>
            <Footer.Icon href='https://github.com/Vanshika-Tanwar' icon={BsGithub} className="text-cyan-50"/>
            <Footer.Icon href='#' icon={BsDribbble} className="text-cyan-50"/>
          </div>
        </div>
      </div>
    </Footer>
  );
}