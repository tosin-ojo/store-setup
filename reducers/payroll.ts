import { UPDATE_PAYROLL } from "../actionTypes";

const payrollState = [
  {
    name: "",
    position: "",
    bank_number: "",
    bank_name: "",
    salary: "",
  },
];

type Payload = {
  name: string;
  position: string;
  bank_number: string;
  bank_name: string;
  salary: string;
}[];

interface Action {
  type: string;
  payload: Payload;
}

const payroll = (payroll = payrollState, action: Action): Payload => {
  switch (action.type) {
    case UPDATE_PAYROLL:
      return [...action.payload];

    default:
      return payroll;
  }
};

export default payroll;
