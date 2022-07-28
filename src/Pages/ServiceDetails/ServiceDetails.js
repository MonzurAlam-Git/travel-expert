import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h3 className="text-danger fw-bolder text-center">
        Service details re bhai {serviceId}
      </h3>
    </div>
  );
};

export default ServiceDetails;
