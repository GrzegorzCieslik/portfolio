import React from "react";
import { Navlink } from "react-router-dom";
 
export default function NavBar() {
    return (
    <header>
        <div>
            <nav>
                <Navlink to = "/" exact>
                    Home
                </Navlink>
                <Navlink to = "/post">
                    Blog
                </Navlink>
                <Navlink to = "/project">
                    Project
                </Navlink>
                <Navlink to = "/about">
                    About Me
                </Navlink>
            </nav>
        </div>
    </header>
    )
}