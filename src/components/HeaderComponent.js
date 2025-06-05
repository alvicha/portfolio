import { Link } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
import { ChevronDownIcon } from 'primereact/icons/chevrondown';
import { ChevronRightIcon } from 'primereact/icons/chevronright';

const HeaderComponent = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        { name: 'Francés', code: 'FR', flag: "https://flagcdn.com/w40/fr.png" },
        { name: 'Español', code: 'ES', flag: 'https://flagcdn.com/w40/es.png' },
        { name: 'Inglés', code: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center gap-1">
                    <img src={option.flag} alt={option.name} style={{ width: '28%', objectFit: 'cover', marginRight: '8px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-1">
                <img src={option.flag} alt={option.name} style={{ width: '25%', objectFit: 'cover', marginRight: '8px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

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

                        <div style={{ marginLeft: '10px' }}>
                            <Dropdown
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.value)}
                                options={countries}
                                optionLabel="name"
                                placeholder="Seleccionar idioma"
                                valueTemplate={selectedCountryTemplate}
                                itemTemplate={countryOptionTemplate}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;