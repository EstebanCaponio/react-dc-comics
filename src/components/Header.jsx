import Logo from "./Logo";

function Header(props) {

    const menuNav = props.NavBarMenu;

    return (
        <>
            <header className="container-main">
                <Logo />
                <nav>
                    <ul className="ul-menu">
                        <li><a href="#">{menuNav[0]}</a></li>
                        <li><a href="#">{menuNav[1]}</a></li>
                        <li><a href="#">{menuNav[2]}</a></li>
                        <li><a href="#">{menuNav[3]}</a></li>
                        <li><a href="#">{menuNav[4]}</a></li>
                        <li><a href="#">{menuNav[5]}</a></li>
                        <li><a href="#">{menuNav[6]}</a></li>
                        <li><a href="#">{menuNav[7]}</a></li>
                        <li><a href="#">{menuNav[8]}</a></li>
                        <li><a href="#">{menuNav[9]}</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;