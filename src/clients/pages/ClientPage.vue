<script setup lang="ts">
import LoadingModal from '../components/LoadingModal.vue';
import { useClient } from '../composables/useClient';

const { client, isLoading, mutate, isUpdating, isSuccess } = useClient();
</script>

<template>

	<h3 v-if="isUpdating">Guardando...</h3>
	<h3 v-if="isSuccess">Guardado</h3>

	<LoadingModal v-if="isLoading" />

	<div v-if="client">
		<h1>{{ client.name }}</h1>
		<form @submit.prevent="mutate(client!)">
			<input 
				type="text" 
				placeholder="Nombre del cliente"
				v-model="client.name"
			>
			<br>
			<input 
				type="text" 
				placeholder="Dirección del cliente"
				v-model="client.address"
			>
			<br>
			<button 
				type="submit"
				:disabled="isUpdating"
			>
				Guardar
			</button>
		</form>
	</div>

	<code>
		{{ client }}
	</code>

</template>


<style scoped>

input {
	width: 50%;
	padding: 5px 10px;
	margin-bottom: 10px;
}

button {
	margin-bottom: 10px;
}

</style>