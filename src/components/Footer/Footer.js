import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
        <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
            <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
            <div>
            <a href="/" className="me-4 text-reset">
                <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faYoutube}/>
            </a>
            </div>
        </section>

        <section className="">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                    Our Company name is Fab Fragrance.
                </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Attor</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">perfume</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Body Spray</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Best Scent</a>
                </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset text-decoration-none">Help</a>
                </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                <p><i className="fas fa-home me-3"></i>Dhaka, Bangladesh</p>
                <p>
                    <i className="fas fa-envelope me-3"></i>
                    abc@def.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +880 1844-XXXXXX</p>
                <p><i className="fas fa-print me-3"></i> +880 1755-XXXXXX</p>
                </div>
            </div>
            </div>
        </section>
        <div className="text-center p-4 bg-secondary text-light">
            © 2022 Copyright:    
             <a className="text-reset fw-bold ms-2 text-decoration-none" href="/">Arnab Shikder</a>
        </div>
        </footer>
    );
};

export default Footer;