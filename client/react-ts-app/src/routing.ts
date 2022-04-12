export enum ROUTE {
  HOME = '/',
  HOMEPAGE = '/home/',
  LOGIN = '/login/',
  PROJECTS = '/projects/',
  PROJECT = '/project/',
  PROJECT_PAGE = '/project/:projectId/',
  PLAYGROUND = '/playground',
  MEMBERS = '/members/',
  // USER_PROFILE = '/users/:userId/',
  // USER_ACTIVITY = `/users/:userId/activities/:activityId/`,

}

// export enum USER_PROFILE_ROUTE {
//   USER_ACTIVITY = 'activities/:activityId/',
// }

type TArgs =
  | { path: ROUTE.HOMEPAGE }
  | { path: ROUTE.PROJECTS }
  | { path: ROUTE.LOGIN }
  | { path: ROUTE.MEMBERS }
  | {
    path: ROUTE.PROJECT_PAGE;
    params: { projectId: string }
  };
// | {
//   path: ROUTE.USER_ACTIVITY;
//   params: { userId: string; activityId: string };
// }
// | { path: USER_PROFILE_ROUTE.USER_ACTIVITY; params: { activityId: string } };

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
