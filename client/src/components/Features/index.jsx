import { useEffect, useState } from "react";
import Service from "../Service";
import "./index.scss"
import { LuCrown } from "react-icons/lu";
import axios from "axios";
const Features = () => {
    const [services, setServices] = useState(null);
   
    const getAllServices = async (values) => {
      const resp = await axios("http://localhost:3000/");
      setServices(resp.data);
    };
    useEffect(() => {
      getAllServices();
    }, []);
  return (
    <section id='Features'>
        <div className="container">
            <div className="section-header">
                <h2>Features That Make Us Hero</h2>
                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
            </div>
            <div className="row">
                {services && services.map(item=>(
                    <Service key={item._id} item={item}/>
                ))}
              
                
            </div>
        </div>
    </section>
  )
}

export default Features