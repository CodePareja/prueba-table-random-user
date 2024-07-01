<template>
    <table>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Nationality</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.login.uuid">
            <td>{{ user.name.first }}</td>
            <td>{{ user.name.last }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.nat }}</td>
        </tr>
        </tbody>
    </table>
</template>
  
<script>
export default {
    name: 'UserTable',
    props: {
        users: {
        type: Array,
        required: true
        }
    }
};
</script>
  
<style>
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}
</style>