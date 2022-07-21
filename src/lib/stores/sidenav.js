import { readable, writable } from 'svelte/store'

export const isSideNavOpen = writable(false)

export const sideNavItems = readable([
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: 'fa-thin fa-gauge-simple',
		subItems: [
			{
				title: 'View Dashboard',
				href: '/dashboard',
			},
			{
				title: 'Updates',
				href: '/dashboard/updates',
				label: {
					value: 6,
					type: 'danger',
				},
			},
		],
	},
	{
		title: 'Posts',
		href: '/posts',
		icon: 'fa-thin fa-note',
		subItems: [
			{
				title: 'View All',
				href: '/posts',
			},
			{
				title: 'Add New',
				href: '/posts/add',
			},
			{
				title: 'Comments',
				href: '/posts/comments',
			},
			{
				title: 'Categories',
				href: '/posts/categories',
			},
			{
				title: 'Tags',
				href: '/posts/tags',
			},
		],
	},
	{
		title: 'Pages',
		href: '/pages',
		icon: 'fa-thin fa-file',
		subItems: [
			{
				title: 'View All',
				href: '/pages',
			},
			{
				title: 'Add New',
				href: '/pages/add',
			},
		],
	},
	{
		title: 'Gallery',
		href: '/gallery',
		icon: 'fa-thin fa-image',
	},
	{
		title: 'Appearance',
		href: '/appearance',
		icon: 'fa-thin fa-brush',
		subItems: [
			{
				title: 'Menus',
				href: '/appearance/menus',
			},
			{
				title: 'Themes',
				href: '/appearance/themes',
			},
			{
				title: 'Customizer',
				href: '/appearance/customizer',
			},
			{
				title: 'Code Editor',
				href: '/appearance/code-editor',
			},
		],
	},
	{
		title: 'Plugins',
		href: '/plugins',
		icon: 'fa-thin fa-plug',
		subItems: [
			{
				title: 'View All',
				href: '/plugins',
			},
			{
				title: 'Add New',
				href: '/plugins/add',
			},
			{
				title: 'Code Editor',
				href: '/plugins/code-editor',
			},
		],
	},
	{
		title: 'Users',
		href: '/users',
		icon: 'fa-thin fa-user',
		subItems: [
			{
				title: 'View All',
				href: '/users',
			},
			{
				title: 'Add New',
				href: '/users/add',
			},
			{
				title: 'Your Profile',
				href: '/users/your-profile',
			},
		]
	},
	{
		title: 'Tools',
		href: '/tools',
		icon: 'fa-thin fa-wrench-simple',
		subItems: [
			{
				title: 'View Tools',
				href: '/tools/available-tools',
			},
			{
				title: 'Import',
				href: '/tools/import',
			},
			{
				title: 'Export',
				href: '/tools/export',
			},
			{
				title: 'Site Health',
				href: '/tools/site-health',
			},
			{
				title: 'Export Personal Data',
				href: '/tools/export-personal-data',
			},
			{
				title: 'Erase Personal Data',
				href: '/tools/erase-personal-data',
			},
		],
	},
	{
		title: 'Settings',
		href: '/settings',
		icon: 'fa-thin fa-cog',
		subItems: [
			{
				title: 'General',
				href: '/settings/general',
			},
			{
				title: 'Writing',
				href: '/settings/writing',
			},
			{
				title: 'Reading',
				href: '/settings/reading',
			},
			{
				title: 'Comments',
				href: '/settings/comments',
			},
			{
				title: 'Media',
				href: '/settings/media',
			},
			{
				title: 'Perma Links',
				href: '/settings/perma-links',
			},
			{
				title: 'Privacy',
				href: '/settings/privacy',
			},
		],
	},
])
