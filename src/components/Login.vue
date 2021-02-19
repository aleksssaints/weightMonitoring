<template>
    <div>
        <h1>Страница входа</h1>
        <label> Логин</label>
        <input type="text" v-model="login">
        <br />
        <label>Пароль</label>
        <input type="text" v-model="password">
        <br />
        <button v-if="!error" @click="handleCreatedWeigth">Войти</button>
        <button v-if="error" class="error">Ошибка</button>
        <h2><router-link to="/register">Зарегистрироваться</router-link></h2>
    </div>
</template>

<script>
export default {
  data () {
    return {
      error: false
    }
  }
}
</script>
