import { useState, useRef } from 'react'
import './content.scss'

const Content = () => {
  const [showLangList, setShowLangList] = useState(false)

  return (
    <>
      <div className='content'>
        <h1 className='firstContent'>Forex Webinars</h1 >
        <div className='secondContent'>Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.
        </div>
      </div>
    </>
  )
}

export default Content
