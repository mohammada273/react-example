import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientRoute from "./Config/Route.json"

import TabComponent from "./Components/Tab/MainComponent"
import InvoiceComponent from "./Components/Invoice/MainComponent"

const TabRoute = ClientRoute.Tab;
const InvoiceRoute = ClientRoute.Invoice;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={TabRoute} element={<TabComponent />}>
          {/* <Route path=":tabName" element={<TabComponent />} /> */}
        </Route>
        <Route path={InvoiceRoute} element={<InvoiceComponent />} />
      </Routes>
    </BrowserRouter>
  );
}