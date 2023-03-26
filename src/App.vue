<template>
	<div class="app">

		<!-- Sidebar -->
		<Sidebar />
		<div style="width:100%">
    <nav style="background-color:#EF4C4D;" class="navbar navbar-dark  justify-content-between flex-nowrap flex-row">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand d-flex justify-content-start">{{ $route.name }}</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          
        </ul>
      </div>
	  
	</nav>
	<router-view />
	</div>
		<!-- Content -->
		
		
	</div>
</template>

<script setup>

import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>