import { createStore } from 'vuex'

import nav_menu from './navigation/nav_menu'
import subscribe from './subscribe'

export default createStore({
  modules: {
    nav_menu,
    subscribe
  }
})
