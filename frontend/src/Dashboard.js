import "./styles/Dashboard.css";
import "./styles/Table.css";
import "./styles/Button.css";
import "./styles/Annotation.css";
import "./styles/SearchBox.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Customize from "./components/Customize";
import Annotation from "./components/Annotation";
import StructuredMislabels from "./components/StructuredMislabels";
import StructuredDashboard from "./components/StructuredDashboard";
import Download from "./components/Download";
import Account from "./components/Account";
import Reviewer from "./components/Reviewer";
import { APISKeyDashboard } from "./subcomponents/api/APISKeyDashboard";
import {
  customizePath,
  createDatasetsPath,
  reviewerPath,
  accessControlPath,
  myDatasetsPath,
  myModelsPath,
  annotatePath,
  apiKeyDashboardPath,
  downloadPath,
  structuredMislabelsPath,
  structuredDashboardPath,
  accountPath,
  pricingRedirectPath,
  paymentsPath,
  myPredictReportsPath,
  predictReportPath,
  evaluateReportPath,
  myEvaluationsPath,
  chatPath,
  finishTrainingViewPath,
  loadTrainingViewPath,
  predictOptionsPath,
  getStartedPath,
  modelTrainingPath,
  flowDataSetterPath,
  flowCsvSelectorPath,
  flowCsvSelectorTrainPath,
  flowCsvViewerPath,
  evaluateDashboardPath,
  benchmarkDataSelectorPath,
  sdkPath,
  generateReportsPath,
  homePath,
  gtmChatbotPath,
} from "./constants/RouteConstants";
import {
  useCurrentDataset,
  useCurrentDatasetObj,
  useAlreadyStructured,
  useTaskType,
} from "./redux/DatasetSlice";
import { useCategories } from "./redux/LabelingFunctionSlice";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { IsDashboardSubdomain } from "./util/DomainParsing";
import { useDispatch } from "react-redux";
import { createVisit } from "./redux/UserSlice";
import { useLocation } from "react-router-dom";
import { robotHeader } from "./util/RobotHeader";
import { NLPTask, AccessLevel } from "./constants/DbEnums";
import SelectDatasetView from "./subcomponents/upload/SelectDatasetView";
import { ModelKeysDashboard } from "./subcomponents/models/ModelKeysDashboard";
import CreateDatasetView from "./subcomponents/upload/CreateDatasetView";
import PaymentsProduct from "./subcomponents/payments/PaymentsProduct";
import PaymentsComponent from "./subcomponents/payments/PaymentsComponent";
import MainNavbar from "./components/MainNavbar";
import { Flowbite } from "flowbite-react";
import AccessControl from "./subcomponents/reviewer/AccessControl";
import Override from "./subcomponents/reviewer/Override";
import SelectPredictReportView from "./components/Predict/SelectPredictReportView";
import SelectEvaluationView from "./components/Evaluate/SelectEvaluationView";
import PredictChatbotComponent from "./components/Predict/PredictChatbotComponent";
import FlowCsvViewer from "./subcomponents/commonflows/FlowCsvViewer";
import EvaluateDashboard from "./components/Evaluate/EvaluateDashboard";
import LoadingComponent from "./components/Train/LoadingView";
import FinishTrainComponent from "./components/Train/FinishTrainView";
import PredictOptions from "./components/Predict/PredictOptions";
import GetStarted from "./components/GetStarted";
import FlowDataSetter from "./subcomponents/commonflows/FlowDataSetter";
import FlowCsvSelector from "./subcomponents/commonflows/FlowCsvSelector";
import FlowCsvSelectorTrain from "./subcomponents/commonflows/FlowCsvSelectorTrain";
import PredictSDKComponent from "./components/Predict/PredictSDKComponent";
import PredictReportComponent from "./components/Predict/PredictReportComponent";
import CompanyChatbotHead from "./components/Predict/PredictChatbot/gtm/CompanyChatbotHead";

