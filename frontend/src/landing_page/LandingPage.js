import "./landing_page_styles/LandingPage.css";
import "./landing_page_styles/LandingPageFiletypes.css";
import "./landing_page_styles/LandingPageValue.css";
import "./landing_page_styles/LandingPageApplications.css";
import "./landing_page_styles/LandingPageSampleProjects.css";
import "./landing_page_styles/LandingPageEllipse.css";
import "./landing_page_styles/LandingPageLabel.css";
import "./landing_page_styles/LandingPageFooter.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { communityBase } from "../constants/RouteConstants";
import CityOrganizer from "./landing_page_armor/CityOrganizer";
import RequestOpportunities from "./landing_page_armor/RequestOpportunities";
import LocalPOCs from "./landing_page_armor/LocalPOCs";
import TalentPortal from "./landing_page_armor/TalentPortal";
import JoinConsortium from "./landing_page_armor/JoinConsortium";
import {
  paleBlueDotPath,
  aiDayPath,
  panaceaPath,
  eventsPath,
  mindstoneAugustPath,
  mindstoneSeptemberPath,
  aiDayStartupsDemosPath,
  mindstoneJulyPath,
  mindstoneJunePath,
  mindstoneMayPath,
  mindstoneAprilPath,
  mindstoneMarchPath,
  mindstoneOctoberPath,
  mindstoneNovemberPath,
  mindstoneDecemberPath,
  mindstoneFebruaryPath,
  mindstoneMarchNewPath,
  mindstoneMarchBostonNewPath,
  mindstoneAprilNYCPath,
  anoteMindstoneMayNYCPath,
  anoteMindstoneJuneNYCPath,
  anoteMindstoneJulyNYCPath,
  bttFallPath,
  registrationPath,
  launchPath,
  armorPath,
  mindstoneMayBostonNewPath,
  localPOCsPath,
  talentPortalPath,
  cityOrganizerPath,
  requestArmorOpportunitiesPath,
  joinConsortiumPath,
  featureVenuePath,
  armorMainPath,
  databricksPath,
  holidayPartyPath,
  aiDayFall2025Path,
  aiAcademySpring2026Path,
  jan2026Path,
  feb2026Path
} from "../constants/RouteConstants";
import HolidayParty from "./landing_page_events/fall2025/HolidayParty";
import Databricks from "./landing_page_events/fall2025/Databricks";
import AIDayFall2025 from "./landing_page_events/fall2025/AIDayFall2025";
import Footer from "./landing_page_components/Footer";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { robotHeader } from "../util/RobotHeader";
import PaleBlueDot from "./landing_page_events/PaleBlueDot";
import Panacea from "./landing_page_events/Panacea";
import Main from "./landing_page_armor/Main";
import AIDay from "./landing_page_events/AIDay";
import AIDayStarups from "./landing_page_events/AIDayStartups";
import AIDaySummit2025 from "./landing_page_events/AIDaySummit2025";
import MindstoneMarchAfter from "./landing_page_events/mindstone/MindstoneMarchAfter";
import MindstoneAprilAfter from "./landing_page_events/mindstone/MindstoneAprilAfter";
import MindstoneMayAfter from "./landing_page_events/mindstone/MindstoneMayAfter";
import MindstoneJuneAfter from "./landing_page_events/mindstone/MindstoneJuneAfter";
import MindstoneJulyAfter from "./landing_page_events/mindstone/MindstoneJulyAfter";
import MindstoneAugustAfter from "./landing_page_events/mindstone/MindstoneAugustAfter";
import MindstoneSeptemberAfter from "./landing_page_events/mindstone/MindstoneSeptemberAfter";
import MindstoneOctoberAfter from "./landing_page_events/mindstone/MindstoneOctoberAfter";
import MindstoneNovemberAfter from "./landing_page_events/mindstone/MindstoneNovemberAfter";
import MindstoneDecemberAfter from "./landing_page_events/mindstone/MindstoneDecemberAfter";
import MindstoneFebruaryAfter from "./landing_page_events/mindstone/MindstoneFebruaryAfter";
import BTTTalks from "./landing_page_events/mindstone/BTTTalks";
import Events from "./landing_page_events/Events";
import ArmorMain from "./landing_page_armor/ArmorMain";
import FeatureVenue from "./landing_page_armor/FeatureVenue";
import AnoteMindstoneBostonMarchAfter from "./landing_page_events/mindstone/AnoteMindstoneBostonMarchAfter";
import AnoteMindstoneAprilNYCAfter from "./landing_page_events/mindstone/AnoteMindstoneAprilNYCAfter";
import AnoteMindstoneNYCMarchAfter from "./landing_page_events/mindstone/AnoteMindstoneNYCMarchAfter";
import AnoteMindstoneMayNYCAfter from "./landing_page_events/mindstone/AnoteMindstoneMayNYCAfter";
import AnoteMindstoneJuneNYCAfter from "./landing_page_events/mindstone/AnoteMindstoneJuneNYCAfter";
import AnoteMindstoneJulyNYCBefore from "./landing_page_events/mindstone/AnoteMindstoneJulyNYCBefore";
import AnoteMindstoneMayBostonAfter from "./landing_page_events/mindstone/AnoteMindstoneMayBostonAfter";
import Jan2026 from "./landing_page_events/mindstone/Jan2026";
import Feb2026 from "./landing_page_events/mindstone/Feb2026";
// import ArmorEvents from "./landing_page_armor/ArmorEvents";
import AIAcademySpring2026 from "./landing_page_events/fall2025/AIAcademySpring2026";

