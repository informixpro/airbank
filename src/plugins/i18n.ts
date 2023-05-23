import { createI18n } from 'vue-i18n'
import cz from '../locales/cz.json'

export default defineNuxtPlugin(({ vueApp }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: 'cz',
		messages: { cz }
	})

	vueApp.use(i18n)
})
