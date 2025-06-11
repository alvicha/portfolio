import { Image } from "primereact/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const AboutSkills = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    const skills = [
        { src: "/images/javascript.png", label: "JavaScript" },
        { src: "/images/html.png", label: "HTML5" },
        { src: "/images/css.png", label: "CSS" },
        { src: "/images/php.png", label: "PHP" },
        { src: "/images/vuejs.png", label: "VueJS" },
        { src: "/images/React.png", label: "React" },
        { src: "/images/symfony.png", label: "Symfony" },
        { src: "/images/nodejs.png", label: "NodeJS" },
        { src: "/images/bootstrap.png", label: "Bootstrap" },
        { src: "/images/firebase.png", label: "Firebase" },
        { src: "/images/mysql.png", label: "MySQL" },
        { src: "/images/angular.png", label: "Angular" },
        { src: "/images/logoc.png", label: "C#" },
        { src: "/images/java.png", label: "Java" },
    ];

    return (
        <section className={`p-3 p-md-5 page ${active ? "active" : ""}`}>
            <h2 className="skill-title">{t("skills")}</h2>

            <div className="row align-items-center mb-5 justify-content-center">
                <div className="col-12 col-lg-6 skills-grid rounded gap-5">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item text-center">
                            <Image src={skill.src} alt="Imagen tecnologias" imageClassName="skill-image" />
                            <p className="skill-label mt-3 mb-0">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSkills;
