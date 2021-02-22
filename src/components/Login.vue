<template>
    <form>
        <h1>Страница входа</h1>
        <label>Почта</label>
        <input type="text" v-model="user.email" placeholder="example@mail.ru">
        <br />
        <label>Пароль</label>
        <input type="password" v-model="user.password" placeholder="Пароль">
        <br />
        <button @click="loginUser">Войти</button>
        <h2 v-if="fieldError" class="fieldError">{{ msg }}</h2>
        <h2><a @click="toRegistraterPage">Зарегистрироваться</a></h2>
    </form>
</template>

<script>
import { authRef } from '../firebase'

export default {
  name: 'login',
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
    loginUser () {
      if (this.user.email === '' || this.user.password === '') {
        this.fieldError = true
        this.msg = 'Некорректно заполнены поля'
      } else {
        try {
          authRef.signInWithEmailAndPassword(this.user.email, this.user.password)
          this.$router.push({ name: 'Editing', props: { isAuthorised: true } })
        } catch (err) {
          this.fieldError = true
          this.msg = 'Ошибка при входе'
          console.log(err)
        }
      }
    },
    toRegistraterPage () {
      this.$router.push({ name: 'Register' })
    }
  }
}
</script>
