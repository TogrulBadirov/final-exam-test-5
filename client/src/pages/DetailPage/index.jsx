import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Service from '../../components/Service'
import "./index.scss"

const DetailPage = () => {
    const {id} = useParams()
    const [services, setServices] = useState(null)
    const getService = async()=>{
        console.log(`http://localhost:3000/${id}`);
        const resp = await axios(`http://localhost:3000/${id}`)
        setServices(resp.data)
    }
    useEffect(() => {
        getService()
    }, [])
    
  return (
    <section id='DetailPage'>
        <div className="container">
            {services && <Service item={services }/> }
            
        </div>
    </section>
  )
}

export default DetailPage