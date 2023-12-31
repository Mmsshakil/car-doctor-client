import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);
    

    useEffect(() => {
        // fetch('services.json')
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })

    }, [])




    return (
        <div className="m-5">
            <div className="text-center">
                <h4 className="text-orange-600 font-semibold">Service</h4>
                <h1 className="text-3xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center">
                {
                    services?.map(service => <ServiceCard key={service.service_id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;