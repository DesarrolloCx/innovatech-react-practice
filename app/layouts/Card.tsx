import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const Card = ({ children, title, link, withIcon = false, icon = null }: any) => {
    // Función que advierte al usuario que será redirigido
    const handleClick = () => {
        let message = `Serás redirigido a la página de ${ title }`;

        alert(message);

        // Redirigir al usuario a la página del servicio
        alert(`Redirigiendo a: ${ link }`);
    };

    return (
        <div className="card" data-aos="fade-up">
            { (withIcon === true) && (
                <div className="card-header flex flex-wrap">
                    <div className="w-1/4 text-center px-3 py-1">
                        <div className="bg-blue-950 text-2xl text-white px-2 py-4 rounded-full cursor-pointer hover:bg-indigo-700">
                            <FontAwesomeIcon 
                                // Usando icono que viene en el parametro o ponemos uno por defecto
                                icon={ icon !== null ? icon : faInfo }
                            />
                        </div>
                    </div>
                    <div className="w-3/4 flex items-center px-3">
                        <h3 className="text-2xl font-bold text-left text-gray-500">
                            { title }
                        </h3>
                    </div>
                </div>
            ) }

            { (withIcon === false) && (
                <div className="card-header">
                    <h3 className="text-2xl font-bold text-center text-gray-500">
                        { title }
                    </h3>
                </div>
            ) }

            <div className="card-content">
                { children }
            </div>
            <div className="card-footer">
                <button 
                    className="text-base bg-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700"
                    onClick={ handleClick }
                >
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default Card;
