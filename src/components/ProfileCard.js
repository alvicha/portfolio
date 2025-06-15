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
        <Card className="w-96 rounded-xl bg-[rgba(26,26,46,0.6)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] shadow-lg">
            <CardHeader floated={false} className="rounded-t-xl h-[370px] overflow-hidden relative group">
                <img src="/images/perfil.jpg" alt="profile-picture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,46,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </CardHeader>
            <CardBody className="py-6 text-center">
                <Typography variant="h4" className="mb-3 text-white font-light">
                    {t("name")}
                </Typography>
                <Typography className="font-medium text-[#FF6A00]" textGradient>
                    {t("profession")}
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-6 mb-3 py-1">
                <Tooltip content="GitHub">
                    <a href="https://github.com/alvicha" target="_blank" rel="noopener noreferrer"
                        className="text-white/70 hover:text-[#FF6A00] transition-colors duration-300"
                    >
                        <i className="pi pi-github text-xl" />
                    </a>
                </Tooltip>
                <Tooltip content="LinkedIn">
                    <a href="https://www.linkedin.com/in/alberto-villegas-chaparro-a786192a2/" target="_blank" rel="noopener noreferrer"
                        className="text-white/70 hover:text-[#FF6A00] transition-colors duration-300">
                        <i className="pi pi-linkedin text-xl" />
                    </a>
                </Tooltip>
                <Tooltip content="Email">
                    <a href="mailto:avchaparro04@gmail.com" 
                        className="text-white/70 hover:text-[#FF6A00] transition-colors duration-300">
                        <i className="pi pi-envelope text-xl" />
                    </a>
                </Tooltip>
                <Tooltip content="X / Twitter">
                    <a href="https://x.com/AlbertoVil58869" target="_blank" rel="noopener noreferrer"
                        className="text-white/70 hover:text-[#FF6A00] transition-colors duration-300">
                        <i className="pi pi-twitter text-xl" />
                    </a>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}

export default ProfileCard;