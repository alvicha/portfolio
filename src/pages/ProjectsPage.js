import "./portfolio.css";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
    Button
} from "@material-tailwind/react";
import { Tag } from 'primereact/tag';
import { useEffect, useState } from "react";
import { Image } from 'primereact/image';

const ProjectsPage = () => {
    const [localActive, setLocalActive] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState(3);

    useEffect(() => {
        setTimeout(() => setLocalActive(true), 50);
    }, []);

    const projects = [
        {
            title: "Albertours",
            description: "Aplicación web realizada con PHP para la gestión de reservas de tours por las diferentes ciudades de España. Nos permite explorar tours disponibles, realizar reservas o cancelar las existentes y consultar información detallada sobre cada tour.",
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
            title: "Roma8",
            description: "Aplicación web y móvil desarrollada mediante Quasar sobre un sistema de gestión o administración de una finca. Este proyecto fue realizado con otro compañero de equipo.",
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
            title: "Aplicación juego memoria",
            description: "Aplicación en Java del juego de la memoria que usa MongoDB como base de datos. Permite a los usuarios registrarse, iniciar sesión y jugar eligiendo distintos niveles de dificultad. Guarda los tiempos, resultados y récords, y está desarrollada con el patrón de diseño MVC.",
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
            title: "Hotel Estrellas",
            description: "Aplicación para gestionar reservas de habitaciones que ofrece una experiencia completa al cliente. Incluye versión móvil con información de servicios como comedor, piscina y gimnasio, y permite buscar, explorar y reservar habitaciones de forma rápida y segura. Proyecto desarrollado en equipo",
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
            }]
        },
        {
            title: "App Comida",
            description: "Aplicación web para gestionar platos de comida, que permite consultar datos mediante una API REST pública y almacenar información relevante en una base de datos propia. Además, utiliza tecnologías para manejar tanto la búsqueda de platos como la gestión en la base de datos.",
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
            title: "Templator",
            description: "Integración de un editor HTML de tipo WYSIWYG llamado Summernote con el objetivo de crear y gestionar plantillas HTML para el envío de correos electrónicos.",
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
            }]
        }
    ];

    const showMoreProjects = () => {
        setVisibleProjects(projects.length);
    };

    return (
        <section className={`projects-page page ${localActive ? 'active' : ''}`}>
            <h1 className="projects-title mt-5">Mis Proyectos</h1>
            <p className="projects-description text-center">Aquí encontrarás una selección de mis proyectos que he hecho
                tanto individuales como en equipo.
                Explora mis proyectos para saber
                más sobre lo que hago.</p>

            <div className="projects-grid">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <div key={index} className="rounded-lg">
                        <Card className="w-full max-w-[29rem] h-[40rem] mb-3 flex flex-col rounded-lg overflow-hidden">
                            <CardHeader
                                shadow={false}
                                className="m-0 rounded-none"
                            >
                                <div className="w-full">
                                    <Image src={project.image} alt="Imagen del proyecto" width="470" preview />
                                </div>
                            </CardHeader>
                            <CardBody className="p-4">
                                <Typography className="text-left mt-3 mb-4" variant="h4" color="blue-gray">
                                    {project.title}
                                </Typography>
                                <Typography variant="lead" color="gray" className="mt-3 font-normal text-justify">
                                    {project.description}
                                </Typography>

                                <div className="flex justify-center align-center flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag, i) => (
                                        <Tag key={i} className="fw-normal rounded-pill" style={{
                                            border: '1px solid orange',
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            padding: '6px 10px',
                                        }}
                                            value={
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 7, justifyContent: 'center' }}>
                                                    <img src={tag.icon} alt={tag.name} style={{ width: 24, height: 20, flexShrink: 0 }} />
                                                    <span className="tag-name">{tag.name}</span>
                                                </div>
                                            }>
                                        </Tag>
                                    ))}
                                </div>
                            </CardBody>
                            <CardFooter className="flex justify-center gap-3 m-4">
                                <a href={project.linkVideo} className="no-underline">
                                    <Button size="sm" className="buttons-card">
                                        Ver demo
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm6 3v10l8-5-8-5z" />
                                        </svg>
                                    </Button>
                                </a>

                                <a href={project.link} className="no-underline">
                                    <Button size="sm" className="buttons-card">
                                        Ver en GitHub
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            stroke="none"
                                            className="h-5 w-5"
                                        >
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.11-.775.42-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.932 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.63-5.48 5.922.43.37.823 1.102.823 2.222v3.293c0 .32.217.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>

            {visibleProjects < projects.length && (
                <Button className="button-more" onClick={showMoreProjects}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Mostrar Más
                </Button>
            )}
        </section>
    );
};

export default ProjectsPage;
