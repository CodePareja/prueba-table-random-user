<template>
  <div id="app">
    <h1>Random User List</h1>
    <UserFilter
      :nameFilter="filter.name"
      :nationalityFilter="filter.nationality"
      :nationalities="nationalities"
      @update:nameFilter="updateNameFilter"
      @update:nationalityFilter="updateNationalityFilter"
    />
    <UserTable :users="filteredUsers" />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import UserTable from './components/UserTable.vue';
import UserFilter from './components/UserFilter.vue';

export default {
  name: 'App',
  components: {
    UserTable,
    UserFilter
  },
  computed: {
    ...mapState(['filter']),
    ...mapGetters(['filteredUsers', 'nationalities']),
  },
  methods: {
    ...mapActions(['fetchUsers', 'updateNameFilter', 'updateNationalityFilter']),
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>