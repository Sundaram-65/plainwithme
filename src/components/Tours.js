import Card from "./Card";
import React from "react";
function Tours(props){
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Me</h2>
            </div>
            
           <div className="cards">
                {
                    props.tours.map((tour) => {
                        return <Card {...tour} key={tour.id} removeTour={props.removeTour} />;
                    })
                }
           </div>

        </div>
    );
}
export default Tours