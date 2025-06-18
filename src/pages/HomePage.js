import { useNavigate } from "react-router-dom";
import "./portfolio.css";
import { Button } from 'primereact/button';
import { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import ProfileCard from "../components/ProfileCard";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    const characteristics = [
        {
            title: t("developmentTitle"),
            description: t("developmentDescription"),
            img: "/images/desarrollo.jpeg",
        },
        {
            title: t("programmingTitle"),
            description: t("programmingDescription"),
            img: "/images/programacion.jpg",
        },
        {
            title: t("databaseTitle"),
            description: t("databaseDescription"),
            img: "/images/base_datos.jpg",
        }
    ];

    return (
        <div className={`container-fluid page ${active ? "active" : ""}`}>
            <div className="row align-items-center min-h-[80vh] text-center d-flex flex-lg-row flex-column mt-0 mt-md-5">
                <div className="col-12 col-lg-6 col-md-6 mb-0 mb-md-5">
                    <h1 className="title-name fw-bold mb-5">{t("greeting")}</h1>

                    <div className="button-group">
                        <Button className="button-about rounded me-3" icon="pi pi-arrow-right icon-arrow" iconPos="right" onClick={() => navigate('/about')} label={t("aboutMeButton")} outlined />
                        <Button className="rounded fw-bold btn-outline-orange" onClick={() => navigate('/contact')} label={t("contactMeButton")} outlined />
                    </div>
                    <div className="intro-text">
                        {t("introText")}
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <ProfileCard />
                </div>
            </div>

            <div className="titulo-caracteristicas-wrapper">
                <h2 className="titulo-caracteristicas">{t("concreteFeatures")}</h2>
            </div>
            <div className="row justify-content-center mx-auto g-4 mb-5">
                {characteristics.map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                        key={index}>
                        <Card
                            title={item.title}
                            header={
                                <div className="p-3">
                                    <Image 
                                        alt={item.title} 
                                        src={item.img} 
                                        preview 
                                    />
                                </div>
                            }
                            className="custom-card"
                        >
                            <p className="mt-0 mb-3">{item.description}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
