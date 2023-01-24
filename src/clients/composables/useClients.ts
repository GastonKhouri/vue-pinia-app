import { useClientsStore } from '@/store/clients';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

import { clientsApi } from '../../api/clientsApi';
import type { Client } from '../interfaces/client';

const getClients = async ( page: number ) => {

	const { data } = await clientsApi.get<Client[]>( `/clients?_page=${ page }` );
	return data;

};

export const useClients = () => {

	const store = useClientsStore();
	const { clients, currentPage, totalPages } = storeToRefs( store );

	const { isLoading, data } = useQuery(
		[ 'clients?_page=', currentPage ],
		() => getClients( currentPage.value ),
	);

	watch( data, clients => {
		if ( !clients ) return;
		store.setClients( clients );
	}, { immediate: true } );

	const changePage = ( page: number ) => {
		store.setPage( page );
	};

	return {
		//* Props
		clients,
		isLoading,
		currentPage,
		totalPages,

		//* Methods
		changePage,

		//* Getters
	};

};
