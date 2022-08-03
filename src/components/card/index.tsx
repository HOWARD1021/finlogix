import { useState, useRef } from 'react'
import './card.scss'


interface Props {
  data: any
}
const Card = ({data}:Props) => {

  return (
    <>
      <div className='card' key={data.id}>
        <div className='cardTime'>{data.author.created_at}31/10/2019</div>
        <div className='cardTitle'>A structured approach to deciphering FX & Gold sentiment</div>
        <div className='cardSubTitle'>Market scan across FX & Gold to determine sentiment with accuracy.</div>
        <div className='cardSubTitle'>7pm-8:30pm EST</div>
        <div className="flex">
          <div>Register Now</div>
          <div>icon</div>
        </div>
      </div>
    </>
  )
}

export default Card
