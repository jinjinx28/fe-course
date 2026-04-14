import React from 'react';
import Logo from "../header/Logo.jsx";

export default function MenuList() {
    const menus = [
        {"href": "#home",   "style": "header-menu-item active", "name": "Home"},
        {"href": "#about",  "style": "header-menu-item", "name": "About"},
        {"href": "#skills", "style": "header-menu-item", "name": "Skills"},
        {"href": "#work",   "style": "header-menu-item", "name": "My Work"},
        {"href": "#testimonial", "style": "header-menu-item", "name": "Testimonial"},
        {"href": "#contact",     "style": "header-menu-item", "name": "Contact"}
    ]
    return (
        <header class="header">
            <Logo   img="/images/favicon.ico"
                    alt="header-logo"
                    style="header-logo-img"
                    title="Judy"
            />
            <MenuList menus={menus} style="header-menu open" />
            {/* <button class="header-toggle" id="menu-toggle"><i class="fa-solid fa-bars"></i></button> */}
        </header>
    )
}