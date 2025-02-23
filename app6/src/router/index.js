
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Menu from '@/components/Menu.vue'
import UserProfile from '@/components/UserProfile.vue';
import Chat from '@/components/Chat.vue';

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
						topPanel: Menu
					}
				},
				{
					path: '/user/:id',
					children: [
						{
							path: '',
							components: {
								topPanel: Menu,
								middlePanel: UserProfile
							},
							props: true
						},
						{
							path: 'chat',
							components: {
								topPanel: Menu,
								middlePanel: UserProfile,
								bottomPanel: Chat
							},
							props: true
						}
					]
				}
				
			]
		}
	],
})

export default router
