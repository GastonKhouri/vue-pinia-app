<script setup lang="ts">
import { watch, ref, toRef } from 'vue';

const props = defineProps<{
	totalPages: number;
	currentPage: number;
}>();

const emits = defineEmits<{
	(e: 'changePage', page: number): void
}>();

const totalPages = toRef(props, 'totalPages');
const currentPage = toRef(props, 'currentPage');

const totalPageNumbers = ref<number[]>([])

watch(totalPages, () => {
	totalPageNumbers.value = [];
	for ( let i = 1; i <= totalPages.value; i++ ) {
		totalPageNumbers.value.push( i );
	}
}, { immediate: true })

</script>

<template>
	<div>
		<button 
			@click="emits('changePage', currentPage - 1)"
			:disabled="currentPage === 1"
		>
			Anterior
		</button>
		<button 
			v-for="number in totalPageNumbers" 
			:key="number" 
			:class="{ active: currentPage === number }"
			@click="emits('changePage',  number )"
		>
			{{ number }}
		</button>
		<button 
			@click="emits('changePage', currentPage + 1)"
			:disabled="currentPage === totalPages"
		>
			Siguiente
		</button>
	</div>
</template>

<style scoped>
div {
	margin-top: 10px;
}

button {
	background-color: transparent;
	border: 1px solid var(--color-border);
	border-radius: 5px;
	color: var(--color-text);
	cursor: pointer;
	margin-right: 5px;
	padding: 10px;
	transition: all .5s;
}

button:hover {
	background-color: hsla(160, 100%, 37%, 0.2);
	transition: all .5s;
}

button:disabled {
	cursor: not-allowed;
}

.active {
	background-color: hsla(160, 100%, 37%, 0.2);
}
</style>