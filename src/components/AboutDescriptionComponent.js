import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AboutDescription = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    return (
        <section className={`py-5 page ${active ? "active" : ""}`}>
            <div className="container-fluid">
                <h1 className="about-title mt-5">{t("aboutTitle")}</h1>

                <div className="row align-items-center mb-4">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <div className="about-image-wrapper">
                            <Image src="/images/perfil2.jpg" alt="Imagen perfil" imageClassName="about-image img-fluid"
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mt-5">
                        <p className="about-text text-center text-lg-start text-md-start">
                            {t("aboutDescriptionFirst")}
                            <br /> <br />
                            {t("aboutDescriptionSecond")}
                        </p>

                        <div className="d-flex justify-content-center justify-content-md-start">
                            <a href="/cv/curriculum.pdf" download>
                                <Button className="rounded btn-outline-orange fw-bold mt-3" label={t("downloadCV")} icon="pi pi-download" outlined />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDescription;
