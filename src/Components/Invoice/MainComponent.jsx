
import "./MainComponent.css"
import {NumberToPersian} from "../../Functions/NumberParser"

export default function MainComponent(){
    return (
      <>
        <div class="container">
          <div class="items">
            <div class="item-content">
              <div>
                <span>عنوان </span>
              </div>
              <div>
                <strong>آزمون</strong>
              </div>
              <div>
                <span>تاریخ شروع </span>
              </div>
              <div>
                <strong>{NumberToPersian("11/04/1399")}</strong>
              </div>
              <div>
                <span>تاریخ اتمام </span>
              </div>
              <div>
                <strong>{NumberToPersian("11/04/1399")}</strong>
              </div>
              <div>
                <span>امتیاز </span>
              </div>
              <div>
                <div style={{ display: "inline-block", textAlign: "center" }}>
                  <strong>{NumberToPersian("50")}</strong>
                  <hr />
                  <strong>{NumberToPersian("100")}</strong>
                </div>
              </div>
              <div>
                <span>هزینه </span>
              </div>
              <div>
                <strong>{NumberToPersian("250.000")} تومان</strong>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}