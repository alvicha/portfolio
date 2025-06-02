import { useNavigate } from "react-router-dom";
import "./portfolio.css";
import { Button } from 'primereact/button';
import { useEffect, useState } from "react";
import { Card } from 'primereact/card';

const HomePage = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    const characteristics = [
        {
            title: "Desarrollo Software Multiplataforma",
            description: "Especializado en la creación de aplicaciones web y móviles a través de frameworks.",
            img: "/images/desarrollo.jpeg",
            label: "Más información sobre desarrollo multiplataforma"
        },
        {
            title: "Habilidades en Programación",
            description: "Conocimientos en varios lenguajes de programación tanto web como multiplataforma que permiten crear sitios web, etc.",
            img: "/images/programacion.jpg",
            label: "Más información sobre habilidades en programacion"
        },
        {
            title: "Manejo en Bases de Datos",
            description: "Control en servidores de bases de datos con experiencia en algunos proyectos que he desarrollado a lo largo de estos años.",
            img: "/images/base_datos.jpg",
            label: "Más información sobre manejo en bases de datos"
        }
    ];

    const footer = (
        <>
            <Button icon="pi pi-plus" className="button-about rounded-pill mt-3" severity="secondary" />
        </>
    );

    return (
        <div>
            <div className={`home-container page ${active ? "active" : ""}`}>
                <div className="text-start w-50 mb-5">
                    <div className="subtitle text-start">UI/UX designer</div>
                    <h1 className="title-name fw-bold mb-5">Hola, mi nombre es Alberto Villegas</h1>
                    <div className="button-group">
                        <Button className="button-about rounded me-3" icon="pi pi-arrow-right icon-arrow" iconPos="right" onClick={() => navigate('/about')} label="Ver más acerca de mi" outlined />
                        <Button className="rounded btn-outline-orange" onClick={() => navigate('/contact')} label="Contáctarme" outlined />
                    </div>
                    <div className="text-justify mt-4">
                        Explora mi portfolio para descubrir mis proyectos, habilidades y cómo puedo aportar valor con soluciones creativas, funcionales y centradas en el usuario.
                    </div>
                    <div className="social-icons mt-5">
                        <a href="https://github.com/alvicha" className="icon"><i className="pi pi-github fs-5"></i></a>
                        <a href="https://www.linkedin.com/in/alberto-villegas-chaparro-a786192a2/" className="icon"><i className="pi pi-linkedin fs-5"></i></a>
                        <a href="mailto:avchaparro04@gmail.com" className="icon"><i className="pi pi-envelope fs-5"></i></a>
                        <a href="https://x.com/AlbertoVil58869" className="icon"><i className="pi pi-twitter fs-5"></i></a>
                    </div>
                </div>
                <div className="mt-4 mt-md-0">
                    <img src="/images/perfil.jpg" alt="Imagen de perfil" className="profile-pic" />
                </div>
            </div>

            <div className="titulo-caracteristicas-wrapper">
                <h2 className="titulo-caracteristicas">Características Concretas</h2>
            </div>
            <div className="row mb-5">
                {characteristics.map((item, index) => (
                    <div className="col-12 col-lg-4 col-md-4" key={index}>
                        <Card
                            title={item.title}
                            header={<img alt={item.title} src={item.img} className="img-fluid mb-3" />}
                            footer={footer}
                            className="h-100 w-100 text-center"
                        >
                            <p className="mt-0">{item.description}</p>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;