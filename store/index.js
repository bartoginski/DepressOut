export const state = () => ({
  darkMode: false,
  isCookiesDisplayed: true,
})

export const mutations = {
  toggleDarkMode(state) {
    state.darkMode = !state.darkMode
  },
  closeCookies(state) {
    state.isCookiesDisplayed = false
  },
}
