<template>
  <div>
    <h1>Form Pengguna</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nama:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <button type="submit">Simpan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: this.name, email: this.email }),
      });
      if (response.ok) {
        // Handle success (e.g., redirect or show a message)
      } else {
        // Handle error
      }
    },
  },
};
</script>

<style>
/* Tambahkan gaya CSS di sini */
</style>
