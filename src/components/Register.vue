<template>
    <form @submit.prevent="registerUser">
        <h1>Страница регистрации</h1>
        <label>Почта</label>
        <input type="email" v-model="user.email" placeholder="example@mail.ru">
        <br />
        <label>Пароль</label>
        <input type="text" v-model="user.password" placeholder="Пароль не меньше 6 символов">
        <br />
        <button @click="handleCreatedWeigth">Продолжить</button>
        <h2 v-if="error" class="error">Некорректно введены данные</h2>
        <h2><router-link to="/login">Уже зарегистрированы? Войти</router-link></h2>
    </form>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      error: false
    }
  },
  methods: {
    registerUser () {
      if (this.user.email === '' || this.user.password === '' || this.user.password.length < 6) {
        this.error = true
      }
    }  
  }
}
</script>
