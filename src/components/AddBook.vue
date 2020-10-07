<template>
    <section class="add container">
        <h1 class="center">Add A Book</h1>
        <form class="add" @submit.prevent="addBook">
            <div class="add__field">
                <label for="add__title">Название</label>
                <input id="add__title" type="text">
            </div>
            <div class="add__field">
                <label for="add__descr">Описание</label>
                <textarea id="add__descr" class="materialize-textarea"></textarea>
            </div>
            <div class="add__field">
                <label for="add__author">Автор</label>
                <input id="add__author" type="text">
            </div>
            <div class="add__field">
                <label for="add__year">Год выпуска</label>
                <input id="add__year" type="text">
            </div>
            <button class="btn-large deep-purple darken-3 add__btn">Добавить</button>
        </form>
    </section>
</template>

<script>
export default {
    name: 'AddBook',
    data() {
        return {

        }
    },
    methods: {
        addBook() {
            console.log(this);
        }
    }
}
</script>

<style>
.add {
    margin-top: 40px;
}
.add input, .add textarea {
    font-size: 18px;
}
.add input:focus, .add textarea:focus {
    border-color: #4527a0;
}
.add__btn {
    display: block;
    margin: 40px auto 0;
}
</style>