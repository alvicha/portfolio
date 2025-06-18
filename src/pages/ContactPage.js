import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ContactComponent = () => {
    const { t } = useTranslation();
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [localActive, setLocalActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setLocalActive(true), 50);
    }, []);

    return (
        <section className={`container-fluid my-5 page ${localActive ? 'active' : ''}`}>
            <div className="row p-3 mx-auto">
                <div className="col-12 col-md-6 rounded m-auto">
                    <h1 className="text-contact-title">{t('contactTitle')}</h1>
                    <p className="text-contact-description mb-5">
                        {t('contactDescription')}
                    </p>

                    <div className="contact-icons d-flex gap-4 justify-content-center mt-4 mb-5">
                        <a
                            href="https://maps.app.goo.gl/xGSeC6kd86dZm1Bf9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon"
                            title="Ubicación"
                        >
                            <i className="pi pi-map-marker" />
                        </a>
                        <a
                            href="tel:648722134"
                            className="contact-icon"
                            title="Llamar"
                        >
                            <i className="pi pi-phone" />
                        </a>
                        <a
                            href="mailto:avchaparro04@gmail.com"
                            className="contact-icon"
                            title="Email"
                        >
                            <i className="pi pi-envelope" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alberto-villegas-chaparro-a786192a2"
                            target="_blank"
                            className="contact-icon"
                            title="LinkedIn"
                        >
                            <i className="pi pi-linkedin" />
                        </a>
                    </div>
                </div>

                <div className="col-12 col-md-6 rounded p-4 p-lg-5 p-md-5 p-sm-5 mx-auto">
                    <form>
                        <div className="row px-0 px-lg-4">
                            <div className="col-12 col-lg-6 col-md-6 mb-4">
                                <InputText id="nombre" placeholder={t('namePlaceholder')}
                                    className="w-100" required aria-required="true" />
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 mb-4">
                                <InputText id="apellidos" placeholder={t('lastNamePlaceholder')}
                                    className="w-100" required aria-required="true" />
                            </div>
                            <div className="col-12 mb-4">
                                <InputText id="email" placeholder={t('emailPlaceholder')}
                                    className="w-100 mt-2 mb-3" required aria-describedby="ayuda-correo" aria-required="true" />
                                <small id="ayuda-correo">
                                    {t('emailHelpText')}
                                </small>
                            </div>
                            <div className="col-12 mb-4">
                                <InputText id="telefono" placeholder={t('phonePlaceholder')} className="w-100" keyfilter="int" />
                            </div>
                            <div className="col-12 mb-3">
                                <InputTextarea id="mensaje" rows={5} placeholder={t('messagePlaceholder')} className="w-100" aria-label={t('messagePlaceholder')} />
                            </div>
                            <div className="col-12 mb-3 d-flex align-items-center gap-2">
                                <Checkbox inputId="terminos" checked={aceptaTerminos} onChange={e => setAceptaTerminos(e.checked)} required />
                                <label htmlFor="terminos" className="m-0">{t('acceptTermsLabel')}</label>
                            </div>
                            <div className="col-12 d-flex justify-content-center justify-content-lg-end justify-content-md-end justify-content-sm-end mt-2">
                                <Button
                                    type="submit"
                                    label={t('sendButton')}
                                    className="btn-submit"
                                    outlined
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;