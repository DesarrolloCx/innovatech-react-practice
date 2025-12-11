import AOS from 'aos';
import { useEffect } from 'react'; // Hook que se activa al cargar la página

import Navbar from '../design/Navbar';
import Sidebar from '../design/Sidebar';
import Header from '../components/main/header';
import ServicesSection from '../content/home/ServicesSection';
import ContactSection from '../content/home/ContactSection';

import 'aos/dist/aos.css';

export function Welcome() {
	const initPage = () => {
		AOS.init({
			duration: 1000,
		});
	};

	useEffect(function() {
		initPage();
	}, []);

	return (
		<>
			{/** Navbar (Menú de navegación) */}
			{/* <Navbar></Navbar> */}
			<Sidebar></Sidebar>

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
};


