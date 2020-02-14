import {extendRoutes, getRoutes} from 'client/utils/routes/makeRoutes';

extendRoutes([
    // Auth
    require('./containers/Auth/routing').default,
    require('./containers/GoogleOauth/routing').default,

    // App
    require('./containers/IndexRedirect/routing').default,
    require('./containers/Experiments/routing').default,
    require('./containers/Cameras/routing').default,

    // Other routes
    require('./containers/NotFound/routing').default,
]);

export default getRoutes();
