import React from "react";
import './NameCard.css'

const namecheapURL = "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({suggestedName}) => {
    return <a href={`${namecheapURL}${suggestedName}`}><div className="name-container">
            <p className="name">{suggestedName}</p>
        </div></a>
}

export default NameCard;