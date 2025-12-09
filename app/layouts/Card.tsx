const Card = ({ children, title, link }: any) => {
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
                <a href={ link } className="text-base bg-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
                    Ver más
                </a>
            </div>
        </div>
    );
};

export default Card;
