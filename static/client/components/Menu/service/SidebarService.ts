import {bound as commonActions} from 'client/actions';

class SidebarService {
    public changeCollapseState = (isCollapse: boolean) => {
        isCollapse
            ? commonActions.menu.ui.collapseMenu()
            : commonActions.menu.ui.extendMenu();
    };
}

export const sidebarService = new SidebarService();
