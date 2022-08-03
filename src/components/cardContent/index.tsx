import { useState, useRef, useEffect } from 'react'
import './cardContent.scss'
import Card from '../card/index'
import UseApi from '../../api/UseApi'
import axios from 'axios'


const CardContent = () => {
  const [cardData, setCardData] = useState([])
  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get('https://g1api.finlogix.com/v1/post/analysis?per_page=12&page=1');
        setCardData(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchTableData()
  }, [])
  return (
    <>
      <div className='CardContent'>
        {
          cardData.map((item, index) => {
            return (
              <div key={index}>
                <Card data={item}/>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default CardContent
