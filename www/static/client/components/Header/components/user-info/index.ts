import {connect} from 'react-redux';

import {userLoginSelector} from 'client/selectors/user';
import {CommonStore} from 'client/utils/infrastructure/store';

import UserInfo from './UserInfo';

const mapStateToProps = (state: CommonStore) =>({
    login: userLoginSelector(state),
});

export default connect(mapStateToProps)(UserInfo);
