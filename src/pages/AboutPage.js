import "./portfolio.css";
import AboutDescription from "../components/AboutDescriptionComponent";
import AboutSkills from "../components/AboutSkillsComponent";
import AboutExperience from "../components/AboutExperienceComponent";

const AboutPage = () => {
    return (
        <div>
            <AboutDescription />
            <AboutSkills />
            <AboutExperience />
        </div>
    );
};

export default AboutPage;
