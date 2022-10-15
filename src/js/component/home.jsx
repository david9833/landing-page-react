import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
		<NavBar title="Start Bootstrap" home="Home" about="About" services="Services" contact="Contact"/>

		<div className="container-fluid">
			<Jumbotron title="Nuestras recomendaciones de PS4" description="En esta sección os mostraremos algunos de nuestros juegos favoritos de PS4. Para ampliar más información, tan sólo pulsa en el botón.  Puedes descubrir aún más juegos pinchando en el botón de abajo." buttonLabel="¡Descubre más juegos!"/>
			<div className="container-fluid d-flex flex-wrap justify-content-center">
			<Card url="https://i0.wp.com/www.solojugadores.com/wp-content/uploads/2018/10/God-of-War-2018-screenshots-rese%C3%B1a-PS4-PS5-PC-25.jpg?resize=678%2C381&ssl=1" title="God of War" description="La nueva aventura de Kratos en PS4" buttonLabel="Ir a ficha"/>
			<Card url="https://sm.ign.com/ign_es/news/t/the-last-o/the-last-of-us-part-2-is-getting-a-ps5-exclusive-performance_1rqn.jpg" title="The Last of Us Part II" description="La segunda parte nos cuenta la aventura de Ellie mientras..." buttonLabel="Ver sinopsis"/>
			<Card url="https://images2.alphacoders.com/109/1092341.jpg" title="Horizon Forbidden West" description="Descubre la nueva aventura de Aloy" buttonLabel="Comprar ahora"/>
			<Card url="https://images5.alphacoders.com/105/thumb-1920-1056682.png" title="Ghost of Tsushima" description="Conviértete en el fantasma de la isla" buttonLabel="Más información"/>
			
			</div>
		</div>

		<Footer text="Copyrigth © Your Website 2022"/>
		
		</>
	);
};

export default Home;
