import React from 'react';

import CardInfo from '../CardInfo';


function Card(props) {

    return(
        <div className="card" style={{width: "18rem"}} onClick={(e) => props.click(props.item)}>
            <img className="card-img-top" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
        </div>
    );

}

export default Card;