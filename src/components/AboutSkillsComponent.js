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
        { src: "/images/vuejs.png", label: "VueJS", percent: "65%" },
        { src: "/images/React.png", label: "React", percent: "80%" },
        { src: "/images/symfony.png", label: "Symfony", percent: "70%" },
        { src: "/images/nodejs.png", label: "NodeJS", percent: "60%" },
        { src: "/images/bootstrap.png", label: "Bootstrap", percent: "80%" },
        { src: "/images/firebase.png", label: "Firebase", percent: "75%" },
        { src: "/images/mysql.png", label: "MySQL", percent: "90%" },
        { src: "/images/angular.png", label: "Angular", percent: "75%" },
        { src: "/images/logoc.png", label: "C#", percent: "65%" },
        { src: "/images/java.png", label: "Java", percent: "65%" },
        { src: "/images/docker.png", label: "Docker", percent: "65%" },
        { src: "/images/typescript.png", label: "TypeScript", percent: "70%" },
        { src: "/images/mongodb.png", label: "MongoDB", percent: "60%" },
        { src: "/images/apache-cordova.png", label: "Apache Cordova", percent: "75%" },
    ];

    const learning = [
        { src: "/images/python.png", label: "Python" },
        { src: "/images/laravel.png", label: "Laravel" },
        { src: "/images/tailwind.png", label: "Tailwind CSS" },
        { src: "/images/c.png", label: "C++" },
    ];

    const otherSkills = [
        { src: "/images/ingles.jpg", label: "Inglés", percent: "B1" },
        { src: "/images/españa.jpg", label: "Español", percent: "Nativo" },
        { src: "/images/valenciano.jpg", label: "Valenciano", percent: "Intermedio" },
    ];

    return (
        <section className={`p-3 p-md-5 page ${active ? "active" : ""}`}>
            <h2 className="skill-title">{t("skills")}</h2>

            <div className="skills-glass-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-glass-card">
                        <div className="skill-glass-icon">
                            <Image src={skill.src} alt={skill.label} />
                        </div>
                        <div className="skill-glass-label">{skill.label}</div>
                        <div className="skill-glass-percent">{skill.percent}</div>
                    </div>
                ))}
            </div>

            <h3 className="text-uppercase text-center mb-5">{t("learningObjectives")}</h3>
            <div className="skills-glass-grid">
                {learning.map((skill, index) => (
                    <div key={index} className="skill-card-learning">
                        <div className="skill-glass-icon">
                            <img src={skill.src} alt={skill.label} />
                        </div>
                        <div className="skill-glass-label">{skill.label}</div>
                    </div>
                ))}
            </div>

            <h3 className="text-uppercase text-center">{t("otherSkills")}</h3>
            <div className="skills-glass-grid">
                {otherSkills.map((skill, index) => (
                    <div key={index} className="skill-card-learning">
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