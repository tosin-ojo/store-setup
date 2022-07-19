import { combineReducers } from "redux";

import sidebar from "./sidebar";
import summary from "./summary";
import invoice from "./invoice";
import transfer from "./transfer";
import payroll from "./payroll";

export default combineReducers({
  sidebar,
  summary,
  invoice,
  transfer,
  payroll,
});
