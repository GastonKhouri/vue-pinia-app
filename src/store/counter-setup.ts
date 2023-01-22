import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterSetupStore = defineStore( 'counter', () => {

	const count = ref<number>( 0 );
	const lastChanged = ref<Date>();

	const incrementBy = ( value: number ) => {
		count.value += value;
		lastChanged.value = new Date();
	};

	const increment = () => incrementBy( 1 );

	return {
		//* Props
		count,
		lastChanged,

		//* Getters
		squareCount: computed( () => count.value * count.value ),

		//* Actions
		increment,
		incrementBy,
	};

} );
