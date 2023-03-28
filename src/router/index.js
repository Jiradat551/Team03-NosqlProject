import { createRouter, createWebHistory } from 'vue-router'
import Achievement from '../views/Achievement.vue'
import addPoint from '../views/AddPoint.vue'
import AddTeam from '../views/AddTeam.vue'
import CreateAccount from '../views/CreateAccount.vue'
import Home from '../views/Home.vue'
import TasknPoint from '../views/TasknPoint.vue'
import timer from '../views/timer.vue'
import reward from '../views/reward.vue'
import leaderborad from '../views/leaderborad.vue'
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
		{
			path: '/Point',
			name: 'Point',
			component: addPoint
		},
		{
			path: '/timer',
			name: 'timer',
			component: timer
		},
		{
			path: '/reward',
			name: 'reward',
			component: reward
		},
		{
			path: '/leaderborad',
			name: 'leaderborad',
			component: leaderborad
		},
	],
})

export default router