import { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    Typography,
    CardFooter,
} from "@material-tailwind/react";

const AboutAcademicData = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    const dataAcademics = [
        {
            company: "Florida Universitaria, Catarroja",
            grade: "Grado Superior de Desarrollo de Aplicaciones Web",
            period: "Septiembre 2024 - Presente",
        },
        {
            company: "Florida Universitaria, Catarroja",
            grade: "Grado Superior de Desarrollo de Aplicaciones Multiplataforma",
            period: "Septiembre 2022 - Junio 2024",
        },
        {
            company: "Florida Universitaria, Catarroja",
            grade: "Grado Medio de Técnico en Sistemas Microinformáticos y Redes",
            period: "Septiembre 2020 - Junio 2022",
        },
    ];

    return (
        <section className={`mt-5 page ${active ? "active" : ""}`}>
            <h1 className="experience-title mb-5 me-5">Datos Académicos</h1>
            <div>
                <p className="description-experience text-center">
                    Se detallan los estudios que he hecho, junto con las
                    <strong> instituciones educativas </strong> donde los hice.
                </p>
            </div>

            {dataAcademics.map((acad, index) => (
                <Card
                    key={index}
                    className="rounded mb-5 w-full max-w-[48rem] mx-auto shadow-lg"
                >
                    <CardBody className="p-4 flex items-center gap-4">
                        <i className="pi pi-graduation-cap text-orange-500 text-3xl"></i>
                        <div>
                            <Typography
                                variant="h5"
                                color="text-gray-700"
                                className="mb-4 mt-2"
                            >
                                {acad.company}
                            </Typography>
                            <Typography>{acad.grade}</Typography>
                        </div>
                    </CardBody>
                    <CardFooter className="p-4 mt-2">
                        <Typography size="sm" variant="text">
                            {acad.period}
                        </Typography>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
};

export default AboutAcademicData;