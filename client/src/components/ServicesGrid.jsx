import React from "react";

export default function ServicesGrid() {
  const services = [
    {
      title: "GPS",
      description:
        "GPS navigation plays an important role for car infotainment systems, and therefore its accuracy and usability have to be tested.",
    },
    {
      title: "Tuner & Media",
      description:
        "Tuner and Media solutions are becoming complex. Compliance testing for the radio equipment directive (RED) for AM, FM, DAB, DRM, Wi-Fi, Bluetooth, etc., is necessary to ensure seamless performance.",
    },
    {
      title: "HMI",
      description:
        "HMI acts as an interface between driver and infotainment system. Hence, its usability has to be ensured by testing.",
    },
    {
      title: "Network Benchmark Testing",
      description:
        "Network benchmarking helps network providers evaluate their network performance against their competitors in the market.",
    },
    {
      title: "Telecommunication",
      description:
        "Working as an outsourcing team, our experts are involved in developing high-rated mobile communications.",
    },
    {
      title: "Infotainment",
      description:
        "Testing activities of several infotainment systems manufactured by famous automotive brands.",
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-blue-400"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
