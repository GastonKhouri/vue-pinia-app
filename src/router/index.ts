import { createRouter, createWebHistory } from 'vue-router';
import Counter1PageVue from '@/counter/pages/Counter1Page.vue';
import Counter2PageVue from '@/counter/pages/Counter2Page.vue';
import ClientsLayoutVue from '@/clients/layout/ClientsLayout.vue';
import ListPageVue from '@/clients/pages/ListPage.vue';
import ClientPageVue from '@/clients/pages/ClientPage.vue';

const router = createRouter( {
	history: createWebHistory( import.meta.env.BASE_URL ),
	routes: [
		{
			path: '/',
			name: 'counter-1',
			component: Counter1PageVue
		},
		{
			path: '/counter-2',
			name: 'counter-2',
			component: Counter2PageVue
		},
		{
			path: '/clients',
			name: 'clients',
			component: ClientsLayoutVue,
			redirect: '/clients/list',
			children: [
				{
					path: '/clients/list',
					name: 'list',
					component: ListPageVue
				},
				{
					path: '/clients/:id',
					name: 'client-id',
					component: ClientPageVue
				}
			]

		}
	]
} );

export default router;
