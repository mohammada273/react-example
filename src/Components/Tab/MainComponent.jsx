import { useState } from "react";

import "./MainComponent.css";

import PrizeComponent from "./PrizeComponent";
import CoinHistoryComponent from "./CoinHistoryComponent";
import Aff from "./Aff";

export default function MainComponent() {

  const [GetCondition, SetCondition] = useState();

  return (
    <>
      <div class="tabs">
        <ul>
          <li className={GetCondition === "prize" ? "selectedTab" : ""}>
            <b class="leftBorder"></b>
            <b class="rightBorder"></b>
            <span onClick={() => SetCondition("prize")}>
              جایزه ها
            </span>
          </li>
          <li className={GetCondition === "coinhistory" ? "selectedTab" : ""}>
            <b class="leftBorder"></b>
            <b class="rightBorder"></b>
            <span onClick={() => SetCondition("coinhistory")}>
              تاریخچه سکه
            </span>
          </li>
          <li className={GetCondition === "aff" ? "selectedTab" : ""}>
            <b class="leftBorder"></b>
            <b class="rightBorder"></b>
            <span onClick={() => SetCondition("aff")}>
              معرفی دوستان
            </span>
          </li>
        </ul>
      </div>
      <div class="container">
        {GetCondition === "prize" ? <PrizeComponent /> : null}
        {GetCondition === "coinhistory" ? <CoinHistoryComponent /> : null}
        {GetCondition === "aff" ? <Aff /> : null}
      </div>
    </>
  );
}
