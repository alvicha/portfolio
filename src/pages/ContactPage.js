import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Toast } from 'primereact/toast';
import { TailSpin } from 'react-loader-spinner';
import emailjs from '@emailjs/browser';
import ScreensContext from "../screens/ScreensContext";

const ContactComponent = () => {
    const { t } = useTranslation();
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [localActive, setLocalActive] = useState(false);
    const toast = useRef(null);
    const [nameContact, setNameContact] = useState("");
    const [surnameContact, setSurnameContact] = useState("");
    const [messageContact, setMessageContact] = useState("");
    const [emailContact, setEmailContact] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { loading, setLoading } = useContext(ScreensContext);
    const [visibleSendButton, setVisibleSendButton] = useState(false);

    useEffect(() => {
        setTimeout(() => setLocalActive(true), 50);
    }, []);

    useEffect(() => {
        if (nameContact !== "" && surnameContact !== "" && emailContact !== "" && phoneNumber !== "" && messageContact !== "" && aceptaTerminos) {
            setVisibleSendButton(true);
        } else {
            setVisibleSendButton(false);
        }
    }, [nameContact, surnameContact, emailContact, phoneNumber, messageContact, aceptaTerminos]);


    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const isValidPhone = (phone) => {
        const regex = /^[0-9]{9}$/;
        return regex.test(phone);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            setLoading(true);

            if (!isValidPhone(phoneNumber)) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: t('form.invalidPhone') });
                setLoading(false);
                return;
            }

            if (!isValidEmail(emailContact)) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: t('form.invalidEmail') });
                setLoading(false);
                return;
            }

            if (!aceptaTerminos) {
                toast.current.show({ severity: 'error', summary: 'Error', detail: t('form.acceptTerms') });
                setLoading(false);
                return;
            }

            const dataForm = {
                name: nameContact,
                surname: surnameContact,
                email: emailContact,
                phone: phoneNumber,
                message: messageContact,
            };

            emailjs.send('service_0qsoaj9', 'template_6r2ir7l', dataForm, 'fzahUuaxpIVpt05vk')
                .then(() => {
                    toast.current.show({ severity: 'success', summary: t('success'), detail: t('successMessage') });
                    setNameContact("");
                    setSurnameContact("");
                    setEmailContact("");
                    setPhoneNumber("");
                    setMessageContact("");
                    setAceptaTerminos(false);
                    setLoading(false);
                })
                .catch((error) => {
                    toast.current.show({ severity: 'error', summary: 'Error', detail: t('errorMessage') });
                    console.error('EmailJS error:', error);
                    setLoading(false);
                });
        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: t('errorMessage') });
            console.error('Error al enviar el formulario: ', error);
            setLoading(false);
        }
    }

    return (
        <>
            <Toast ref={toast} />

            {loading && (
                <div className="containerSpinner">
                    <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="var(--colorSpinner)"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                    />
                </div>
            )}

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
                                href="tel:648722194"
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
                                rel="noopener noreferrer"
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
                                    <InputText id="nombre" value={nameContact} onChange={e => setNameContact(e.target.value)} placeholder={t('namePlaceholder')}
                                        className="w-100" required aria-required="true" />
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 mb-4">
                                    <InputText id="apellidos" value={surnameContact} onChange={e => setSurnameContact(e.target.value)} placeholder={t('lastNamePlaceholder')}
                                        className="w-100" required aria-required="true" />
                                </div>
                                <div className="col-12 mb-4">
                                    <InputText id="email" value={emailContact} onChange={e => setEmailContact(e.target.value)} placeholder={t('emailPlaceholder')}
                                        className="w-100 mt-2 mb-3" required aria-describedby="ayuda-correo" aria-required="true" />
                                    <small id="ayuda-correo">
                                        {t('emailHelpText')}
                                    </small>
                                </div>
                                <div className="col-12 mb-4">
                                </div>
                                <InputText id="telefono" type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder={t('phonePlaceholder')} className="w-100" />
                                <div className="col-12 mb-3">
                                    <InputTextarea id="mensaje" value={messageContact} onChange={e => setMessageContact(e.target.value)} rows={5} placeholder={t('messagePlaceholder')} className="w-100" aria-label={t('messagePlaceholder')} />
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
                                        onClick={handleSubmit}
                                        disabled={!visibleSendButton}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactComponent;