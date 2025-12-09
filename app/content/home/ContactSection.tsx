const ContactSection = () => {
    return (
        <section className="section">
            <h2 className="contact-title text-4xl">
                ¡Contactanos!
            </h2>
            <div className="flex flex-wrap">
                <div className="w-3/5 p-4">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.251046615355!2d-89.14760729999999!3d13.703239400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633745e33e7379%3A0x28df8dc2b46233dc!2sTicongle%20Hub!5e0!3m2!1ses!2ssv!4v1765312345501!5m2!1ses!2ssv" 
                        // width="600" 
                        // height="450" 
                        // style="border:0;" 
                        className="w-full h-full rounded-lg border border-gray-500"
                        allowFullScreen={false}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="w-2/5 p-4">
                    <h3 className="contact-title">
                        Escríbenos tus dudas o comentarios
                    </h3>
                    <p className="contact-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat corrupti ipsum ab eveniet delectus, incidunt sed dolorem? Aperiam aliquam modi porro
                    </p>
                    <form className="contact-form">
                        <div className="flex flex-wrap">
                            <div className="w-1/2 p-2">
                                <label className="input-label">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="input-field"
                                />
                            </div>
                            <div className="w-1/2 p-2">
                                <label className="input-label">Apellido</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className="input-field"
                                />
                            </div>
                            <div className="w-full p-2">
                                <label className="input-label">Correo electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="input-field"
                                />
                            </div>
                            <div className="w-full p-2">
                                <label className="input-label">Mensaje o comentario</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="input-field input-textarea"
                                ></textarea>
                            </div>
                            <div className="w-full p-2">
                                <div className="text-center">
                                    <button type="button" className="btn btn-main">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
