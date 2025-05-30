import { useNavigate } from "react-router-dom";
import "./portfolio.css";
import { Button } from 'primereact/button';

const HomeComponent = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container d-flex justify-content-around align-items-center">
            <div className="text-start m-2 mb-5">
                <h1 className="title-hello mb-3">Hola, me llamo</h1>
                <h1 className="title-name fw-bold text-warning mb-3">Alberto Villegas</h1>
                <div className="subtitle text-start">UI/UX designer</div>
                <div className="button-group">
                    <button onClick={() => navigate('/about')} className="button-about rounded me-3">
                        Ver más acerca de mí
                        <i className="pi pi-arrow-right icon-arrow"></i>
                    </button>
                    <Button className="rounded btn-outline-orange" label="Contáctarme" outlined />
                </div>
                <div class="social-icons mt-5">
                    <a href="https://github.com/alvicha" class="icon"><i class="pi pi-github fs-5"></i></a>
                    <a href="https://www.linkedin.com/in/alberto-villegas-chaparro-a786192a2/" class="icon"><i class="pi pi-linkedin fs-5"></i></a>
                    <a href="mailto:avchaparro04@gmail.com" class="icon"><i class="pi pi-envelope fs-5"></i></a>
                    <a href="https://x.com/AlbertoVil58869" class="icon"><i class="pi pi-twitter fs-5"></i></a>
                </div>
            </div>
            <div className="profile-wrapper mt-4 mt-md-0">
                <img src="/images/image.png" alt="Alberto Villegas" className="profile-pic" />
            </div>
        </div>
    );
};

export default HomeComponent;
