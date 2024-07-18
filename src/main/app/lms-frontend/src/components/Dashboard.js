import React from 'react'
import './../Style/dashboard.css';
import Card from "./Card.js";
import StickyHeadTable from './StickyHeadTable';
const Dshboard = () => {
    return (
        <div>
           <Card
        imgSrc="https://source.unsplash.com/WLUHO9A_xik/300x200/"
        spanTag="4 Day ago"
        constentHead="Post One"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="3224"
        views="7"
        comment="21"
        color="rgb(248, 51, 84)"
      />
        </div>
    )
}

export default Dshboard