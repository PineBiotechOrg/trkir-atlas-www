import {Form} from 'antd';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {camerasSelector} from 'client/selectors/cameras';
import preload from 'client/utils/hocs/preload';

import {BundleState} from '../../types';
import {onLoad} from './preloader';
import TableMouseForm from './TableMouseForm';
import {OwnProps, StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    cameras: camerasSelector(state),
});

export default compose<any>(
    connect(mapStateToProps),
    Form.create<OwnProps>(),
    preload({
        onLoad,
    }),
)(TableMouseForm);
