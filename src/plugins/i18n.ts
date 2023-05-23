import { createI18n } from 'vue-i18n'
import cs from '../locales/cs.json'

export default defineNuxtPlugin(({ vueApp }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: 'cs',
		messages: { cs }
	})

	vueApp.use(i18n)
})
