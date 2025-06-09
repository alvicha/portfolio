import { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
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

    return (
        <section className={`page ${active ? "active" : ""}`}>
            <h2 className="experience-title me-5">{t("academicDataTitle")}</h2>
            <div>
                <p
                    className="description-experience"
                    dangerouslySetInnerHTML={{ __html: t("academicDataDescription") }}
                ></p>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center mb-5">
                <div className="timeline-container">
                    {dataAcademics.map((acad, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                        >
                            <div className="circle"></div>
                            <Card
                                key={index}
                                className="rounded-2xl mb-5 mx-auto shadow-lg"
                            >
                                <CardBody className="p-4 flex items-start">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutAcademicData;