import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';


export default function NavBar() {
    return (
        <header className="bg-gray-600">
            <div className="container flex justify-between">
                <nav className="flex flex-auto items-center px-20">
                    <NavLink id="RouterNavLinkHome" to="/" exact
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-3 px-3 mr-4 text-white transform hover:scale-110 motion-reduce:transform-none text-2xl tracking-widest">
                        Home
                    </NavLink>
                    <NavLink id="RouterNavLinkPost" to="/post"
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-3 px-3 mr-4 text-white transform hover:scale-110 motion-reduce:transform-none text-2xl tracking-widest">
                        Blog
                    </NavLink>
                    <NavLink id="RouterNavLinkProject" to="/project"
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-3 px-3 mr-4 text-white transform hover:scale-110 motion-reduce:transform-none text-2xl tracking-widest">
                        Project
                    </NavLink>
                    <NavLink id="RouterNavLinkAbout" to="/about"
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-3 px-3 mr-4 text-white transform hover:scale-110 motion-reduce:transform-none text-2xl tracking-widest">
                        About Me
                    </NavLink>
                </nav>
                <div className="py-2">
                    <SocialIcon url="https://github.com/GrzegorzCieslik" style={{ height: 60, width: 60 }} className="mr-3 transform hover:-translate-y-1" fgColor="white" bgColor="transparent" />
                    <NavLink id="RouterNavLinkContact" to="/contact">
                        <SocialIcon url="mailto:grzegorz.cieslik@hotmail.com" style={{ height: 60, width: 60 }} className="mr-3 transform hover:-translate-y-1" fgColor="white" bgColor="transparent" />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}