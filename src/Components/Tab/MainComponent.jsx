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
        <ul>
          <li className={tabName === "prize" ? "selectedTab" : ""}>
            <b class="leftBorder"></b>
            <b class="rightBorder"></b>
            <Link to={RouteClient.TabName.replace(":tabName", "prize")}>
              جایزه ها
            </Link>
          </li>
          <li className={tabName === "coinhistory" ? "selectedTab" : ""}>
            <b class="leftBorder"></b>
            <b class="rightBorder"></b>
            <Link to={RouteClient.TabName.replace(":tabName", "coinhistory")}>
              تاریخچه سکه
            </Link>
          </li>
          <li className={tabName === "aff" ? "selectedTab" : ""}>
            <b class="leftBorder"></b>
            <b class="rightBorder"></b>
            <Link to={RouteClient.TabName.replace(":tabName", "aff")}>
              معرفی دوستان
            </Link>
          </li>
        </ul>
      </div>

      {/* <div class="tabs">
        <div className={tabName === "prize" ? "tab selectedTab" : "tab"}>
          <b class="leftBorder"></b>
          <b class="rightBorder"></b>
          <Link to={RouteClient.TabName.replace(":tabName", "prize")}>
            جایزه ها
          </Link>
        </div>
        <div className={tabName === "coinhistory" ? "tab selectedTab" : "tab"}>
          <b class="leftBorder"></b>
          <b class="rightBorder"></b>
          <Link to={RouteClient.TabName.replace(":tabName", "coinhistory")}>
            تاریخچه سکه
          </Link>
        </div>
        <div className={tabName === "aff" ? "tab selectedTab" : "tab"}>
          <b class="leftBorder"></b>
          <b class="rightBorder"></b>
          <Link to={RouteClient.TabName.replace(":tabName", "aff")}>
            معرفی دوستان
          </Link>
        </div>
      </div>
      {tabName === "prize" ? <PrizeComponent /> : null}
      {tabName === "coinhistory" ? <CoinHistoryComponent /> : null}
      {tabName === "aff" ? <Aff /> : null} */}
    </>
  );
}