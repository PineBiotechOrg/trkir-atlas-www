import {combineReducers} from 'redux';

import sidebar, {actions as sidebarActions, SidebarReducer} from './sidebar';
import ui, {actions as uiActions, UIReducer} from './ui';

export interface MenuReducer {
    ui: UIReducer;
    sidebar: SidebarReducer;
}

export const actions = {
    sidebar: sidebarActions,
    ui: uiActions,
};

export default combineReducers<MenuReducer>({
    ui,
    sidebar,
});
