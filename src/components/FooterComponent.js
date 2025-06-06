import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="container py-md-4 py-lg-4">
                <div className="row d-flex text-center text-md-start text-lg-start flex-wrap">
                    <div className="col-12 col-lg-4 col-md-3 mb-4 mb-lg-0 mb-md-0 d-flex justify-content-center align-items-start">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <img src="/images/logo.png" alt="Logo de la aplicación" width="90" height="60" />
                        </Link>
                    </div>

                    <div className="col-12 col-lg-4 col-md-5 mb-4">
                        <h5 className="contact-title">{t("contact")}</h5>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start mt-3">
                            <i className="pi pi-map-marker me-3 icon-hover" />
                            {t("location")}
                        </p>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start mt-2">
                            <i className="pi pi-phone me-3 icon-hover" />
                            648722134
                        </p>
                        <p className="d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start mt-2">
                            <i className="pi pi-envelope me-3 icon-hover" />
                            <a href="mailto:avchaparro04@gmail.com" className="email-link">avchaparro04@gmail.com</a>
                        </p>
                    </div>

                    <div className="col-12 col-lg-4 col-md-4">
                        <h5 className="url-title">{t("links")}</h5>
                        <ul className="navbar-nav d-flex flex-column align-items-center align-items-md-start align-items-lg-start">
                            <li className="nav-item">
                                <Link className="nav-link nav-hover" to="/home">
                                    {t('home')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-hover" to="/about">
                                    {t('about')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-hover" to="/projects">
                                    {t('projects')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-hover" to="/contact">
                                    {t('contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-12 border-top mt-4">
                    <p className="text-center mt-4 mb-2">
                        &copy; Copyright 2025. Alberto Villegas.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
