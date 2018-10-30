// Sidebar Routers
export const menus = {
	'message.general': [
		{
			action: 'zmdi-view-dashboard',
			title: 'message.dashboard',
			active: true,
			items: [
				{ title: 'message.ecommerce', path: '/default/dashboard/ecommerce', exact: true },
				{ title: 'message.webAnalytics', path: '/mini/dashboard/web-analytics', exact: true },
				{ title: 'message.magazine', path: '/horizontal/dashboard/magazine', exact: true },
				{ title: 'message.news', path: '/boxed-v2/dashboard/news', exact: true },
				{ title: 'message.agency', path: '/boxed/dashboard/agency', exact: true }
			]
		}
	]
}
