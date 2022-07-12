import React from 'react'
import { friends } from '../Utils/constants'

const DreamTeam = () => {
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((item, index) => <img className="col-4 p-1" key={index} src={item}/>)}
        </section>
    )
}

export default DreamTeam