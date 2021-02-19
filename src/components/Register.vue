<template>
    <form>
        <h1>Страница регистрации</h1>
        <label>Почта</label>
        <input type="email" v-model="user.email" placeholder="example@mail.ru">
        <br />
        <label>Пароль</label>
        <input type="password" v-model="user.password" placeholder="Не меньше 6 символов">
        <br />
        <button @click="registerUser">Продолжить</button>
        <h2 v-if="fieldError" class="fieldError">{{ msg }}</h2>
        <h2><router-link to="/login">Уже зарегистрированы? Войти</router-link></h2>
    </form>
</template>

<script>
import { authRef } from '../firebase'

export default {
  name: 'register',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      fieldError: false,
      msg: ''
    }
  },
  methods: {
    registerUser () {
      if (this.user.email === '' || this.user.password === '' || this.user.password.length < 6) {
        this.fieldError = true
        this.msg = 'Некорректно заполнены поля'
      } else {
        try {
          authRef.createUserWithEmailAndPassword(this.user.email, this.user.password)
          this.$router.push({ name: 'Editing' })
        } catch (err) {
          this.fieldError = true
          this.msg = 'Ошибка при регистрации'
          console.log(err)
        }
      }
    }
  }
}
</script>
