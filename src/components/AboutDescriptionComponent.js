import { Button } from "primereact/button";
import { useEffect, useState } from "react";

const AboutDescription = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    return (
        <section className={`section-profile p-5 m-5 page ${active ? "active" : ""}`}>
            <h1 className="about-title text-center mb-5 me-5">Sobre mí</h1>
            <div className="about-content">
                <div className="about-image-wrapper">
                    <img src="/images/perfil2.jpg" alt="Imagen de perfil" className="about-image" />
                </div>

                <div>
                    <p className="about-text me-5">
                        Soy un desarrollador full stack junior, apasionado por el aprendizaje continuo y por el desarrollo tanto frontend como backend. Tengo experiencia con diversas herramientas, tecnologías y frameworks, siempre enfocado en la usabilidad y el diseño centrado en el usuario.
                        <br /> <br />
                        Mi objetivo es combinar creatividad y técnica para desarrollar productos digitales que no solo funcionen correctamente, sino que también enamoren a sus usuarios.
                    </p>
                    <Button className="rounded btn-outline-orange mt-3" label="Descargar CV" icon="pi pi-download" outlined />
                </div>
            </div>
        </section>
    );
};

export default AboutDescription;
