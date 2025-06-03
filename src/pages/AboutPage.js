import "./portfolio.css";
import AboutDescription from "../components/AboutDescriptionComponent";
import AboutSkills from "../components/AboutSkillsComponent";
import AboutAcademicData from "../components/AboutAcademicDataComponent";

const AboutPage = () => {
    return (
        <div>
            <AboutDescription />
            <AboutSkills />
            <AboutAcademicData />
        </div>
    );
};

export default AboutPage;
