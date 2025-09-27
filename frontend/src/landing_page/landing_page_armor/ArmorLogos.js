const companies = [
    { name: "Airbus", logo: "/armor_logos/AirbusNew.png" },
    { name: "Air Liquide", logo: "/armor_logos/AIR_LIQUIDE.png" },
    { name: "AI Camp", logo: "/armor_logos/AICamp.png" },
    { name: "ARCS", logo: "/armor_logos/ARCS.png" },
    { name: "Battelle", logo: "/armor_logos/BATTELLE.png" },
    { name: "Boeing", logo: "/armor_logos/Boeing.png" },
    { name: "Brown", logo: "/armor_logos/BrownU.png" },
    { name: "CIBC", logo: "/armor_logos/CIBC.png" },
    { name: "Clarkson", logo: "/armor_logos/ClarksonU.png" },
    { name: "Corning", logo: "/armor_logos/Corning.png" },
    { name: "General Dynamics", logo: "/armor_logos/GeneralDynamics.png" },
    { name: "Georgia Southern", logo: "/armor_logos/GeorgiaSouthern.png" },
    { name: "GUS", logo: "/armor_logos/gus.png" },
    { name: "Mindstone", logo: "/armor_logos/Mindstone.png" },
    { name: "MITRE", logo: "/armor_logos/Mitre.png" },
    { name: "National Renewable Energy Laboratory", logo: "/armor_logos/National_Renewable_Energy_Laboratory.png" },
    { name: "NC State", logo: "/armor_logos/ncstate.png" },
    { name: "NDSU", logo: "/armor_logos/NDSU.png" },
    { name: "Nebraska", logo: "/armor_logos/nebraska.png" },
    { name: "Pacific Northwest", logo: "/armor_logos/pacificnorthwest.png" },
    { name: "Pfizer", logo: "/armor_logos/Pfizer.png" },
    { name: "Pharma", logo: "/armor_logos/pharma.png" },
    { name: "Plug", logo: "/armor_logos/Plug.png" },
    { name: "Pratt & Whitney", logo: "/armor_logos/PrattWhitney.png" },
    { name: "Purdue", logo: "/armor_logos/purdue.png" },
    { name: "RPI", logo: "/armor_logos/RPI.png" },
    { name: "RTX", logo: "/armor_logos/RTX.png" },
    { name: "SDSU", logo: "/armor_logos/SDSU.png" },
    { name: "Siemens", logo: "/armor_logos/Siemens.png" },
    { name: "Sikorsky", logo: "/armor_logos/Sikorsky.png" },
    { name: "SRI", logo: "/armor_logos/SRI.png" },
    { name: "SWRI", logo: "/armor_logos/SWRI.png" },
    { name: "Texas A&M", logo: "/armor_logos/TexasAM.png" },
    { name: "UConn", logo: "/armor_logos/uconn.png" },
    { name: "UCLA", logo: "/armor_logos/UCLA.png" },
    { name: "UPR", logo: "/armor_logos/UPR.png" },
    { name: "USF", logo: "/armor_logos/USF.png" },
    { name: "Veritis", logo: "/armor_logos/Veritis.png" },
    { name: "Virginia Tech", logo: "/armor_logos/virginiatech.png" },
    { name: "Wayne State", logo: "/armor_logos/WayneState.png" },
    { name: "WPI", logo: "/armor_logos/WPI.png" },
    { name: "Yale", logo: "/armor_logos/YaleU.png" },
];


  function ArmorLogos() {
    return (
      <div className="bg-gray-900 text-white pb-8 px-20 mx-[2%]">
        <div>
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-center mb-6">
            Partnering with Leading Organizations
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          {/* <a
            href="/armor/talentPortal"
            className="btn-yellow mb-4 mr-4 sm:mb-0 w-full sm:w-auto flex justify-center items-center"
          >
            Join Talent Pool
          </a> */}
          <a
            // href="/armor/joinConsortium"
            href="mailto:nvidra@anote.ai"
            className="btn-yellow w-full sm:w-auto flex justify-center items-center"
          >
            Join Consortium
          </a>
          <a
            href="https://docs.google.com/spreadsheets/d/1Yb3zE-xvDUHsfiRaR75ggmMmOmkkgiDhgJ3WaVtRp10/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black w-full sm:w-auto flex justify-center items-center"
          >
            Partner With Us
          </a>
        </div>
        {/* Responsive Grid */}
        <div className="px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-items-center">
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

  export default ArmorLogos;
