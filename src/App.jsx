import React from "react";
import Navbar from "./componentes/Navbar";
import Jumbotron from "./componentes/Jumbotron";
import Card from "./componentes/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-12 text-bg-secondary p-4 rounded-3 shadow mb-3 bg-body-tertiary ">
            <Jumbotron
              Heading='A Warm Welcome!'
              Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada purus eget libero lacinia dapibus. Praesent volutpat sem sed ligula maximus, a sollicitudin urna auctor. Nam elementum tellus nec tortor lobortis, nec pellentesque massa auctor. Nunc lacus eros, porta placerat tristique viverra, imperdiet vitae nibh. In hac habitasse platea dictumst.'
              TextButton='Call to Action!'
            />
          </div>
        </div>
        <div className="row">
          
            <Card />
      
        </div>
      </div>
      <nav className="nav  text-center text-bg-dark">
        Aquí va el contenido del footer
      </nav>
    </>
  );
}

export default App;