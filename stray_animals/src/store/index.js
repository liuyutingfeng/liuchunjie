import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
import content_Info from './modules/content_Info'

Vue.use(Vuex);

export default  new Vuex.Store({
    modules: {
        user,
        content_Info,
    }
})