function Dashboard() {
  const location = useLocation();
  let dispatch = useDispatch();

  let currentDatasetObj = useCurrentDatasetObj();
  var datasetAccessLevel = null;
  if ("privileges" in currentDatasetObj) {
    datasetAccessLevel = currentDatasetObj["privileges"];
  }

  var showRestrictedRouteRequiringDataset = useCurrentDataset() !== 0;
  var showRestrictedRouteRequiringCategories = true;
  var showRestrictedRouteRequiringStructured = useAlreadyStructured();
  var hideRestrictedRouteRequiringAdminAccess =
    datasetAccessLevel == AccessLevel.ANNOTATOR;

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

  const searchParams = new URLSearchParams(location.search);
  const companyParam = searchParams.get("company");

  var showRestrictedRouteRequiringUserSession = isLoggedIn;
  let taskType = useTaskType();
  var showAnnotate = true;

  var dashboardRoutes = [
    <Route index element={<Upload />} />,
    <Route path={myDatasetsPath} element={<SelectDatasetView />} />,
    <Route path={createDatasetsPath} element={<CreateDatasetView />} />,
    showRestrictedRouteRequiringUserSession &&
    showRestrictedRouteRequiringDataset &&
    !hideRestrictedRouteRequiringAdminAccess ? (
      <Route path={customizePath} element={<Customize />} />
    ) : null,
    showRestrictedRouteRequiringUserSession &&
    showRestrictedRouteRequiringDataset &&
    showRestrictedRouteRequiringCategories &&
    showAnnotate ? (
      <Route path={annotatePath} element={<Annotation />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={reviewerPath} element={<Override />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={ loadTrainingViewPath } element={<LoadingComponent />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={ finishTrainingViewPath } element={<FinishTrainComponent />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={ predictOptionsPath } element={<PredictOptions />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={ getStartedPath } element={<GetStarted />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={accessControlPath} element={<AccessControl />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={apiKeyDashboardPath} element={<APISKeyDashboard />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={myModelsPath} element={<ModelKeysDashboard />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={myPredictReportsPath} element={<SelectPredictReportView />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={myEvaluationsPath} element={<SelectEvaluationView />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={predictReportPath} element={<FlowCsvViewer />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={evaluateReportPath} element={<EvaluateDashboard />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={flowDataSetterPath} element={<FlowDataSetter />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={flowCsvSelectorPath} element={<FlowCsvSelector />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={flowCsvSelectorTrainPath} element={<FlowCsvSelectorTrain />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={sdkPath} element={<PredictSDKComponent />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={generateReportsPath} element={<PredictReportComponent />} />
    ) : null,
    showRestrictedRouteRequiringUserSession &&
    showRestrictedRouteRequiringDataset &&
    showRestrictedRouteRequiringCategories &&
    !hideRestrictedRouteRequiringAdminAccess ? (
      <Route path={downloadPath} element={<Download />} />
    ) : null,
    showRestrictedRouteRequiringUserSession &&
    showRestrictedRouteRequiringDataset &&
    showRestrictedRouteRequiringCategories &&
    showRestrictedRouteRequiringStructured &&
    !hideRestrictedRouteRequiringAdminAccess ? (
      <Route path={structuredMislabelsPath} element={<StructuredMislabels />} />
    ) : null,
    showRestrictedRouteRequiringUserSession &&
    showRestrictedRouteRequiringDataset &&
    showRestrictedRouteRequiringCategories &&
    showRestrictedRouteRequiringStructured &&
    !hideRestrictedRouteRequiringAdminAccess ? (
      <Route path={structuredDashboardPath} element={<StructuredDashboard />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={accountPath} element={<Account />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={pricingRedirectPath} element={<PaymentsProduct />} />
    ) : null,
    showRestrictedRouteRequiringUserSession ? (
      <Route path={paymentsPath} element={<PaymentsComponent />} />
    ) : null,
    // showRestrictedRouteRequiringUserSession ? (
    //   <Route path={chatPath} element={<PredictChatbotComponent />} />
    // ) : null,
    (showRestrictedRouteRequiringUserSession || companyParam) ? (
      <Route path={chatPath} element={<PredictChatbotComponent />} />
    ) : null,
    (
      <Route path={gtmChatbotPath} element={<CompanyChatbotHead/>} />
    )
  ];

  let isDashboardSubdomain = IsDashboardSubdomain();

  useEffect(() => {
    if (typeof window !== "undefined") {
      var path = "app" + window.location.pathname + window.location.search;
      window.gtag("event", "page_view", {
        page_path: path,
      });
      if (isLoggedIn) {
        dispatch(createVisit(path));
      }
    }
  }, [location]);

  let robotMetaTag = robotHeader();

  return (
    <Flowbite>
      <div>
        <Helmet>
          <title>Anote</title>
          {robotMetaTag}
        </Helmet>
        <MainNavbar />
        <Routes>
          {isDashboardSubdomain && dashboardRoutes}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Flowbite>
  );
}

export default Dashboard;
