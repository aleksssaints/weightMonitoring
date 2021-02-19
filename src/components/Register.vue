<template>
    <div>
        <h1>Страница регистрации</h1>
        <label>Почта</label>
        <input type="text" v-model="email">
        <br />
        <label> Логин</label>
        <input type="text" v-model="login">
        <br />
        <label>Пароль</label>
        <input type="text" v-model="password">
        <br />
        <button v-if="!error" @click="handleCreatedWeigth">Продолжить</button>
        <button v-if="error" class="error">Ошибка</button>
        <h2><router-link to="/login">Уже зарегистрированы? Войти</router-link></h2>
    </div>
</template>

<script>
export default {
  data () {
    return {
      error: true
    }
  }
}
</script>
