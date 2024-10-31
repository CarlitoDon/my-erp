<template>
  <div id="app">
    <h1>Welcome to My ERP</h1>
    <router-link to="/user/register">Register User</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Tambahkan gaya CSS di sini */
</style>
