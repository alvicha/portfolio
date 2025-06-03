import "./portfolio.css";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
    Button
} from "@material-tailwind/react";

const ProjectsPage = () => {
    const projects = [
        {
            title: "ALBERTOURS",
            description: "Aplicación web realizada con PHP para la gestión de reservas de tours por las diferentes ciudades de España. Nos permite explorar tours disponibles, realizar reservas o cancelar las existentes y consultar información detallada sobre cada tour.",
            image: "/images/ALBERTOURS.jpg",
            link: "https://github.com/usuario/proyecto1"
        },
        {
            title: "ROMA8",
            description: "Roma8 es una aplicación web y móvil desarrollada mediante Quasar sobre un sistema de gestión o administración de una finca. Este proyecto fue realizado con otro compañero de equipo.",
            image: "/images/roma8.jpg",
            link: "https://github.com/usuario/proyecto2"
        },
        {
            title: "Proyecto 3",
            description: "Descripción del proyecto 3. Aplicación móvil usando React Native.",
            image: "https://via.placeholder.com/300x200",
            link: "https://github.com/usuario/proyecto3"
        }
    ];

    return (
        <div className="projects-page">
            <h1 className="projects-title mt-5">Mis Proyectos</h1>
            <p className="projects-description text-center">Aquí encontrarás una selección de mis proyectos que he hecho
                tanto individuales como en equipo.
                Explora mis proyectos para saber
                más sobre lo que hago.</p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="rounded-lg">
                        <Card className="w-full max-w-[26rem] h-[32rem] flex flex-col rounded-lg overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                className="m-0 rounded-none"
                            >
                                <img
                                    src={project.image}
                                    alt="Imagenes de proyectos"
                                    className="w-full object-cover h-60"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography className="mt-2 mb-4" variant="h4" color="blue-gray">
                                    {project.title}
                                </Typography>
                                <Typography variant="lead" color="gray" className="mt-3 font-normal text-justify">
                                    {project.description}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <a href="#" className="no-underline">
                                    <Button size="sm" variant="filled" className="bg-gray-900 text-white flex items-center gap-2">
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
            <Button className="flex items-center gap-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                </svg>
                Más Proyectos
            </Button>
        </div>
    );
};

export default ProjectsPage;
