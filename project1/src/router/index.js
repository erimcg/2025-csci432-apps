
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SignIn from '@/views/SignIn.vue'
import Main from '@/views/Main.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/signin',
			name: 'signin',
			component: SignIn
		},
		{
			path: '/main',
			name: 'main',
			component: Main
		}
	],
})

export default router
