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
        { src: "/images/javascript.png", label: "JavaScript", percent: "85%" },
        { src: "/images/html.png", label: "HTML5", percent: "90%" },
        { src: "/images/css.png", label: "CSS", percent: "85%" },
        { src: "/images/php.png", label: "PHP", percent: "60%" },
        { src: "/images/vuejs.png", label: "VueJS", percent: "60%" },
        { src: "/images/React.png", label: "React", percent: "80%" },
        { src: "/images/symfony.png", label: "Symfony", percent: "70%" },
        { src: "/images/nodejs.png", label: "NodeJS", percent: "60%" },
        { src: "/images/bootstrap.png", label: "Bootstrap", percent: "80%" },
        { src: "/images/firebase.png", label: "Firebase", percent: "60%" },
        { src: "/images/mysql.png", label: "MySQL", percent: "90%" },
        { src: "/images/angular.png", label: "Angular", percent: "75%" },
        { src: "/images/logoc.png", label: "C#", percent: "60%" },
        { src: "/images/java.png", label: "Java", percent: "60%" },
    ];

    return (
        <section className={`p-3 p-md-5 page ${active ? "active" : ""}`}>
            <h2 className="skill-title">{t("skills")}</h2>

            <div className="skills-glass-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-glass-card">
                        <div className="skill-glass-icon">
                            <img src={skill.src} alt={skill.label} />
                        </div>
                        <div className="skill-glass-label">{skill.label}</div>
                        <div className="skill-glass-percent">{skill.percent}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSkills;
