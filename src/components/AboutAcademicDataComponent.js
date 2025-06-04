import { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    Typography,
    CardFooter,
} from "@material-tailwind/react";
import { Carousel } from 'primereact/carousel';

const AboutAcademicData = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    const dataAcademics = [
        {
            company: "Florida Universitaria, Catarroja",
            grade: "Grado Superior de Desarrollo de Aplicaciones Web",
            period: "Septiembre 2024 - Junio 2025",
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

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const dataAcademicsTemplate = (acad, index) => {
        return (
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
        );
    };

    return (
        <section className={`mt-5 page ${active ? "active" : ""}`}>
            <h2 className="experience-title mb-5 me-5">Datos Académicos</h2>
            <div>
                <p className="description-experience text-center">
                    Se detallarán y mostrarán los estudios que he hecho, junto con las
                    <strong> instituciones educativas </strong> donde los hice.
                </p>
            </div>

            <div className="col-12 d-flex justify-content-center">
                <Carousel value={dataAcademics} numVisible={1} responsiveOptions={responsiveOptions} itemTemplate={dataAcademicsTemplate} />
            </div>
        </section>
    );
};

export default AboutAcademicData;