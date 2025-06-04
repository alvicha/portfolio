
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
        <footer>
            <div className="row d-flex align-items-center justify-content-around mt-3">
                <div className="col-12 col-lg-2 mb-3 d-flex justify-content-start align-items-center">
                    <Link to="/"><img src="/images/logo.png" alt="Logo de la aplicación" width="90" height="60" /></Link>
                </div>

                <div className="col-12 col-lg-2 col-md-4 col-sm-6 mb-3 d-flex flex-column justify-content-center">
                    <p>Teléfono</p>
                    <p className="d-flex align-items-center">
                        <i className="pi pi-phone me-2" style={{ fontSize: '1.2rem' }}></i>
                        648722134
                    </p>
                </div>

                <div className="col-12 col-lg-2 col-md-4 col-sm-6 text-md-start mb-3">
                    <p>Email</p>
                    <p className="d-flex justify-content-center justify-content-md-start align-items-center">
                        <i className="pi pi-envelope me-2" style={{ fontSize: '1.2rem' }}></i>
                        <a href="mailto:avchaparro04@gmail.com">avchaparro04@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="border-top mt-4">
                <p className="text-center mt-4 mb-2">&copy; Copyright 2025. Alberto Villegas. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
