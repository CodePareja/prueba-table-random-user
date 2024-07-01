import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        users: [],
        filter: {
            name: '',
            nationality: '',
        },
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setNameFilter(state, name) {
            state.filter.name = name;
        },
        setNationalityFilter(state, nationality) {
            state.filter.nationality = nationality;
        },
    },
    actions: {
        async fetchUsers({ commit }) {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=50');
                commit('setUsers', response.data.results);
            } catch (error) {
                console.error(error);
            }
        },
        updateNameFilter({ commit }, name) {
            commit('setNameFilter', name);
        },
        updateNationalityFilter({ commit }, nationality) {
            commit('setNationalityFilter', nationality);
        },
    },
    getters: {
        filteredUsers(state) {
            return state.users.filter(user => {
                const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
                const matchesName = fullName.includes(state.filter.name.toLowerCase());
                const matchesNationality = state.filter.nationality
                    ? user.nat === state.filter.nationality
                    : true;
                return matchesName && matchesNationality;
            });
        },
        nationalities(state) {
            return [...new Set(state.users.map(user => user.nat))];
        },
    },
});