import { useEffect, useState } from "react";

const AboutSkills = () => {
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
        <section className={`section-skills p-5 m-5 page ${active ? "active" : ""}`}>
            <h2 className="skill-title me-5">Habilidades</h2>
            <div className="skills-grid rounded">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item" >
                        <img src={skill.src} alt="Imagen tecnologias" className="skill-image" />
                        <p className="skill-label mt-3">{skill.label}</p>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default AboutSkills;
