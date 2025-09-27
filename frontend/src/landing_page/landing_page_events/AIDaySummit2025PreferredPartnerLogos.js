const preferredPartners = [
    { name: "CIBC", logo: "/aiday_logos/CIBCnew.png" },
    { name: "AI Camp", logo: "/aiday_logos/AICampnew.png" },
    { name: "Mindstone", logo: "/aiday_logos/Mindstone.png" },
    { name: "MLOps Community", logo: "/aiday_logos/MLOps.png" },
    { name: "Cornell Tech", logo: "/aiday_logos/CornellTech.png" },
    { name: "Break Through Tech", logo: "/aiday_logos/BTT.png" },
    { name: "Columbia Devfest", logo: "/aiday_logos/Columbianewer.png" },
    { name: "Digestible AI", logo: "/aiday_logos/DigestibleAInew.png" },
  ];

  const otherPartners = [
    // { name: "Cornell Tech", logo: "/aiday_logos/CornellTech.png" },
    // { name: "Cerebral Valley", logo: "/aiday_logos/CerebralValleylogo.png" },
    // { name: "MLOps Community", logo: "/aiday_logos/mlops.png" },
    // { name: "Break Through Tech", logo: "/aiday_logos/BTT.png" },
    // { name: "Columbia Devfest", logo: "/aiday_logos/Columbianewer.png" },
    // { name: "Digestible AI", logo: "/aiday_logos/DigestibleAInew.png" },
    // { name: "AI Furnace", logo: "/aiday_logos/AIFurnace.png" },
  ];

  function AIDaySummit2025PartnerLogos() {
    return (
      <div className="bg-gray-900 text-white pb-8 px-20 mx-auto">
        {/* <div>
          <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-center mb-6">
            Partnering with Leading AI Organizations
          </h2>
        </div> */}

        {/* Preferred Partners Section */}
          {/* <p
            className="text-lg text-center mb-4"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Co-Hosts
          </p> */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-8 gap-5 justify-items-center w-full max-w-screen-lg mx-20">
              {preferredPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-28 h-20 bg-gray-900 rounded-lg p-2"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain max-h-16"
                  />
                </div>
              ))}
            </div>
          </div>

        {/* Other Partners Section */}
          {/* <p
            className="text-lg text-center mb-4 color-[#defefe47]"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Premium Partners
          </p> */}
          {/* <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 justify-items-center w-full max-w-screen-lg">
              {otherPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-28 h-20 bg-gray-900 rounded-lg p-2"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain max-h-16"
                  />
                </div>
              ))}
            </div>
          </div> */}
      </div>
    );
  }


  export default AIDaySummit2025PartnerLogos;
