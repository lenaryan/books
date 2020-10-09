<template>
    <section class="add container">
        <h1 class="center">Вход</h1>
        <form class="add" @submit.prevent="addBook">
            <div class="add__field">
                <label for="add__title">Логин</label>
                <input id="add__title" type="text" v-model="login">
            </div>
            <div class="add__field">
                <label for="add__year">Пароль</label>
                <input id="add__year" type="text" v-model="password">
            </div>
            <p v-if="feedback" class="feedback center">Заполни хотя бы название, камон</p>
            <button class="btn-large deep-purple darken-3 add__btn">Добавить</button>
        </form>
    </section>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'AddBook',
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
.add {
    margin-top: 40px;
}
.add input {
    font-size: 18px;
}
.add input[type=text]:focus:not([readonly]), .add textarea:focus:not([readonly]) {
    border-bottom: 1px solid #4527a0;
    box-shadow: 0 1px 0 0 #4527a0;
}
.add__btn {
    display: block;
    margin: 40px auto 0;
}
</style>