import Card from '../../layouts/Card';

import ServicesData from '../../data/services'; // Importar arreglo de servicios

const ServicesSection = () => {
    return (
        <section className="section">
            <h2 className="section-title">
                Servicios
            </h2>
            <p className="section-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus dolor sequi consequatur saepe sunt natus aperiam iste beatae unde perspiciatis doloremque consequuntur aliquam doloribus, rerum totam alias. Quae, ducimus!
            </p>
            <div className="flex flex-wrap justify-center">
                { ServicesData.length < 1 && (
                    <div className="w-full p-4">
                        <h4 className="text-red-500 text-center text-xl font-bold">
                            No hay servicios disponibles en este momento. :(
                        </h4>
                    </div>
                ) }

                { ServicesData?.map(function (item: any, index: any) {
                    if (item.active === false) {
                        return null;
                    }

                    return (
                        <div className="w-1/3 p-4">
                            <Card
                                title={ item.title }
                                link={ item.link }
                            >
                                <p className="text-justify text-base">
                                    { item.description }
                                </p>
                            </Card>
                        </div>
                    );
                }) }
            </div>
        </section>
    );
};

export default ServicesSection;
