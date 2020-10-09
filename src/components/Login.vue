<template>
    <section class="container">
        <h1 class="center">Вход</h1>
        <form class="login" @submit.prevent="addBook">
            <div class="login__field">
                <label for="login__name">Логин</label>
                <input id="login__name" type="text" v-model="login">
            </div>
            <div class="login__field">
                <label for="login__pass">Пароль</label>
                <input id="login__pass" type="text" v-model="password">
            </div>
            <p v-if="feedback" class="feedback center">Заполни хотя бы название, камон</p>
            <button class="btn-large deep-purple darken-3 login__btn">Добавить</button>
        </form>
    </section>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Login',
    data() {
        return {
            login: null,
            password: null,
            feedback: false
        }
    },
    methods: {

    }
}
</script>

<style>
.login {
    margin-top: 40px;
}
.login input {
    font-size: 18px;
}
.login input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #4527a0;
    box-shadow: 0 1px 0 0 #4527a0;
}
.login__btn {
    display: block;
    margin: 40px auto 0;
}
</style>