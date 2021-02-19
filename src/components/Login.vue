<template>
    <form @submit.prevent="loginUser">
        <h1>Страница входа</h1>
        <label>Почта</label>
        <input type="text" v-model="email">
        <br />
        <label>Пароль</label>
        <input type="text" v-model="password">
        <br />
        <button v-if="!error" @click="handleCreatedWeigth">Войти</button>
        <button v-if="error" class="error">Ошибка</button>
        <h2><router-link to="/register">Зарегистрироваться</router-link></h2>
    </form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      error: false
    }
  }
}
</script>
