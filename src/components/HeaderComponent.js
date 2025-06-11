import { Link } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";
import ScreensContext from "../screens/ScreensContext";

const HeaderComponent = () => {
    const { t, i18n } = useTranslation();
    const [iconDark, setIconDark] = useState("pi pi-moon");
    const [darkMode, setDarkMode] = useState(false);
    const { containerRef } = useContext(ScreensContext);

    const countries = [
        { nameKey: "nameLanguages.french", code: 'fr', flag: "https://flagcdn.com/w40/fr.png" },
        { nameKey: "nameLanguages.spanish", code: 'es', flag: 'https://flagcdn.com/w40/es.png' },
        { nameKey: "nameLanguages.english", code: 'en', flag: 'https://flagcdn.com/w40/gb.png' },
    ];

    const [selectedCountry, setSelectedCountry] = useState(countries[1]);

    const changeLanguage = (lng) => {
        setSelectedCountry(lng);
        i18n.changeLanguage(lng.code);
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center gap-1">
                    <img src={option.flag} alt={t(option.nameKey)} style={{ width: '28%', objectFit: 'cover', marginRight: '8px' }} />
                    <div>{t(option.nameKey)}</div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-1">
                <img src={option.flag} alt={t(option.nameKey)} style={{ width: '25%', objectFit: 'cover', marginRight: '8px' }} />
                <div>{t(option.nameKey)}</div>
            </div>
        );
    };

    const changeDarkMode = async () => {
        const newMode = !darkMode;
        setDarkMode(newMode);

        setIconDark(newMode ? 'pi pi-sun' : 'pi pi-moon');
        containerRef.current.classList.toggle('dark-mode');
    };


    return (
        <header>
            <nav className="navbar navbar-expand-lg p-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt={t('home')} width="89" height="60" />
                    </Link>

                    <div className="navbar-collapse navegacion flex-grow-1 mb-2 mb-lg-0 mb-md-0 mb-sm-0" id="opciones">
                        <ul className="navbar-nav d-flex flex-column flex-sm-row">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">
                                    {t('home')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    {t('about')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">
                                    {t('projects')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    {t('contact')}
                                </Link>
                            </li>
                        </ul>

                        <Dropdown
                            value={selectedCountry}
                            onChange={(e) => changeLanguage(e.value)}
                            options={countries}
                            optionLabel="nameKey"
                            placeholder="Seleccionar idioma"
                            valueTemplate={selectedCountryTemplate}
                            itemTemplate={countryOptionTemplate}
                            className="custom-dropdown"
                        />
                    </div>
                    <Button icon={iconDark} className="btn-light" aria-label="Icono modo oscuro"
                        onClick={changeDarkMode} />
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;