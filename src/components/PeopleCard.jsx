import React from 'react';
import { Link } from 'react-router-dom'

const PeopleCard = props => {
    return (<React.Fragment><center><div class="card border-info shadow-sm center mt-5 mb-3 w-50">
        <div class="card-body text-center">
            <h5 class="card-title">{props.people.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Age - {props.people.age}</h6>
            <p class="card-text">{props.people.gender}</p>
            <Link to={`/People/${props.people.id}`}>
                <button class="btn btn-info">See More</button>
            </Link>
        </div>
    </div></center></React.Fragment>

    )
}

export default PeopleCard;
