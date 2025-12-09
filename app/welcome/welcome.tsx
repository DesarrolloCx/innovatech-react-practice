import Navbar from '../design/Navbar';
import Header from '../components/main/header';
import ServicesSection from '../content/home/ServicesSection';
import ContactSection from '../content/home/ContactSection';

export function Welcome() {
	return (
		<>
			{/** Navbar (Menú de navegación) */}
			<Navbar></Navbar>

			{/* Header (Encabezado) */}
			<Header></Header>

			{/* Main (Contenido principal) */}
			<main>

				{/* Sección de Servicios */}
				<ServicesSection></ServicesSection>

				{/* Sección de contacto */}
				<ContactSection></ContactSection>
			</main>

			{/* Footer (Pie de página) */}
			<footer>
				Pie de página
			</footer>
		</>
	);
}