function LandingPage() {
  const location = useLocation();
  let dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  const sessionToken = localStorage.getItem("sessionToken");
  if (accessToken || sessionToken) {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
    }
  } else {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      var path = "lp" + window.location.pathname + window.location.search;
      window.gtag("event", "page_view", {
        page_path: path,
      });
      if (isLoggedIn) {
        // dispatch(createVisit(path));
      }
    }
  }, [location]);

  let robotMetaTag = robotHeader();

  return (
    <div>
      <Helmet>
        <title>Anote - AI Community</title>
        {robotMetaTag}
      </Helmet>

      {/* <Banner open={open} />
      <Navbar open={open} setOpen={setOpen} /> */}
      <div className="">
        <Routes>
          <Route index element={<Main />} />,
          <Route path={aiDayPath} index element={<AIDay />} />
          <Route path={`${communityBase}/*`} element={<Main />} />
          <Route path={panaceaPath} index element={<Panacea />} />
          <Route path={paleBlueDotPath} index element={<PaleBlueDot />} />
          <Route path={aiDayStartupsDemosPath} index element={<AIDayStarups />} />
          <Route path={mindstoneMarchPath} index element={<MindstoneMarchAfter />} />
          <Route path={mindstoneAprilPath} index element={<MindstoneAprilAfter />} />
          <Route path={mindstoneMayPath} index element={<MindstoneMayAfter />} />
          <Route path={mindstoneJunePath} index element={<MindstoneJuneAfter />} />
          <Route path={mindstoneJulyPath} index element={<MindstoneJulyAfter />} />
          <Route path={mindstoneAugustPath} index element={<MindstoneAugustAfter />} />
          <Route path={mindstoneSeptemberPath} index element={<MindstoneSeptemberAfter />} />
          <Route path={mindstoneOctoberPath} index element={<MindstoneOctoberAfter />} />
          <Route path={mindstoneNovemberPath} index element={<MindstoneNovemberAfter />} />
          <Route path={mindstoneDecemberPath} index element={<MindstoneDecemberAfter />} />
          <Route path={mindstoneFebruaryPath} index element={<MindstoneFebruaryAfter />} />
          <Route path={holidayPartyPath} index element={<HolidayParty />} />
          <Route path={jan2026Path} index element={<Jan2026 />} />
          <Route path={feb2026Path} index element={<Feb2026 />} />
          <Route path={aiDayFall2025Path} index element={<AIDayFall2025 />} />
          <Route path={aiAcademySpring2026Path} index element={<AIAcademySpring2026 />} />
          <Route path={databricksPath} index element={<Databricks />} />
          <Route path={mindstoneMarchBostonNewPath} index element={<AnoteMindstoneBostonMarchAfter />} />
          <Route path={mindstoneAprilNYCPath} index element={<AnoteMindstoneAprilNYCAfter />} />
          <Route path={mindstoneMarchNewPath} index element={<AnoteMindstoneNYCMarchAfter />} />
          <Route path={anoteMindstoneMayNYCPath} index element={<AnoteMindstoneMayNYCAfter />} />
          <Route path={mindstoneMayBostonNewPath} index element={<AnoteMindstoneMayBostonAfter />} />
          <Route path={anoteMindstoneJuneNYCPath} index element={<AnoteMindstoneJuneNYCAfter />} />
          <Route path={anoteMindstoneJulyNYCPath} index element={<AnoteMindstoneJulyNYCBefore />} />
          <Route path={bttFallPath} index element={<BTTTalks />} />
          <Route path={eventsPath} index element={<Events />} />
          <Route path={registrationPath} index element={<AIDaySummit2025 />} />
          <Route path={armorPath} index element={<ArmorMain />} />
          <Route path={localPOCsPath} index element={<LocalPOCs />} />
          <Route path={talentPortalPath} index element={<TalentPortal />} />
          <Route path={joinConsortiumPath} index element={<JoinConsortium />} />
          <Route path={cityOrganizerPath} element={<CityOrganizer/>} />
          <Route path={featureVenuePath} index element={<FeatureVenue />} />
          <Route path={requestArmorOpportunitiesPath} element={<RequestOpportunities />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
