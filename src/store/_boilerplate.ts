/* eslint-disable @typescript-eslint/no-unsafe-call */
const state = () => ({
    list: {}
})

const actions = {
    setList({ commit }: any, data: object) {
        commit('SET_LIST', data)
    }
}

const mutations = {
    SET_LIST(state: { list: object; }, payload: object) {
        state.list = payload
    }
}

const getters = {
    GET_list: (state: { list: object; }) => state.list,
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}