export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/bibliographie": [4],
		"/bibliographie/[slug]": [5],
		"/blog": [~6],
		"/blog/category": [~8],
		"/blog/category/page/[page]": [~12],
		"/blog/category/[category]": [~9],
		"/blog/category/[category]/page": [~10],
		"/blog/category/[category]/page/[page]": [~11],
		"/blog/page": [~13],
		"/blog/page/[page]": [~14],
		"/blog/[post]": [7],
		"/contact": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';