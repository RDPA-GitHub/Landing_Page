import React from "react";
import CardRender from "./data_card/CardRender";
import CardImg from "./data_card/CardImg";
import CardHeader from "./data_card/CardHeader";
import CardBody from "./data_card/CardBody";
import CardButton from "./data_card/CardButton";
import { CardData } from "../data/data";

const Card = () => {
  return (

    CardData.map((valor) => {


      return (
        <div className='col-md-3 mb-3 ' key={valor.id}>
          <CardRender>
            <CardImg
              url_img={valor.avatar}
            />
            <CardHeader
              titulo={`${valor.Title} ${valor.id}`}
            />
            <CardBody
              texto_card={valor.body}
            />
            <CardButton />
          </CardRender>
        </div>
      )

    })

  );
}

export default Card;