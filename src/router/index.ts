import { createRouter, createWebHistory } from 'vue-router';
import Counter1PageVue from '@/counter/pages/Counter1Page.vue';
import Counter2PageVue from '@/counter/pages/Counter2Page.vue';

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
	]
} );

export default router;
