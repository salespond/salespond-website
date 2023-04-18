/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
  isMobileMenuOpen: false
})

const actions = {
  toggleMobileMenu({ commit, state }: any) {
    commit('SET_MOBILE_MENU_STATUS', !state.isMobileMenuOpen)
  }
}

const mutations = {
  SET_MOBILE_MENU_STATUS(state: { isMobileMenuOpen: boolean }, payload: boolean) {
    state.isMobileMenuOpen = payload
  }
}

const getters = {
  GET_mobileMenuStatus: (state: { isMobileMenuOpen: boolean }) => state.isMobileMenuOpen
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
