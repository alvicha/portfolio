import { Link } from "react-router-dom";
import { Button } from 'primereact/button';

const HeaderComponent = () => {
    return (
        <header>
            <nav className="navbar p-4">
                <div className="container-fluid">
                    <div className="d-flex align-items-center w-100">
                        <div className="d-flex justify-content-end flex-column flex-sm-row align-items-start">
                            <Link to="/"><img src="/images/logo.png" alt="Logo de la aplicación" width="89" height="60" /> </Link>
                        </div>
                        <div className="navegacion flex-grow-1 d-flex mb-2 mb-lg-0 mb-md-0 mb-sm-0 justify-content-end">
                            <ul className="navbar-nav d-flex flex-column flex-sm-row">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">
                                        Inicio
                                    </Link>
                                </li>
                                <li className="nav-item ms-3">
                                    <Link className="nav-link" to="/about">
                                        Sobre mí
                                    </Link>
                                </li>
                                <li className="nav-item ms-3">
                                    <Link className="nav-link" to="/projects">
                                        Proyectos
                                    </Link>
                                </li>
                                <li className="nav-item ms-3">
                                    <Link className="nav-link" to="/contact">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <Button label="Cambiar Idioma" icon="pi pi-language" className="ml-5 rounded buttons" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;