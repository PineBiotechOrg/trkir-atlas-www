import React from 'react';

import {ROOT_PATH} from '../../consts';
import Content from '../Content';
import {Props} from './types';

export default class Page extends React.PureComponent<Props> {
    public render() {
        return (
            <div>
                <div>
                    <Content goToMain={this.goToMain}/>
                </div>
            </div>
        );
    }

    private goToMain = () => {
        this.props.history.push(ROOT_PATH);
    };
}
