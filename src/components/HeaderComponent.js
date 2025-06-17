import { Link } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";
import ScreensContext from "../screens/ScreensContext";

const HeaderComponent = () => {
    const { t, i18n } = useTranslation();
    const [iconDark, setIconDark] = useState("pi pi-sun");
    const [darkMode, setDarkMode] = useState(true);
    const { containerRef } = useContext(ScreensContext);
    const [isOpen, setIsOpen] = useState(false);

    const countries = [
        { nameKey: "nameLanguages.french", code: 'fr', flag: "https://flagcdn.com/w40/fr.png" },
        { nameKey: "nameLanguages.spanish", code: 'es', flag: 'https://flagcdn.com/w40/es.png' },
        { nameKey: "nameLanguages.english", code: 'en', flag: 'https://flagcdn.com/w40/gb.png' },
    ];

    const [selectedCountry, setSelectedCountry] = useState(countries[1]);

    const changeLanguage = (lng) => {
        setSelectedCountry(lng);
        i18n.changeLanguage(lng.code);
    };

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

    const changeDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        setIconDark(newMode ? 'pi pi-sun' : 'pi pi-moon');
        document.documentElement.classList.toggle('light-mode');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <Link className="navbar-brand" to="/">
                <img src="/images/logo.png" alt={t('home')} width="89" height="60" />
            </Link>
            <button className="abrir-menu" onClick={toggleMenu}>
                <i className="pi pi-bars"></i>
            </button>

            <nav className={`navbar${isOpen ? " visible" : ""}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home" onClick={() => setIsOpen(false)}>{t('home')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>{t('about')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>{t('projects')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>{t('contact')}</Link>
                    </li>
                    <li className="nav-item mt-3 mt-lg-0 mt-md-0">
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
                    </li>
                </ul>
                <Button icon={iconDark} className="btn-light" aria-label="Icono modo oscuro" onClick={changeDarkMode} />
            </nav>
        </header>
    );
};

export default HeaderComponent;