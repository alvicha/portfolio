import "./portfolio.css";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Chip } from 'primereact/chip';

const ProjectsPage = () => {
    const { t } = useTranslation();
    const [localActive, setLocalActive] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState(3);

    useEffect(() => {
        setTimeout(() => setLocalActive(true), 50);
    }, []);

    const projects = [
        {
            title: t("projectsCard.list.0.title"),
            description: t("projectsCard.list.0.description"),
            image: "/images/ALBERTOURS.jpg",
            link: "https://github.com/alvicha/ALBERTOURS.git",
            linkVideo: "https://youtu.be/4jwsf2T0TYk",
            year: 2022,
            tags: [{
                name: "PHP",
                icon: "/images/php.png",
            },
            {
                name: "HTML",
                icon: "/images/html.png",
            },
            {
                name: "CSS",
                icon: "/images/css.png",
            },
            {
                name: "MYSQL",
                icon: "/images/mysql.png"
            }]
        },
        {
            title: t("projectsCard.list.1.title"),
            description: t("projectsCard.list.1.description"),
            image: "/images/roma8.jpg",
            link: "https://github.com/alvicha/PFC_Roma8.git",
            linkVideo: "https://youtu.be/ykaZMpaO2Qc",
            year: 2024,
            tags: [{
                name: "VUE.JS",
                icon: "/images/vuejs.png",
            },
            {
                name: "JAVASCRIPT",
                icon: "/images/javascript.png",
            },
            {
                name: "QUASAR",
                icon: "/images/quasar.png",
            },
            {
                name: "CORDOVA",
                icon: "/images/cordova.png"
            }]
        },
        {
            title: t("projectsCard.list.2.title"),
            description: t("projectsCard.list.1.description"),
            image: "/images/juego_memoria.jpg",
            link: "https://github.com/alvicha/AE03AD.git",
            year: 2024,
            linkVideo: "https://github.com/alvicha/ALBERTOURS.git",

            tags: [{
                name: "JAVA",
                icon: "/images/java.png",
            },
            {
                name: "MONGODB",
                icon: "/images/mongodb.png",
            }]
        },
        {
            title: t("projectsCard.list.3.title"),
            description: t("projectsCard.list.3.description"),
            image: "/images/hotel_estrellas.jpg",
            link: "https://github.com/rsanzfloridauni/DAM2324_Estrellas.git",
            year: 2024,
            linkVideo: "https://github.com/alvicha/ALBERTOURS.git",
            tags: [{
                name: "REACT NATIVE",
                icon: "/images/react.png",
            },
            {
                name: "JAVASCRIPT",
                icon: "/images/javascript.png",
            },
            {
                name: "EXPO",
                icon: "/images/expo.png",
            },
            {
                name: "MONGODB",
                icon: "/images/mongodb.png",
            }]
        },
        {
            title: t("projectsCard.list.4.title"),
            description: t("projectsCard.list.4.description"),
            image: "/images/comida.jpg",
            link: "https://github.com/alvicha/PFC_Roma8.git",
            year: 2024,
            linkVideo: "https://youtu.be/XemnFDyUMoA",
            tags: [{
                name: "PHP",
                icon: "/images/php.png",
            },
            {
                name: "HTML",
                icon: "/images/html.png",
            },
            {
                name: "CSS",
                icon: "/images/css.png",
            },
            {
                name: "JAVASCRIPT",
                icon: "/images/javascript.png",
            },
            {
                name: "MYSQL",
                icon: "/images/mysql.png"
            }]
        },
        {
            title: t("projectsCard.list.5.title"),
            description: t("projectsCard.list.5.description"),
            image: "/images/templator.jpg",
            link: "https://github.com/alvicha/TEMPLATOR_FLORIDA.git",
            year: 2025,
            linkVideo: "https://youtu.be/-2a1i9pEZ5E",
            tags: [{
                name: "HTML",
                icon: "/images/html.png",
            },
            {
                name: "CSS",
                icon: "/images/css.png",
            },
            {
                name: "PHP",
                icon: "/images/php.png",
            },
            {
                name: "REACT",
                icon: "/images/react.png",
            },
            {
                name: "JAVASCRIPT",
                icon: "/images/javascript.png",
            },
            {
                name: "BOOSTRAP",
                icon: "/images/bootstrap.png",
            },
            {
                name: "MYSQL",
                icon: "/images/mysql.png"
            }]
        },

        {
            title: t("projectsCard.list.6.title"),
            description: t("projectsCard.list.6.description"),
            image: "/images/fitness.jpg",
            link: "https://github.com/PauHernandezFort/proyectoFront.git",
            year: 2025,
            tags: [
                {
                    name: "PHP",
                    icon: "/images/php.png",
                },
                {
                    name: "Angular",
                    icon: "/images/angular.png",
                },
                {
                    name: "Symfony",
                    icon: "/images/symfony.png",
                },
                {
                    name: "BOOSTRAP",
                    icon: "/images/bootstrap.png",
                },
                {
                    name: "MYSQL",
                    icon: "/images/mysql.png"
                }]
        }
    ];

    const showMoreProjects = () => {
        setVisibleProjects(projects.length);
    };

    return (
        <section className={`projects-page page ${localActive ? 'active' : ''}`}>
            <h1 className="projects-title mt-5">{t("projectsTitle")}</h1>
            <p className="projects-description text-center">
                {t("projectsDescription")}
            </p>

            <div className="w-[83%] row mx-auto">
                {projects.slice(0, visibleProjects).map((project) => (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center text-white p-10 mb-5 rounded-2xl hover:bg-gray-800 transition-colors duration-300">
                        <div className="bg-gray-900 rounded-xl p-3 shadow-lg">
                            <Image src={project.image} alt="Project preview" imageClassName="rounded-xl w-full" />
                        </div>

                        <div>
                            <h2 className="text-2xl text-left mb-3 font-semibold">{project.title}</h2>
                            <p className="text-left mb-4">{project.description}</p>

                            <div className="flex justify-between border-bottom mb-4">
                                <span className="block text-left font-medium text-white mb-3"> {t("year")}</span>
                                <p>{project.year}</p>
                            </div>
                           

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <Chip
                                        key={i}
                                        label={tag.name}
                                        className="chip rounded-full px-4 py-1 font-medium"
                                    />))}
                            </div>

                            <div className="flex gap-4">
                                <a href={project.link} target="_blank" className="no-underline" rel="noopener noreferrer">
                                    <Button label={t("viewGitHub")} icon="pi pi-github" className="buttons-card text-sm" />
                                </a>
                                <a href={project.linkVideo} target="_blank" className="no-underline" rel="noopener noreferrer">
                                    <Button label={t("viewDemo")} icon="pi pi-play" className="buttons-card text-sm" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {visibleProjects < projects.length && (
                <Button label={t("viewMore")} className="rounded p-3 button-more mt-4" onClick={showMoreProjects}>
                </Button>
            )}
        </section>
    );
};

export default ProjectsPage;

