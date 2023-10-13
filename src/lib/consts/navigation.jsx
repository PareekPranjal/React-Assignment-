import {
	HiHome,
	HiOutlineChartBar,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineFolder,
	HiOutlineChatAlt,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Home',
		path: '/',
		icon: <HiHome />
	},
	{
		key: 'products',
		label: 'Analytic',
		path: '/products',
		icon: <HiOutlineChartBar />
	},
	{
		key: 'orders',
		label: 'Explore',
		path: '/orders',
		icon: <HiOutlineUsers />
		
	},
	{
		key: 'shop',
		label: 'Shop',
		path: '/customers',
		
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'messages',
		label: 'Inbox',
		path: '/messages',
		icon: <HiOutlineChatAlt />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
export const DASHBOARD_SIDEBAR_PROJECTS_LINKS = [
	{
		key: 'amazon',
		label: 'Amazon',
		path: '/amazon',
		icon: <HiOutlineFolder />
	},
	{
		key: 'invinity_hq',
		label: 'Invinity HQ',
		path: '/invinity_hq',
		icon: <HiOutlineFolder />
	}
]