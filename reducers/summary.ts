import { UPDATE_SUMMARY } from "../actionTypes";

interface Payload {
  summary: string;
  title: string;
  amount: string;
}

interface Action {
  type: string;
  payload: Payload;
}

const summary = (
  summary = { summary: "", title: "", amount: "" },
  action: Action
): Payload => {
  switch (action.type) {
    case UPDATE_SUMMARY:
      return { ...action.payload };

    default:
      return summary;
  }
};

export default summary;
