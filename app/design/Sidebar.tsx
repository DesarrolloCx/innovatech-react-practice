import { useRef } from "react"; // Hace referencias a elementos del DOM

const Sidebar = () => {
    // Referencia de lista de opciones - document.getElementById('sidebar-list')
    const sidebarListRef = useRef<any>(null);
    const buttonRef = useRef<any>(null);

    const handleSidebar = () => {
        let isHidden = sidebarListRef.current.classList.contains('hidden');

        if (isHidden === true) {
            // Mostrar menú
            sidebarListRef.current.classList.remove('hidden');
            buttonRef.current.innerText = "✖";

            return; // Detenemos la ejección
        }

        // Ocultar menú
        sidebarListRef.current.classList.add('hidden');
        buttonRef.current.innerText = "☰";
        return; // Detenemos la ejección
    };
    
    return (
        <>
            <nav className="navbar sticky w-full top-0 left-0 z-50">
                <div className="navbar-container justify-between px-20">
                    <div>
                        <span className="text-2xl font-bold uppercase">
                            Tienda
                        </span>
                    </div>

                    <div>
                        <button 
                            ref={ buttonRef }
                            className="text-3xl font-semibold cursor-pointer"
                            onClick={ handleSidebar }
                            // onMouseOver={ handleSidebar } // Mostrar menú al pasar el ratón
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            {/* Lista de opciones desplegable */}
            <div ref={ sidebarListRef } className="hidden">
                <div className="sidebar">
                    <div className="sidebar-content">
                        <div className="sidebar-item">
                            <a href="#">
                                Inicio
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a href="#">
                                Servicios
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a href="#">
                                Contacto
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a href="#">
                                Nosotros
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
