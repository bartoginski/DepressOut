export const state = () => ({
  // todo turn on cookies later
  isCookiesDisplayed: false,
})

export const mutations = {
  closeCookies(state) {
    state.isCookiesDisplayed = false
  },
}
