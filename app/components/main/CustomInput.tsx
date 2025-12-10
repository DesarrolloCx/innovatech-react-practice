

const CustomInput = ({ type, id, name, placeholder, required = false, label, errors }: any) => {
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
                />
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
