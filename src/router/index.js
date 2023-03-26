import { createRouter, createWebHistory } from 'vue-router'
import Achievement from '../views/Achievement.vue'
import AddTeam from '../views/AddTeam.vue'
import CreateAccount from '../views/CreateAccount.vue'
import TasknPoint from '../views/TasknPoint.vue'

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
		{
			path: '/Create-Account',
			name: 'CreateAccount',
			component: CreateAccount
		},
		{
			path: '/Achievements',
			name: 'Achievements',
			component: Achievement
		},
		{
			path: '/TasknPoint',
			name: 'TasknPoint',
			component: TasknPoint
		},
	],
})

export default router