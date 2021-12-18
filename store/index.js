export const state = () => ({
  isCookiesDisplayed: true,
})

export const mutations = {
  closeCookies(state) {
    state.isCookiesDisplayed = false
  },
}
