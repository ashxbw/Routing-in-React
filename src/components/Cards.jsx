import React from 'react';
import { Link } from 'react-router-dom'



const Cards = props => {
    return (<React.Fragment><center><div class="card border-info center mt-5 mb-3 w-50">
        <div class="card-body text-center">

            <h5 class="card-title">{props.film.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{props.film.release_date}</h6>
            <p class="card-text">{props.film.description}</p>
            <Link to={`/Films/${props.film.id}`}>
                <button class="btn btn-info">See More</button>
            </Link>


        </div>
    </div></center></React.Fragment>

    )
}

export default Cards;



