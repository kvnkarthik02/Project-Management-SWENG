export enum ROUTE {
    HOMEPAGE = '/',
    LOGIN = '/login/',
    PROJECTS = '/projects/',
    PROJECT = '/project/',
    PLAYGROUND = '/playground',
    USERS = '/users/',
    USER_PROFILE = '/users/:userId/',
    USER_ACTIVITY = `/users/:userId/activities/:activityId/`,
   
  }
  
  export enum USER_PROFILE_ROUTE {
    USER_ACTIVITY = 'activities/:activityId/',
  }
  
  type TArgs =
    | { path: ROUTE.HOMEPAGE }
    | { path: ROUTE.PROJECTS}
    | { path: ROUTE.LOGIN }
    | { path: ROUTE.USERS }
    | { path: ROUTE.USER_PROFILE; params: { userId: string } }
    | {
        path: ROUTE.USER_ACTIVITY;
        params: { userId: string; activityId: string };
      }
    | { path: USER_PROFILE_ROUTE.USER_ACTIVITY; params: { activityId: string } };
  
  type TArgsWithParams = Extract<TArgs, { path: any; params: any }>;
  
  export function createPath(args: TArgs) {
    // Save some CPU power for routes without params
    if (args.hasOwnProperty('params') === false) return args.path;
  
    // Create a path by replacing params in the route definition
    return Object.entries((args as TArgsWithParams).params).reduce(
      (previousValue: string, [param, value]) =>
        previousValue.replace(`:${param}`, '' + value),
      args.path
    );
  }
  