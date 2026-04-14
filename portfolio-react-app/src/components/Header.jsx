import '../components/commons/MenuList.jsx';
export default function Header() {
    const menus = [
        {"href" : "#home", "style" : "header-menu-item", "name" : "Home"},
        {"href" : "#about", "style" : "header-menu-item", "name" : "About"},
        {"href" : "#skills", "style" : "header-menu-item", "name" : "Skills"},
        {"href" : "#work", "style" : "header-menu-item", "name" : "Work"},
        {"href" : "#testimonial", "style" : "header-menu-item", "name" : "Testimonial"},
        {"href" : "#contact", "style" : "header-menu-item", "name" : "Contact"},
    ]

    return(
        <header class="header">
            <Logo img="img/favicon.ico"
                alt="header-logo"
                style="header-logo-img"
                title="jinjin"
            />

            <MenuList menus={menus} style="header-menu-logo"/>
        
            {/* <nav>
                <ul class="header-menu">
                    <li><a href="#home" class="header-menu-item">Home</a></li>
                    <li><a href="#about" class="header-menu-item">About</a></li>
                    <li><a href="#skils" class="header-menu-item">Skills</a></li>
                    <li><a href="#work" class="header-menu-item">My Work</a></li>
                    <li><a href="#testimonial" class="header-menu-item">Testimonial</a></li>
                    <li><a href="#contact" class="header-menu-item">Contact</a></li>
                </ul>
            </nav> */}
            <button class="header-toggle"><i class="fa-solid fa-bars"></i></button>
        </header>
    )
}