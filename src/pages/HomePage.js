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
            label: t("developmentLabel")
        },
        {
            title: t("programmingTitle"),
            description: t("programmingDescription"),
            img: "/images/programacion.jpg",
            label: t("programmingLabel")
        },
        {
            title: t("databaseTitle"),
            description: t("databaseDescription"),
            img: "/images/base_datos.jpg",
            label: t("databaseLabel")
        }
    ];

    const footer = (
        <div className="d-flex justify-content-end">
            <Button icon="pi pi-plus" className="btn-plus rounded-pill" severity="warning" />
        </div>
    );

    return (
        <div>
            <div className={`home-container page ${active ? "active" : ""}`}>
                <div className="text-start w-50">
                    <div className="subtitle text-start">{t("uiuxDesigner")}</div>
                    <h1 className="title-name fw-bold mb-5">{t("greeting")}</h1>
                    <div className="button-group">
                        <Button className="button-about rounded me-3" icon="pi pi-arrow-right icon-arrow" iconPos="right" onClick={() => navigate('/about')} label={t("aboutMeButton")} outlined />
                        <Button className="rounded fw-bold btn-outline-orange" onClick={() => navigate('/contact')} label={t("contactMeButton")}
                            outlined />
                    </div>
                    <div className="text-justify mt-4">
                        {t("introText")}
                    </div>
                </div>
                <div className="mt-4 mt-md-0">
                    <ProfileCard />
                </div>
            </div>

            <div className="titulo-caracteristicas-wrapper">
                <h2 className="titulo-caracteristicas fw-bold">{t("concreteFeatures")}</h2>
            </div>
            <div className="row mx-auto mb-5">
                {characteristics.map((item, index) => (
                    <div className="flex justify-content-center col-12 col-lg-4 col-md-4 col-sm-4 mb-0 mb-sm-5" key={index}>
                        <Card
                            title={item.title}
                            header={<Image alt={item.title} src={item.img} imageClassName="rounded img-fluid mb-3" />}
                            footer={footer}
                            className="h-100 text-justify rounded"
                        >
                            <p className="mt-0">{item.description}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;