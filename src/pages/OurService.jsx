import { useDispatch, useSelector } from "react-redux";
import Path from "../components/Path/Path";
import { getServicesFromSupabase } from "../Redux/store/services";
import { useEffect } from "react";
import ServiceBox from "../components/ServiceBox/ServiceBox";

export default function OurService() {
  const dispath = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    dispath(getServicesFromSupabase());
  }, []);
  return (
    <div>
      <Path />
      <div className="flex justify-center items-center flex-wrap gap-5">
        {services.map((service) => (
          <ServiceBox key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
