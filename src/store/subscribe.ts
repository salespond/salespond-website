/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
  formSent: false
})

const actions = {
  setFormStatus({ commit }: any, data: boolean) {
      commit('SET_FORM_SENT_STATUS', data)
  }
}

const mutations = {
  SET_FORM_SENT_STATUS(state: { formSent: boolean; }, payload: boolean) {
      state.formSent = payload
  }
}

const getters = {
  GET_formStatus: (state: { formSent: boolean; }) => state.formSent,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}