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
        <section className={`my-5 page ${localActive ? 'active' : ''}`}>
            <div className="container border border-light rounded p-5 w-50">
                <h1 className="text-center text-light fw-bold mb-5">{t('contactTitle')}</h1>
                <p className="text-center text-light mb-5">
                    {t('contactDescription')}
                </p>
                <form>
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 mb-4 mt-3">
                            <InputText id="nombre" placeholder={t('namePlaceholder')}
                                className="w-100" required aria-required="true" />
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 mb-4 mt-3">
                            <InputText id="apellidos" placeholder={t('lastNamePlaceholder')}
                                className="w-100" required aria-required="true" />
                        </div>
                        <div className="col-12 mb-4">
                            <InputText id="email" placeholder={t('emailPlaceholder')}
                                className="w-100 mt-2 mb-3" required aria-describedby="ayuda-correo" aria-required="true" />
                            <small id="ayuda-correo" className="text-light">
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
                            <label htmlFor="terminos" className="text-light m-0">{t('acceptTermsLabel')}</label>
                        </div>
                        <div className="col-12 d-flex justify-content-end mt-2">
                            <Button type="submit" label={t('sendButton')} icon="pi pi-arrow-right" iconPos="right" className="btn-submit rounded-pill" outlined />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactComponent;