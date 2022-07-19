import { UPDATE_TRANSFER } from "../actionTypes";

const transferState = {
  type: "account",
  email: "",
  name: "",
  phone: "",
  amount: "",
  card_number: "",
  cvv: "",
  expiry_date: "",
};

interface Payload {
  type: string;
  email: string;
  name: string;
  phone: string;
  amount: string;
  card_number: string;
  cvv: string;
  expiry_date: string;
}

interface Action {
  type: string;
  payload: Payload;
}

const transfer = (transfer = transferState, action: Action): Payload => {
  switch (action.type) {
    case UPDATE_TRANSFER:
      return { ...action.payload };

    default:
      return transfer;
  }
};

export default transfer;
