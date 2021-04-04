import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';


export default function NavBar() {
    return (
        <header className="bg-gray-600">
            <div className="container flex justify-between">
                <nav className="flex flex-auto items-center px-20">
                    <NavLink to="/" exact
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-3 px-3 mr-4 text-white transform hover:scale-110 motion-reduce:transform-none text-2xl tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/post"
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-3 px-3 mr-4 text-white transform hover:scale-110 motion-reduce:transform-none text-2xl tracking-widest">
                        Blog
                    </NavLink>
                    <NavLink to="/project"
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-3 px-3 mr-4 text-white transform hover:scale-110 motion-reduce:transform-none text-2xl tracking-widest">
                        Project
                    </NavLink>
                    <NavLink to="/about"
                        activeClassName="text-gray-300"
                        className="inflex-flex items-center py-3 px-3 mr-4 text-white transform hover:scale-110 motion-reduce:transform-none text-2xl tracking-widest">
                        About Me
                    </NavLink>
                </nav>
                <div className = "py-2">
                <SocialIcon url="https://github.com/GrzegorzCieslik" style={{ height: 60, width: 60 }} className="mr-3" fgColor="white" bgColor="transparent" />
                <SocialIcon url="mailto:grzegorz.cieslik@hotmail.com" style={{ height: 60, width: 60 }} className="mr-3" fgColor="white" bgColor="transparent"/>
                </div>
            </div>
        </header>
    )
}