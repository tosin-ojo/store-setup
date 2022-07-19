import { SHOW_DASHBOARD_SIDEBAR, HIDE_DASHBOARD_SIDEBAR } from "../actionTypes";

interface Action {
  type: string;
}

interface SidebarReturn {
  showDashboardSidebar: boolean;
  showMobileSidebar: boolean;
}

const sidebar = (
  sidebar = { showDashboardSidebar: false, showMobileSidebar: false },
  action: Action
): SidebarReturn => {
  switch (action.type) {
    case SHOW_DASHBOARD_SIDEBAR:
      return { ...sidebar, showDashboardSidebar: true };

    case HIDE_DASHBOARD_SIDEBAR:
      return { ...sidebar, showDashboardSidebar: false };

    default:
      return sidebar;
  }
};

export default sidebar;
