import { NumberToPersian } from "../../Functions/NumberParser";

export default function ItemComponent(props) {
  return (
    <>
      <div class="items">
        <div class="item-content">
          <div>
            <span>عنوان </span>
          </div>
          <div>
            <strong>{props?.Data?.title}</strong>
          </div>
          <div>
            <span>تاریخ شروع </span>
          </div>
          <div>
            <strong>{NumberToPersian(props?.Data?.startDate)}</strong>
          </div>
          <div>
            <span>تاریخ اتمام </span>
          </div>
          <div>
            <strong>{NumberToPersian(props?.Data?.endDate)}</strong>
          </div>
          <div>
            <span>امتیاز </span>
          </div>
          <div>
            <div style={{ display: "inline-block", textAlign: "center" }}>
              <strong>{NumberToPersian(props?.Data?.score)}</strong>
              <hr />
              <strong>{NumberToPersian("100")}</strong>
            </div>
          </div>
          <div>
            <span>هزینه </span>
          </div>
          <div>
            <strong>{NumberToPersian(props?.Data?.price)} تومان</strong>
          </div>
        </div>
      </div>
    </>
  );
}
