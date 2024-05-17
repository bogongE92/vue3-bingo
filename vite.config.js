import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/vue3-bingo/',
	/* server: {
			port: 3000,
			host: '0.0.0.0'
		},
		preview: {
			port: 3000
		}, */
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
