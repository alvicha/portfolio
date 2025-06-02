import { useNavigate } from "react-router-dom";
import "./portfolio.css";
import { Button } from 'primereact/button';
import { useEffect, useState } from "react";

const HomePage = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 50);
    }, []);

    return (
        <div>
            <div className={`home-container page ${active ? "active" : ""}`}>
                <div className="text-start w-50 mb-5">
                    <div className="subtitle text-start">UI/UX designer</div>
                    <h1 className="title-name fw-bold mb-3">Hola, mi nombre es Alberto Villegas</h1>
                    <div className="button-group">
                        <Button className="button-about rounded me-3" icon="pi pi-arrow-right icon-arrow" iconPos="right" onClick={() => navigate('/about')} label="Ver más acerca de mi" outlined />
                        <Button className="rounded btn-outline-orange" onClick={() => navigate('/contact')} label="Contáctarme" outlined />
                    </div>
                    <div className="text-justify mt-4">
                        Explora mi portfolio para descubrir mis proyectos, habilidades y cómo puedo aportar valor con soluciones creativas, funcionales y centradas en el usuario.
                    </div>
                    <div class="social-icons mt-5">
                        <a href="https://github.com/alvicha" class="icon"><i class="pi pi-github fs-5"></i></a>
                        <a href="https://www.linkedin.com/in/alberto-villegas-chaparro-a786192a2/" class="icon"><i class="pi pi-linkedin fs-5"></i></a>
                        <a href="mailto:avchaparro04@gmail.com" class="icon"><i class="pi pi-envelope fs-5"></i></a>
                        <a href="https://x.com/AlbertoVil58869" class="icon"><i class="pi pi-twitter fs-5"></i></a>
                    </div>
                </div>
                <div className="mt-4 mt-md-0">
                    <img src="/images/perfil.jpg" alt="Imagen de perfil" className="profile-pic" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
