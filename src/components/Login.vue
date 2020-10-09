<template>
    <section class="container">
        <h1 class="center">Вход</h1>
        <form class="login" @submit.prevent="logIn">
            <div class="login__field">
                <label for="login__email">E-mail</label>
                <input id="login__email" type="email" v-model="email">
            </div>
            <div class="login__field">
                <label for="login__pass">Пароль</label>
                <input id="login__pass" type="password" v-model="password">
            </div>
            <p v-if="feedback" class="feedback center">Заполни форму нормально</p>
            <button class="btn-large deep-purple darken-3 login__btn">Войти</button>
        </form>
    </section>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            feedback: false
        }
    },
    methods: {
        logIn() {
            if (this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(cred => {
                        this.$router.push({ name: 'Books' })
                    }).catch(err => this.feedback = true)
                this.feedback = false
            } else {
                this.feedback = true
            }
        }
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
.login input[type=email]:focus:not([readonly]),
.login input[type=password]:focus:not([readonly]) {
    border-bottom: 1px solid #4527a0;
    box-shadow: 0 1px 0 0 #4527a0;
}
.login__btn {
    display: block;
    margin: 40px auto 0;
}
</style>