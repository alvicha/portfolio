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
            },
            {
                name: "JAVASCRIPT",
            },
            {
                name: "QUASAR",
            },
            {
                name: "CORDOVA",
            }]
        },
        {
            title: t("projectsCard.list.2.title"),
            description: t("projectsCard.list.1.description"),
            image: "/images/juego_memoria.jpg",
            link: "https://github.com/alvicha/AE03AD.git",
            year: 2024,
            tags: [{
                name: "JAVA",
            },
            {
                name: "MONGODB",
            }]
        },
        {
            title: t("projectsCard.list.3.title"),
            description: t("projectsCard.list.3.description"),
            image: "/images/hotel_estrellas.jpg",
            link: "https://github.com/rsanzfloridauni/DAM2324_Estrellas.git",
            year: 2024,
            tags: [{
                name: "REACT NATIVE",
                icon: "/images/react.png",
            },
            {
                name: "JAVASCRIPT",
            },
            {
                name: "EXPO",
            },
            {
                name: "MONGODB",
            }]
        },
        {
            title: t("projectsCard.list.4.title"),
            description: t("projectsCard.list.4.description"),
            image: "/images/comida.jpg",
            link: "https://github.com/alvicha/App-Comida.git",
            year: 2024,
            linkVideo: "https://youtu.be/XemnFDyUMoA",
            tags: [{
                name: "PHP",
            },
            {
                name: "HTML",
            },
            {
                name: "CSS",
            },
            {
                name: "JAVASCRIPT",
            },
            {
                name: "MYSQL",
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
            },
            {
                name: "CSS",
            },
            {
                name: "PHP",
            },
            {
                name: "REACT",
            },
            {
                name: "JAVASCRIPT",
            },
            {
                name: "BOOSTRAP",
            },
            {
                name: "MYSQL",
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
                },
                {
                    name: "Angular",
                },
                {
                    name: "Symfony",
                },
                {
                    name: "BOOSTRAP",
                },
                {
                    name: "MYSQL",
                }]
        }
    ];

    const showMoreProjects = () => {
        setVisibleProjects(projects.length);
    };

    return (
        <section className={`projects-page page ${localActive ? 'active' : ''}`}>
            <h1 className="projects-title mt-5">{t("projectsTitle")}</h1>
            <p className="projects-description">
                {t("projectsDescription")}
            </p>

            <div className="w-[94%] mx-auto grid gap-5">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <div key={index} className="project-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:p-6 lg:p-10 mb-5 rounded-2xl">
                        <div className="project-image-wrapper w-full max-w-[600px] max-h-[400px] bg-gray-900 rounded-lg shadow-lg mx-auto p-2 p-md-3 p-sm-3 overflow-hidden">
                            <Image
                                src={project.image}
                                alt="Project preview"
                                imageClassName="w-full object-cover rounded-xl"
                                preview
                            />
                        </div>

                        <div>
                            <h2 className="text-2xl text-left mb-3 font-semibold">{project.title}</h2>
                            <p className="text-left mb-4">{project.description}</p>

                            <div className="container-year flex justify-between mb-4">
                                <span className="block text-left font-medium mb-3"> {t("year")}</span>
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
                                {project.linkVideo && (
                                    <a href={project.linkVideo} target="_blank" className="no-underline" rel="noopener noreferrer">
                                        <Button label={t("viewDemo")} icon="pi pi-play" className="buttons-card text-sm" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {visibleProjects < projects.length && (
                    <div className="col-12 text-center">
                        <Button label={t("viewMore")} className="rounded button-more mb-4" onClick={showMoreProjects}>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsPage;

