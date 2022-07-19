import { UPDATE_INVOICE } from "../actionTypes";

const invoiceState = {
  number: new Date().getTime(),
  invoice_type: "To Client",
  date: "",
  vat: "",
  from: {
    name: "",
    address: "",
  },
  to: {
    name: "",
    address: "",
  },
  items: [
    {
      name: "",
      price: "",
      unit: "",
    },
  ],
};

type StateType = {
  number: number;
  invoice_type: string;
  date: string;
  vat: string;
  from: {
    name: string;
    address: string;
  };
  to: {
    name: string;
    address: string;
  };
  items: {
    name: string;
    price: string;
    unit: string;
  }[];
};

interface Action {
  type: string;
  payload: StateType;
}

const invoice = (invoice = invoiceState, action: Action): StateType => {
  switch (action.type) {
    case UPDATE_INVOICE:
      return { ...action.payload };

    default:
      return invoice;
  }
};

export default invoice;
