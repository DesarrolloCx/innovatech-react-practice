// Controla el estado del formulario (si tiene o no errors)
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react"; 

import { getOrDeleteRequest } from "../../utils/utils";

import CustomInput from "../../components/main/CustomInput";

const ContactSection = () => {
    const [errors, setErrors] = useState<any>([]);
    const [countries, setCountries] = useState<any>([]);
    const [states, setStates] = useState<any>([]);
    const [cities, setCities] = useState<any>([]);
    const [districts, setDistricts] = useState<any>([]);

    const handleSubmit = (event: any) => {
        // Previene la recarga de la página al enviar el formulario
        event.preventDefault();

        // Lectura a los datos del formulario
        let formData = new FormData(event.target); // Lee los datos del formulario

        let name = formData.get('name'); // Obtiene el valor del campo 'name'
        let lastname = formData.get('lastname'); // Obtiene el valor del campo 'lastname'
        let email = formData.get('email'); // Obtiene el valor del campo 'email'
        let message = formData.get('message'); // Obtiene el valor del campo 'message'

        let errorList = []; // Arreglo para almacenar los errores

        if (name === "") {
            // Agregar un error al arreglo de errores
            errorList.push({
                field: 'name',
                message: 'El nombre es obligatorio.'
            });
        }

        if (lastname === "") {
            errorList.push({
                field: 'lastname',
                message: 'El apellido es obligatorio.'
            });
        }

        if (email === "") {
            errorList.push({
                field: 'email',
                message: 'El correo electrónico es obligatorio.'
            });
        }

        if (message === "") {
            errorList.push({
                field: 'message',
                message: 'El mensaje o comentario es obligatorio.'
            });
        }

        if (errorList.length > 0) {
            Swal.fire({
                title: "Adjunta toda la información requerida.",
                text: "Por favor, revisa los campos del formulario.",
                icon: "warning",
            });

            setErrors(errorList); // Actualiza el estado de errores
            return; // Detiene la ejecución si hay errores
        }

        setErrors([]); // Limpia los errores si no hay

        Swal.fire({
            title: 'Formulario enviado',
            text: `Gracias por contactarnos, ${ name }! Hemos envíado tu mensaje.`,
            icon: 'success',
        });

        // Limpiamos el formulario
        event.target.reset();
        
        return;
    };  

    const getCountries = async () => {
        let url = "https://chambaticon.ticongle.com/backend/public/api/country";

        try {
            let response = await axios.get(url);

            if ((response.data).length > 0) {
                setCountries(response.data);
            } else {
                setCountries([]);
            }
        } catch (error) {
            console.log("Algo salió mal");
        }
    };

    const getStates = async () => {
        let response = await getOrDeleteRequest("state/3", "GET");

        if (response.type === "error") {
            setStates([]);
            return;
        }

        setStates(response.data);
        return;
    };

    const getCities = async (state: any) => {
        if (!state) return; // Detenemos si no viene el valor 

        let url = `https://chambaticon.ticongle.com/backend/public/api/city/${state}`;
        // let url = "https://chambaticon.ticongle.com/backend/public/api/city/" + state;

        try {
            let response = await axios.get(url);

            if ((response.data).length > 0) {
                setCities(response.data);
            } else {
                setCities([]);
            }
        } catch (error) {
            console.log("Algo salió mal");
        }
    };

    const getDistricts = async (city: any) => {
        if (!city) return; // Detenemos si no viene el valor 

        let url = `https://chambaticon.ticongle.com/backend/public/api/district/${city}`;

        try {
            let response = await axios.get(url);

            if ((response.data).length > 0) {
                setDistricts(response.data);
            } else {
                setDistricts([]);
            }
        } catch (error) {
            console.log("Algo salió mal");
        }
    };

    // Hace todas las peticiones antes de renderizar (página)
    useEffect(function() {
        getStates();
    }, []);

    return (
        <section className="section">
            <h2 className="contact-title text-4xl">
                ¡Contactanos!
            </h2>
            <div className="flex flex-wrap">
                <div className="w-3/5 p-4">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.251046615355!2d-89.14760729999999!3d13.703239400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633745e33e7379%3A0x28df8dc2b46233dc!2sTicongle%20Hub!5e0!3m2!1ses!2ssv!4v1765312345501!5m2!1ses!2ssv" 
                        className="w-full h-full rounded-lg border border-gray-500"
                        allowFullScreen={false}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        data-aos="zoom-in"
                    ></iframe>
                </div>
                <div className="w-2/5 p-4">
                    <h3 className="contact-title">
                        Escríbenos tus dudas o comentarios
                    </h3>
                    <p className="contact-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat corrupti ipsum ab eveniet delectus, incidunt sed dolorem? Aperiam aliquam modi porro
                    </p>
                    <form 
                        className="contact-form"
                        onSubmit={ handleSubmit } 
                    >
                        <div className="flex flex-wrap">
                            <div className="w-1/2 p-2">
                                <CustomInput
                                    type="text"
                                    label="Nombre"
                                    id="name"
                                    name="name"
                                    placeholder="Ingresa tu nombre"
                                    errors={ errors }
                                ></CustomInput>
                            </div>
                            <div className="w-1/2 p-2">
                                <CustomInput
                                    type="text"
                                    label="Apellido"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Ingresa tu apellido"
                                    errors={ errors }
                                ></CustomInput>
                            </div>
                            {/* <div className="w-full p-2">
                                <CustomInput
                                    type="select"
                                    label="País de residencia"
                                    id="country"
                                    name="country"
                                    placeholder="Selecciona tu país de residencia"
                                    options={ countries } // Pasamos lista de información
                                    errors={ errors }
                                ></CustomInput>
                            </div> */}
                            <div className="w-1/2 p-2">
                                <CustomInput
                                    type="select"
                                    label="Departamento de residencia"
                                    id="state"
                                    name="state"
                                    placeholder="Selecciona tu departamento de residencia"
                                    options={ states } // Pasamos lista de información
                                    errors={ errors }
                                    onChange={ function(e: any) {
                                        let stateId = e.target.value;

                                        getCities(stateId);
                                    } }
                                ></CustomInput>
                            </div>
                            <div className="w-1/2 p-2">
                                <CustomInput
                                    type="select"
                                    label="Municipio de residencia"
                                    id="city"
                                    name="city"
                                    placeholder="Selecciona tu municipio de residencia"
                                    options={ cities } // Pasamos lista de información
                                    errors={ errors }
                                    onChange={ function(e: any) {
                                        let cityId = e.target.value;

                                        getDistricts(cityId);
                                    } }
                                ></CustomInput>
                            </div>
                            <div className="w-full p-2">
                                <CustomInput
                                    type="select"
                                    label="Distrito de residencia"
                                    id="district"
                                    name="district"
                                    placeholder="Selecciona tu distrito de residencia"
                                    options={ districts } // Pasamos lista de información
                                    errors={ errors }
                                ></CustomInput>
                            </div>
                            <div className="w-full p-2">
                                <CustomInput
                                    type="email"
                                    label="Correo electrónico"
                                    id="email"
                                    name="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    errors={ errors }
                                ></CustomInput>
                            </div>
                            <div className="w-full p-2">
                                <CustomInput
                                    type="textarea"
                                    label="Mensaje o comentario"
                                    id="message"
                                    name="message"
                                    placeholder="Escribe tu mensaje o comentario aquí"
                                    errors={ errors }
                                ></CustomInput>
                            </div>
                            <div className="w-full p-2">
                                <div className="text-center">
                                    <button type="submit" className="btn btn-main">
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
