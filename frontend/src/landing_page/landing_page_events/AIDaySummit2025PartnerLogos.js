const companies = [
    { name: "Break Through Tech", logo: "/aiday_logos/BTTnew.png" },
    { name: "CIBC", logo: "/aiday_logos/CIBCnew.png" },
    { name: "Mindstone", logo: "/aiday_logos/Mindstone.png" },
    { name: "MLOps Community", logo: "/aiday_logos/mlops.png" },
    // { name: "AI Camp", logo: "/aiday_logos/AICampnew.png" },
    { name: "Columbia Devfest", logo: "/aiday_logos/Columbianewer.png" },
    { name: "Digestible AI", logo: "/aiday_logos/DigestibleAInew.png" },
    { name: "Cornell Tech", logo: "/aiday_logos/CornellTech.png" },
    { name: "AI Furnace", logo: "/aiday_logos/AIFurnace.png" },
  ];

  function AIDaySummit2025PartnerLogos() {
    return (
      <div className="bg-gray-900 text-white pb-8 px-20 mx-[2%]">
        <div>
          <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-center mb-6">
            Partnering with Leading AI Organizations
          </h2>
        </div>
        {/* Responsive Grid */}
        <div className="px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 justify-items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-28 h-20 bg-gray-900 rounded-lg p-2"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default AIDaySummit2025PartnerLogos;
