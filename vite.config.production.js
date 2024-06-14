// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import dayjs from 'dayjs'

// const CurrentDate = dayjs().format('DD-MM-YYYY');
// export default defineConfig({
//   build: {
//     outDir: '//10.10.7.48/backup/SOURCE/' + CurrentDate + '/FE_QTTS',
//     emptyOutDir: true,
//   },
//   server: {
//     host: 'thaco_amc_fe_agent.dev.io',
//   },
//   resolve: {
//     alias: {
//       '@Admin': '/src/views/admin',
//       '@Store': '/src/store',
//       '@Helpers': './src/helpers'
//     },
//   },
//   plugins: [vue()],
// })