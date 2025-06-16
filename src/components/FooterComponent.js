import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="container">
                <div className="d-flex justify-content-center align-items-start mb-4">
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <img src="/images/logo.png" alt="Logo de la aplicación" width="90" height="60" />
                    </Link>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-lg-4 col-md-4">
                        <ul className="navbar-nav d-flex flex-row gap-5 align-items-center justify-content-center">
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

                <div className="footer-socials d-flex justify-content-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/alberto-villegas-chaparro-a786192a2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        title="LinkedIn"
                    >
                        <i className="pi pi-linkedin" />
                    </a>
                    <a
                        href="https://github.com/alberto-villegas-chaparro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        title="GitHub"
                    >
                        <i className="pi pi-github" />
                    </a>
                    <a
                        href="https://x.com/AlbertoVil58869"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        title="Twitter"
                    >
                        <i className="pi pi-twitter" />
                    </a>
                </div>

                <div className="col-12 border-top mt-4">
                    <p className="text-center mt-4 mb-2">
                        &copy; Copyright 2025. Alberto Villegas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
