import React from "react";
import Navbar from "./componentes/Navbar";
import Jumbotron from "./componentes/Jumbotron";
import Card from "./componentes/Card";
import {Principal} from './data/data';
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-12 text-bg-secondary p-4 rounded-3 shadow mb-3 bg-body-tertiary ">
            <Jumbotron
              Heading='A Warm Welcome!'
              Text= {Principal}
              TextButton='Call to Action!'
            />
          </div>
        </div>
        <div className="row">
          
            <Card />
      
        </div>
      </div>
     <Footer />
    </>
  );
}

export default App;