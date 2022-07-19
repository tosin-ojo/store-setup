import { AppThunk } from "../store";
import { SHOW_DASHBOARD_SIDEBAR, HIDE_DASHBOARD_SIDEBAR } from "../actionTypes";

export const hideDashboardSidebar = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: HIDE_DASHBOARD_SIDEBAR });
  } catch (error) {
    console.log(error);
  }
};

export const showDashboardSidebar = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: SHOW_DASHBOARD_SIDEBAR });
  } catch (error) {
    console.log(error);
  }
};
