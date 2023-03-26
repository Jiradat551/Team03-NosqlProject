import { createRouter, createWebHistory } from 'vue-router'
import AddTeam from '../views/AddTeam.vue'

import Home from '../views/Home.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/add-team',
			name: 'AddTeam',
			component: AddTeam
		},
	],
})

export default router