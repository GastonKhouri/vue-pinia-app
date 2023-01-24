<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import LoadingModal from '../components/LoadingModal.vue';
import PaginationNumbers from '../../shared/components/PaginationNumbers.vue';
import { useClients } from '../composables/useClients';

const { isLoading, clients, changePage, currentPage, totalPages } = useClients();

</script>

<template>
	<div>
		<h1>Listado de clientes</h1>

		<!-- Client List -->
		<ClientList :clients="clients" />

		<!-- Pagination Numbers -->
		<PaginationNumbers
			:current-page="currentPage"
			:total-pages="totalPages"
			@change-page="changePage"
		/>

		<!-- Loading Modal -->
		<LoadingModal v-if="isLoading" />

	</div>
</template>


<style scoped>

</style>