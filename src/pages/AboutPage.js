import "./portfolio.css";
import AboutDescription from "../components/AboutDescriptionComponent";
import AboutSkills from "../components/AboutSkillsComponent";
import AboutAcademicData from "../components/AboutAcademicDataComponent";

const AboutPage = () => {
    return (
        <div>
            <AboutDescription />
            <AboutAcademicData />
            <AboutSkills />
        </div>
    );
};

export default AboutPage;
