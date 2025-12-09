import Card from '../../layouts/Card'

const ServicesSection = () => {
    return (
        <section className="section">
            <h2 className="section-title">
                Servicios
            </h2>
            <p className="section-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus dolor sequi consequatur saepe sunt natus aperiam iste beatae unde perspiciatis doloremque consequuntur aliquam doloribus, rerum totam alias. Quae, ducimus!
            </p>
            <div className="flex flex-wrap">
                <div className="w-1/3 p-4">
                    <Card
                        title="Compra"
                        link="#"
                    >
                        <p className="text-justify text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </Card>
                </div>
                <div className="w-1/3 p-4">
                    <Card
                        title="Venta"
                        link="#"
                    >
                       <p className="text-justify text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </Card>
                </div>
                <div className="w-1/3 p-4">
                    <Card
                        title="Envio"
                        link="#"
                    >
                       <p className="text-justify text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
