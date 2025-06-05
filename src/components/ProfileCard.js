import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

const ProfileCard = () => {
    return (
        <Card className="w-96 rounded-lg">
            <CardHeader floated={false} className="rounded-lg h-64">
                <img src="/images/persona.png" alt="profile-picture" className="w-full h-full object-cover" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-3">
                    Alberto Villegas
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    Desarrollador Full Stack
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-6 pt-1">
                <Tooltip content="GitHub">
                    <a href="https://github.com/alvicha" target="_blank" rel="noopener noreferrer"
                        className="text-blue-900 transition-transform transform hover:scale-125 hover:text-indigo-600"
                    >
                        <i className="pi pi-github text-xl" />
                    </a>
                </Tooltip>
                <Tooltip content="LinkedIn">
                    <a href="https://www.linkedin.com/in/alberto-villegas-chaparro-a786192a2/" target="_blank" rel="noopener noreferrer"
                        className="text-blue-900 transition-transform transform hover:scale-125 hover:text-indigo-600">
                        <i className="pi pi-linkedin text-xl" />
                    </a>
                </Tooltip>
                <Tooltip content="Email">
                    <a href="mailto:avchaparro04@gmail.com" className="text-blue-900 transition-transform transform hover:scale-125 hover:text-indigo-600">
                        <i className="pi pi-envelope text-xl" />
                    </a>
                </Tooltip>
                <Tooltip content="X / Twitter">
                    <a href="https://x.com/AlbertoVil58869" target="_blank" rel="noopener noreferrer"
                        className="text-blue-900 transition-transform transform hover:scale-125 hover:text-indigo-600">
                        <i className="pi pi-twitter text-xl" />
                    </a>
                </Tooltip>
            </CardFooter>
        </Card>
    );
}

export default ProfileCard;