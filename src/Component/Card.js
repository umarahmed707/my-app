import React from "react";
import '../index.css';
import img1 from '../assets/Profile-img.jpg';
import img2 from '../assets/post-img.webp'
import img3 from '../assets/Vector (1).png'
import img4 from '../assets/Group.png';
import img5 from '../assets/Vector.png';

const Card = (props) => {
    return (
        <div className="container">
            <div className="card">

                <div className="card-main">
                    <img src={img1} alt="My Image" className="imgpro" />
                    <div>

                        <p className="cardsid">
                            <b>{props.name}</b>
                            <div className="bottom">
                                <span>{props.min}</span>
                                <img src={img4} className="imgpost" />
                            </div>
                        </p>

                    </div>
                </div>
                <div className="right">
                    <img src={img3} className="img1"/>
                    <img src={img5} className="img2"/>
                </div>

            </div>
            <div>
                <p className="comment">{props.comment}</p>
                <img src={img2} className="imgpost" />
            </div>
        </div>


    )
}

export default Card;