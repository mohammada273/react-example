import { useParams, Link } from "react-router-dom";

import "./MainComponent.css";
import RouteClient from "../../Config/Route.json"

import PrizeComponent from "./PrizeComponent"
import CoinHistoryComponent from "./CoinHistoryComponent";
import Aff from "./Aff";

export default function MainComponent() {

  let { tabName } = useParams();

  return (
    <>
      <div class="tabs">
        <div className={tabName === "prize" ? "tab selectedTab" : "tab"}>
          <Link to={RouteClient.TabName.replace(":tabName", "prize")}>
            جایزه ها
          </Link>
        </div>
        <div className={tabName === "coinhistory" ? "tab selectedTab" : "tab"}>
          <Link to={RouteClient.TabName.replace(":tabName", "coinhistory")}>
            تاریخچه سکه
          </Link>
        </div>
        <div className={tabName === "aff" ? "tab selectedTab" : "tab"}>
          <Link to={RouteClient.TabName.replace(":tabName", "aff")}>
            معرفی دوستان
          </Link>
        </div>
      </div>
      {tabName === "prize" ? <PrizeComponent /> : null}
      {tabName === "coinhistory" ? <CoinHistoryComponent /> : null}
      {tabName === "aff" ? <Aff /> : null}
    </>
  );
}