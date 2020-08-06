import React from 'react';

import './Footer.css';

const Footer = () =>{
    return(
        <React.Fragment>
            <div className="footer-skew"></div>
            <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h2 className="footer-brand__title">Tran<span>zat</span></h2>
                        <p className="footer-brand__txt">We the best in handling international money transfer</p>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-title">Product</h3>
                        <ul className="footer-txt">
                            <li>Personal</li>
                            <li>Business</li>
                            <li>Agents</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-title">Support</h3>
                        <ul className="footer-txt">
                            <li>Customer Service</li>
                            <li>Help Center</li>
                            <li>Docs</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-title">Downloads</h3>
                        <ul className="footer-txt">
                            <li>App Store</li>
                            <li>Google Play</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-title">Legal</h3>
                        <ul className="footer-txt">
                            <li>Tearms & Conditions</li>
                            <li>Privacy Ploicy</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="footer-title">Follow us</h3>
                        <div className="footer-txt">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
<p className="copy-right">&copy;2020 Tranzat. All rights reserved.</p>
                </div>
            </footer>
        </React.Fragment>
        
    )
}

export default Footer;