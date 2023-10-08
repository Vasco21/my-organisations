import React from 'react'
import './AllmembersStyles'

export default function AllMeberCard(props) {
  return (
    <div className='box'>
        <i className='fa fa-quote-left'></i>
        <div className='details'>
          <div className='img'>
            <img src={props.picture.medium} alt=''/>
          </div>
          <div className='name'>
            <h3>{props.names}</h3>
              <span>{props.grade}</span>
          </div>
        </div>
        <hr />
        <div className='para'>
        <p>{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.location.number} {props.location.name}</p>
          <p>{props.dob.date} {props.dob.age}</p>
          <p>{props.gender}</p>
        </div>
      </div>
  )
}
