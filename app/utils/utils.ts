// Almacena funciones utilitarias (funciones de uso común o general)
import axios from "axios";

// Petición para obtener o borrar datos
export const getOrDeleteRequest = async (
    url: any, 
    method: any, // GET o DELETE
) => {
    try {
        // Genera la URL completa
        let uri = "https://chambaticon.ticongle.com/backend/public/api/" + url;

        // Configuración de la petición hacia el backend
        let config = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        };

        let response = await axios({
            method: method,
            url: uri,
            headers: config.headers,
        });

        return {
            type: "success",
            message: "Petición exitosa",
            data: response.data,
        };
    } catch (error) {
        return {
            type: "error",
            message: "Error en la petición",
            data: error,
        };
    }
};

export const postOrPutRequest = async (
    url: any,
    method: any, // POST o PUT
    body: any, // Data to send
) => {
    try {
        let uri = "https://chambaticon.ticongle.com/backend/public/api/" + url;

        let config = {
            headers: {
                'Content-Type': (method === "POST") ? "multipart/form-data" : "application/json",
                'Accept': 'application/json',
            }
        };
        console.log(config, "Configuración de la petición");
        let response = await axios({
            method: method, // POST o PUT
            url: uri, // URL completa
            headers: config.headers, // Encabezados de la petición
            data: body, // Información a enviar
        });

        return {
            type: "success",
            message: "Petición exitosa",
            data: response.data,
        };
    } catch (error) {
        return {
            type: "error",
            message: "Error en la petición",
            data: error,
        };
    }
};
