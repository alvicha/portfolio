import { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Carousel } from 'primereact/carousel';
import { useTranslation } from "react-i18next";

const AboutAcademicData = () => {
    const { t } = useTranslation();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    const dataAcademics = [
        {
            company: t("floridaUni"),
            grade: t("webDevDegree"),
            period: t("period1"),
        },
        {
            company: t("floridaUni"),
            grade: t("multiPlatformDevDegree"),
            period: t("period2"),
        },
        {
            company: t("floridaUni"),
            grade: t("microSystemsDegree"),
            period: t("period3"),
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
                className="rounded-2xl mb-5 w-full max-w-[48rem] mx-auto shadow-lg"
            >
                <CardBody className="p-4 flex items-start gap-4">
                    <div className="bg-orange-100 p-4 rounded-full h-20 shadow-md">
                        <i className="pi pi-graduation-cap text-orange-500 text-3xl"></i>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between gap-4 items-center">
                            <Typography
                                variant="h5"
                                className="font-semibold mb-3"
                            >
                                {acad.company}
                            </Typography>
                            <Typography className="italic">
                                {acad.period}
                            </Typography>
                        </div>
                        <Typography className="text-gray-700 mt-2">{acad.grade}</Typography>
                    </div>
                </CardBody>
            </Card>
        );
    };

    return (
        <section className={`page ${active ? "active" : ""}`}>
            <h2 className="experience-title me-5">{t("academicDataTitle")}</h2>
            <div>
                <p className="description-experience" dangerouslySetInnerHTML={{ __html: t("academicDataDescription") }}></p>
            </div>

            <div className="col-12 d-flex justify-content-center">
                <Carousel value={dataAcademics} numVisible={1} responsiveOptions={responsiveOptions} itemTemplate={dataAcademicsTemplate} />
            </div>
        </section>
    );
};

export default AboutAcademicData;