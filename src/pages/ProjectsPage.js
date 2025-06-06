import "./portfolio.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Image } from 'primereact/image';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

            <div className="row mx-auto">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <div className="flex justify-content-center col-12 col-lg-4 col-md-4 col-sm-4" key={index}>
                        <Card
                            key={index}
                            className="rounded mb-4"
                            header={<Image src={project.image} alt="Imagen del proyecto" preview />}
                            footer={
                                <div className="flex justify-content-center gap-3 mb-2">
                                    <a href={project.linkVideo} target="_blank" rel="noreferrer" className="no-underline">
                                        <Button label={t("viewDemo")} icon="pi pi-play" className="buttons-card rounded" />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noreferrer" className="no-underline">
                                        <Button label={t("viewGitHub")} icon="pi pi-github" className="buttons-card rounded" />
                                    </a>
                                </div>
                            }
                        >
                            <h3 className="card-title mb-4">{project.title}</h3>
                            <p className="text-justify text-gray-700">{project.description}</p>

                            <div className="flex justify-content-center align-items-center flex-wrap gap-2 mt-4 mb-2">
                                {project.tags.map((tag, i) => (
                                    <Tag
                                        key={i}
                                        className="fw-normal rounded-pill"
                                        style={{
                                            border: '1px solid orange',
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            padding: '6px 10px',
                                        }}
                                        value={
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 7,
                                                justifyContent: 'center'
                                            }}>
                                                <img src={tag.icon} alt={tag.name} style={{ width: 25, objectFit: "cover", flexShrink: 0 }} />
                                                <span className="tag-name">{tag.name}</span>
                                            </div>
                                        }
                                    />
                                ))}
                            </div>
                        </Card>
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

