<template>
  <div>
    <h1>Registrasi Admin</h1>
    <form @submit.prevent="registerAdmin">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Daftar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminRegister',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async registerAdmin() {
    try {
        const response = await fetch('http://localhost:3000/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.username,
                email: this.email,
                password: this.password,
            }),
        });
        if (response.ok) {
            // Handle success (e.g., redirect or show a message)
            console.log('Admin registered successfully');
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData.message);
        }
    } catch (error) {
    console.error('Network error:', error);
    }
    }
  },
};
</script>

<style>
/* Tambahkan gaya CSS di sini */
</style>
