import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AboutDescription = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    return (
        <section className={`section-profile p-5 m-5 page ${active ? "active" : ""}`}>
            <h1 className="about-title text-center mb-5 me-5">{t("aboutTitle")}</h1>
            <div className="about-content mt-2">
                <div className="about-image-wrapper">
                    <img src="/images/perfil2.jpg" alt="Imagen perfil" className="about-image" />
                </div>

                <div>
                    <p className="about-text me-5">
                        {t("aboutDescriptionFirst")}
                        <br /> <br />
                        {t("aboutDescriptionSecond")}
                    </p>
                    <a href="/cv/curriculum.pdf" download>
                        <Button className="rounded btn-outline-orange fw-bold mt-3" label={t("downloadCV")} icon="pi pi-download" outlined />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutDescription;
