const Card = ({ children, title, link }: any) => {
    // Función que advierte al usuario que será redirigido
    const handleClick = () => {
        let message = `Serás redirigido a la página de ${ title }`;

        alert(message);

        // Redirigir al usuario a la página del servicio
        alert(`Redirigiendo a: ${ link }`);
    };

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="text-2xl font-bold text-center text-gray-500">
                    { title }
                </h3>
            </div>
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
