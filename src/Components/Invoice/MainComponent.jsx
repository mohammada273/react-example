import { useState } from "react";
import "./MainComponent.css";
import ItemComponent from "./ItemComponent";

export default function MainComponent() {
  const [GetData, SetData] = useState({
    Data: [
      {title: "عنوان",startDate: "11/04/1399",endDate: "11/04/1399",score: "50",price: "250.000",},
      {title: "عنوان",startDate: "11/04/1399",endDate: "11/04/1399",score: "50",price: "250.000",},
      {title: "عنوان",startDate: "11/04/1399",endDate: "11/04/1399",score: "50",price: "250.000",},
      {title: "عنوان",startDate: "11/04/1399",endDate: "11/04/1399",score: "50",price: "250.000",},
      {title: "عنوان",startDate: "11/04/1399",endDate: "11/04/1399",score: "50",price: "250.000",},
      {title: "عنوان",startDate: "11/04/1399",endDate: "11/04/1399",score: "50",price: "250.000",},
      {title: "عنوان",startDate: "11/04/1399",endDate: "11/04/1399",score: "50",price: "250.000",},
      {title: "عنوان",startDate: "11/04/1399",endDate: "11/04/1399",score: "50",price: "250.000",},
    ],
  });
  return (
    <>
      <div class="container">
        {GetData?.Data.map((item , index) => (
            <ItemComponent Data={item} />
          ))}
      </div>
    </>
  );
}
