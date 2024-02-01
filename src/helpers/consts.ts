export enum AppRoute {
	Home = '/',
	Users = 'users-list',
	Objects = 'objects',
	Projects = 'projects',
	Events = 'events',
}
export enum ReducerPath {
	Users = 'users/api',
}

export enum NameSpace {
	BreadCrumbs = 'BREAD_CRUMBS',
}

export enum DisplayBreakpoints {
	Sm = 576,
	Md = 768,
	Lg = 1024,
	Xl = 1280,
	Xxl = 1440,
}

export const BASE_URL = 'http://localhost:4001/api/v1'