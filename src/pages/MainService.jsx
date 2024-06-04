import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getServicesFromSupabase } from "../Redux/store/Services";
import { FaArrowLeftLong } from "react-icons/fa6";
import Form from "../components/Form/Form";

export default function MainService() {
  const param = useParams();
  const dispath = useDispatch();
  const services = useSelector((state) => state.services);
  const findService = services.find((service) => service.id == param.serviceID);

  useEffect(() => {
    dispath(getServicesFromSupabase());
  }, []);
  

  return (
    <div className="px-4 sm:px-14">
      {/* Path */}
      <div className="my-14 bg-gray/10 px-8 py-2 rounded-full">
        <p className="flex">
          <span className="text-orange"> خانه / وبلاگ &nbsp; </span>{" "}
          /&nbsp;&nbsp;
          {findService && findService.title}
        </p>
      </div>
      {/* right && left */}
      <div className="flex gap-10">
        {/* right */}
        <div className="hidden lg:block">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`http://localhost:5173/OurService/${service.id}`}>
              <p
                className={`flex place-items-center justify-between gap-5  bg-cream rounded-full p-2 mt-2 ${
                  service.id == param.serviceID ? "bg-green text-white" : ""
                }`}>
                {service.title}
                <FaArrowLeftLong />
              </p>
            </Link>
          ))}
        </div>

        {/* left */}
        <div>
          <h2>{findService && findService.title}</h2>
          <p>{findService && findService.description}</p>
        </div>
      </div>
      {/* contact us */}
      <div>
        <Form />
      </div>
    </div>
  );
}
