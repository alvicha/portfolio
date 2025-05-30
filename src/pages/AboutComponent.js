import "./portfolio.css";

const AboutComponent = () => {
    return (
        <section className="about-section">
            <h2 className="about-title">Sobre mí</h2>
            <p className="about-text">
                Soy un profesional del desarrollo de software con una sólida formación en
                [tu especialidad, ej. desarrollo frontend, backend o full-stack], enfocado en
                crear soluciones tecnológicas eficientes, escalables y centradas en la experiencia de usuario.
            </p>
            <p className="about-text">
                Con [X años] de experiencia en la industria, me especializo en el manejo de tecnologías
                como [menciona tus tecnologías: React, Node.js, Python, etc.], y poseo un enfoque
                orientado a la mejora continua, la calidad del código y la colaboración en equipo.
            </p>
            <p className="about-text">
                Mi objetivo es aportar valor real a través de proyectos innovadores que impulsen
                la transformación digital, manteniendo siempre un compromiso con los resultados
                y la excelencia técnica.
            </p>
        </section>
    );
};

export default AboutComponent;
