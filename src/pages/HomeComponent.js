import "./portfolio.css";
import { Button } from 'primereact/button';

const HomeComponent = () => {
    return (
        <div className="home-container d-flex justify-content-around align-items-center">
            <div className="text-start m-2 mb-5">
                <h1 className="title-hello mb-3">Hola, soy</h1>
                <h1 className="fw-bold text-warning">Alberto Villegas</h1>
                <div className="subtitle text-start">UI/UX designer</div>
                <div className="button-group">
                    <Button className="rounded btn-outline-white" label="Descargar CV" icon="pi pi-download" outlined />
                </div>
            </div>
            <div className="profile-wrapper mt-4 mt-md-0">
                <img src="/images/image.png" alt="Alberto Villegas" className="profile-pic" />
            </div>
        </div>
    );
};

export default HomeComponent;
