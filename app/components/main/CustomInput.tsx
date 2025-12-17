
const CustomInput = ({ 
    type, 
    id, 
    name, 
    placeholder,
    required = false, 
    label, 
    errors, 
    options = [],
    onChange,
}: any) => {
    return (
        <>
            <label className="input-label">
                { label }
            </label> 
            
            { type === "textarea" && (
                <textarea
                    id={ id || "" } // if (id === null) ? "" : id;
                    name={ name || "" } // if (name === null) ? "" : name;
                    className="input-field input-textarea"
                    placeholder={ placeholder || "" } // if (placeholder === null) ? "" : placeholder;
                    required={ required }
                    onChange={ function(e: any) {
                        onChange(e);
                    } }
                ></textarea>
            ) }

            { (type === "text" || type === "email") && (
                <input
                    type={ type || "text" } // if (type === null) ? "text" : type;
                    id={ id || "" } // if (id === null) ? "" : id;
                    name={ name || "" } // if (name === null) ? "" : name;
                    className="input-field"
                    placeholder={ placeholder || "" } // if (placeholder === null) ? "" : placeholder;
                    required={ required }
                    onChange={ function(e: any) {
                        onChange(e);
                    } }
                />
            ) }

            { type === "select" && (
                <select
                    id={ id || "" } // if (id === null) ? "" : id;
                    name={ name || "" } // if (name === null) ? "" : name;
                    className="input-field"
                    required={ required }
                    onChange={ function(e: any) {
                        onChange(e);
                    } }
                >
                    <option value="">[Selecciona una opción]</option>
                    { options.length > 0 && (
                        <>
                            { options.map(function(item: any) {
                                return (
                                    <option value={ item.id }>
                                        { item.name }
                                    </option>
                                );
                            }) }
                        </>
                    ) }
                </select>
            ) }

            { errors.map(function (error: any, index: any) {
                if (error.field === name) {
                    return (
                        <span className="text-sm text-red-500">
                            { error.message }
                        </span>
                    );
                }

                return <span className="text-sm">
                    &nbsp;
                </span>;
            }) }
        </>
    );
};

export default CustomInput;
