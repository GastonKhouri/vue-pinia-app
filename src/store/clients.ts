import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/interfaces/client';

export const useClientsStore = defineStore( 'clients', () => {

	const currentPage = ref<number>( 1 );
	const totalPages = ref<number>( 5 );
	const clients = ref<Client[]>( [] );

	const setClients = ( value: Client[] ) => {
		clients.value = value;
	};

	const setPage = ( value: number ) => {
		if ( currentPage.value === value ) return;
		if ( value < 1 ) return;
		if ( value > totalPages.value ) return;
		currentPage.value = value;
	};

	return {
		//* Props
		currentPage,
		totalPages,
		clients,

		//* Getters
		// squareCount: computed( () => count.value * count.value ),

		//* Actions
		setClients,
		setPage,
	};

} );