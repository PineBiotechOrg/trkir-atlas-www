import stream from '../../utils/hocs/stream';
import {OwnProps} from './types';
import VideoStream from './VideoStream';

export default stream<OwnProps>()(VideoStream);
