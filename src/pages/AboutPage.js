import { useEffect, useState } from "react";
import "./portfolio.css";
import AboutDescription from "../components/AboutDescriptionComponent";
import AboutSkills from "../components/AboutSkillsComponent";

const AboutPage = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    return (
        <div>
            <AboutDescription />
            <AboutSkills />
        </div>
    );
};

export default AboutPage;
