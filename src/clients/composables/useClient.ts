import { clientsApi } from '@/api/clientsApi';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Client } from '../interfaces/client';

// const queryClient = useQueryClient();

const getClient = async (id: string) => {
	const { data } = await clientsApi.get<Client>(`/clients/${id}`);
	return data;
};

const updateClient = async (client: Client) => {
	const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client);
	// const queries = queryClient.getQueryCache().findAll(['clients?_page='], { exact: false });
	// queries.forEach(query => queryClient.invalidateQueries(query.queryKey));
	// queries.forEach(query => query.reset());
	// queries.forEach(query => query.fetch());
	return data;
};

export const useClient = () => {

	const client = ref<Client>();
	const route = useRoute();
	const router = useRouter();
	
	const { id } = route.params as { id: string };

	const { isLoading, data, isError } = useQuery(
		['client', id],
		() => getClient(id),
		{
			retry: false,
		}
	)

	const { mutate, isLoading: isUpdating, isSuccess, reset } = useMutation(
		updateClient
	);

	watch(data, () => {
		if (!data) return;
		client.value = { ...data.value! };
	}, { immediate: true });

	watch(isSuccess, () => {
		if (!isSuccess) return;
		setTimeout(() => {
			reset();
		}, 2000);			
	});

	watch(isError, () => {
		if (!isError) return;
		router.replace('/clients');
	});

	return {
		//* Props
		isLoading,
		isUpdating,
		isSuccess,
		client,

		//* Getters

		//* Actions
		mutate,

	};

};