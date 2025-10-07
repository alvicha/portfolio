import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const ProfileCard = () => {
    const { t } = useTranslation();

    return (
        <Card className="w-96 bg-[--card-profile-bg] backdrop-blur-sm rounded-xl shadow-lg card-profile">
            <CardHeader floated={false} className="rounded-t-xl h-[325px] overflow-hidden relative group">
                <img src="/images/perfil.jpg" alt="profile-picture" className="w-full h-84 transition-transform duration-500 group-hover:scale-105" />
            </CardHeader>

            <CardBody className="py-6 text-center">
                <Typography variant="h4" className="mb-3 text-light font-light">
                    {t("name")}
                </Typography>
                <Typography className="font-medium text-[#FF6A00]" textGradient>
                    {t("profession")}
                </Typography>
            </CardBody>

            <CardFooter className="flex justify-center gap-6 mb-3 py-1">
                <Tooltip content="GitHub">
                    <a href="https://github.com/alvicha" target="_blank" rel="noopener noreferrer"
                        className="social-icon">
                        <i className="pi pi-github text-xl" />
                    </a>
                </Tooltip>
                <Tooltip content="LinkedIn">
                    <a href="https://www.linkedin.com/in/albertovillegas04/" target="_blank" rel="noopener noreferrer"
                        className="social-icon">
                        <i className="pi pi-linkedin text-xl" />
                    </a>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}

export default ProfileCard;