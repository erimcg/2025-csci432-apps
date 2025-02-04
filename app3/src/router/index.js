
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Menu from '@/views/Menu.vue'
import Feed from '@/views/Feed.vue'
import Search from '@/views/Search.vue'
import Settings from '@/views/settings/Settings.vue'
import Account from '@/views/settings/Account.vue'
import Subscriptions from '@/views/settings/Subscriptions.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Home,
			children: [
				{
					path: '',
					components: {
						leftSidebar: Menu,
						focus: Feed,
						rightSidebar: Search
					}
				},
				{
					path: '/settings',
					components: {
						leftSidebar: Menu,
						focus: Settings
					}
				},
				{
					path: '/settings/account',
					components: {
						leftSidebar: Menu,
						focus: Settings,
						rightSidebar: Account
					}
				},
				{
					path: '/settings/account/subscriptions',
					components: {
						leftSidebar: Menu,
						focus: Settings,
						rightSidebar: Subscriptions
					}
				},
			]
		}
	],
})

export default router
