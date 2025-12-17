import { use, useEffect, useState } from 'react';
import { getOrDeleteRequest } from '../../utils/utils';

import Card from '../../layouts/Card';

const BlogSection = () => {
    // Almacenará los últimos posts del blog
    const [lastPosts, setLastPosts] = useState<any>([]);

    /* 
        Obtiene las entradas del blog y limitando
        la cantidad de elementos obtenidos
    */ 
    const getData = async (limit: number = 8) => {
        let response = await getOrDeleteRequest(
            `posts?_limit=${limit}`,
            'GET',
            'https://jsonplaceholder.typicode.com/'
        );

        if (response.type === "error") {
            setLastPosts([]);
            return; // Detener ejecución
        }

        setLastPosts(response.data);
        return; // Detener ejecución
    };

    useEffect(function() {
        getData(4);
    }, []); // Ejecutar solo al cargar la página

    return (
        <section id="blog-section" className="section">
            <h2 className="contact-title text-4xl">
                Enterate de lo más nuevo
            </h2>
            <p className="section-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus dolor sequi consequatur saepe sunt natus aperiam iste beatae unde perspiciatis doloremque consequuntur aliquam doloribus, rerum totam alias. Quae, ducimus!
            </p>
            {/* Listado del blog */}
            <div className="flex flex-wrap">
                { (lastPosts.length > 0) && (
                    <>
                        { lastPosts.map(function(item: any, index: any) {
                            return (
                                <div className="w-1/4 p-2">
                                    <Card
                                        title={ (item.title).length > 15 ? (item.title).substring(0, 15) + "..." : item.title }
                                        link="#"
                                        withIcon={ false }
                                    >
                                        <p className="text-justify text-base">
                                            { (item.body).length > 90 ? (item.body).substring(0, 90) + "..." : item.body }
                                        </p>
                                    </Card>
                                </div>
                            );
                        }) }
                    </>
                ) }

                { (lastPosts.length < 1) && (
                    <div className="w-full p-4">
                        <h4 className="text-red-500 text-center text-xl font-bold">
                            Sin novedades en el blog :(
                        </h4>
                    </div>
                ) }
                
            </div>
        </section>
    );
};

export default BlogSection;
