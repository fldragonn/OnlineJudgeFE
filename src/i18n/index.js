import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const languages = [
  {value: 'en-US', label: 'English'},
  {value: 'ko-KR', label: '한국어'}
]
const messages = {}

// combine admin and oj
for (let lang of languages) {
  let locale = lang.value
  let m = require(`./oj/${locale}`).m
  Object.assign(m, require(`./admin/${locale}`).m)
  messages[locale] = {m: m}
}
// load language packages
export default new VueI18n({
  locale: 'ko-KR',
  messages: messages
})

export {languages}
