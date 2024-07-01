<template>
    <div>
        <label>
            Search by name:
            <input type="text" :value="nameFilter" @input="updateNameFilter" />
        </label>
        <label>
            Filter by nationality:
            <select :value="nationalityFilter" @change="updateNationalityFilter">
                <option value="">All</option>
                <option v-for="nat in nationalities" :key="nat" :value="nat">{{ nat }}</option>
            </select>
        </label>
    </div>
</template>
  
<script>
export default {
    name: 'UserFilter',
    props: {
        nameFilter: {
            type: String,
            required: true
        },
        nationalityFilter: {
            type: String,
            required: true
        },
        nationalities: {
            type: Array,
            required: true
        }
    },
    methods: {
        updateNameFilter(event) {
            this.$emit('update:nameFilter', event.target.value);
        },
        updateNationalityFilter(event) {
            this.$emit('update:nationalityFilter', event.target.value);
        }
    }
};
</script>