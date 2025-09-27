import React, { useRef } from "react";
import Header from "./Header";
import LocalPOCs from "./LocalPOCs";
import ArmorEvents from "./ArmorEvents";
import Events from "../landing_page_events/Events";
import GrantPartnerships from "./ArmorGrantPartnerships";
import TalentPortal from "./TalentPortal";
// import Metrics from "./Metrics";
import ArmorHubs from "./ArmorHubs";
import ArmorLogos from "./ArmorLogos";

const ArmorMain = () => {
  const headerRef = useRef(null);
  const overviewRef = useRef(null);
  const localPOCsRef = useRef(null);
  const eventsRef = useRef(null);
  const grantsPartnershipsRef = useRef(null);
  // const talentPortalRef = useRef(null);
  // const metricsRef = useRef(null);
  const connectRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <section ref={headerRef} id="header" className="">
        <Header
          onScrollTo={(section) => {
            switch (section) {
              case "overview":
                scrollToSection(overviewRef);
                break;
              case "local":
                scrollToSection(localPOCsRef);
                break;
              case "events":
                scrollToSection(eventsRef);
                break;
              case "grantsPartnerships":
                scrollToSection(grantsPartnershipsRef);
                break;
              // case "talentPortal":
              //   scrollToSection(talentPortalRef);
              //   break;
            //   case "metrics":
            //     scrollToSection(metricsRef);
            //     break;
            case "connect":
                scrollToSection(connectRef);
                break;
              default:
                break;
            }
          }}
        />
      </section>

      {/* Content Sections */}
      <main className="mx-auto px-4 py-5 space-y-2">
        {/* Local POCs Section */}
        <section ref={overviewRef} id="overview">
          <ArmorHubs />
        </section>
      </main>
    </div>
  );
};

export default ArmorMain;
