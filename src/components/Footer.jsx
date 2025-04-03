import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import shop from "../assets/img/buy-comics-shop-locator.png";
import visa from "../assets/img/buy-dc-power-visa.svg";

function Footer() {
    return (<footer>

        <div className="footer-top">
            <ul className="f-top-menu">
                <li className="card">
                    <div className="card-img">
                        <img src={digital} alt="" />
                    </div>
                    <div>
                        <a href="#">DIGITAL COMICS</a>
                    </div>
                </li>
                <li className="card">
                    <div className="card-img">
                        <img src={merchandise} alt="" />
                    </div>
                    <div>
                        <a href="#">DC MERCHANDISE</a>
                    </div>
                </li>
                <li className="card">
                    <div className="card-img">
                        <img src={subscription} alt="" />
                    </div>
                    <div>
                        <a href="#">SUBSCRIPTION</a>
                    </div>
                </li>
                <li className="card">
                    <div className="card-img">
                        <img src={shop} alt="" />
                    </div>
                    <div>
                        <a href="#">COMIC SHOP LOCATOR</a>
                    </div>
                </li>
                <li className="card">
                    <div className="card-img">
                        <img src={visa} alt="" />
                    </div>
                    <div>
                        <a href="#">DC POWER VISA</a>
                    </div>
                </li>
            </ul>

        </div>
        <div></div>
        <div></div>

    </footer>);
}

export default Footer;