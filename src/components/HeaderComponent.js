import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

const HeaderComponent = () => {
    return (
        <header>
            <nav className="navbar p-3">
                <div className="container-fluid">
                    <div className="d-flex align-items-center w-100">
                        <div className="d-flex align-items-center flex-column flex-sm-row align-items-start">
                            <Link to="/templatesList"><img src="/images/logo.png" alt="Logo de la aplicación" width="100" height="90" /> </Link>
                        </div>

                        <div className="navegacion flex-grow-1 d-flex justify-content-center mb-2 mb-lg-0 mb-md-0 mb-sm-0">
                            <ul className="navbar-nav d-flex flex-column flex-sm-row">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        Inicio</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="nav-link" href="sobre_mi(servicios).html">
                                        Sobre mí</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="nav-link" href="proyectos.html">Proyectos</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="nav-link" href="contacto.html">Contacto</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <Button label="Cambiar Idioma" icon="pi pi-language" className="rounded-pill buttons"/>
                        </div>

                        <div className="d-flex ms-5 justify-content-end justify-content-sm-center align-items-sm-center">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones"
                                aria-controls="opciones" aria-expanded="false" aria-label="Navegación hamburguesa">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;