import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import shop from "../assets/img/buy-comics-shop-locator.png";
import visa from "../assets/img/buy-dc-power-visa.svg";
import dcLogoBig from "../assets/img/dc-logo-bg.png";
import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

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
        <div className="footer-center">
            <div className="container">
                <div className="container-links">
                    <div>
                        <ul>
                            <li className="list-title">DC COMICS</li>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                            <li className="list-title list-title2">SHOP</li>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="list-title">DC</li>
                            <li>Terms Of Use</li>
                            <li>Privacy Policy</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshop</li>
                            <li>CPSC Certificates</li>
                            <li>Rating</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="list-title">SITES</li>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={dcLogoBig} alt="" />
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="btn"> SIGN-UP NOW!</div>
            <div className="container-footer-bottom">
                <div className="btn-follow">FOLLOW US</div>
                <ul className="icons-list">
                    <li><img src={facebook} alt="" /></li>
                    <li><img src={twitter} alt="" /></li>
                    <li><img src={youtube} alt="" /></li>
                    <li><img src={pinterest} alt="" /></li>
                    <li><img src={periscope} alt="" /></li>
                </ul>
            </div>
        </div>

    </footer>);
}

export default Footer;