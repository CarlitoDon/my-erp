<template>
  <div>
    <h1>Daftar Pengguna</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const response = await fetch('http://localhost:3000/users');
    this.users = await response.json();
  },
};
</script>

<style>
/* Tambahkan gaya CSS di sini */
</style>
