<template>
    <article class="book col xl4 m6 s12">
        <div class="card deep-purple lighten-4">
            <button class="material-icons deep-purple-text right book__delete" @click.prevent="deleteBook(book.id)">delete</button>
            <div class="card-content">
                <h3 class="card-title book__title">{{ book.title }}</h3>
                <p class="book__description">{{ book.description }}</p>
            </div>
            <div class="card-action">
                <p class="book__author">Автор: {{ book.author }}</p>
                <p class="book__year">{{ book.year }}</p>
                <p class="book__read-year deep-purple-text">Прочитано в {{ book.readYear }}</p>
            </div>
            <span class="btn-floating halfway-fab btn white">
                <router-link :to="{ name: 'EditBook', params: {id: book.id} }"><i class="material-icons deep-purple-text">edit</i></router-link>
            </span>            
        </div>
    </article>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Book',
    props: ['book'],
    data() {
        return {

        }
    },
    methods: {
        deleteBook(id) {
            this.$emit('delete', {
                id: this.book.id
            })
        }
    }
}
</script>

<style>
    .book {
        margin-bottom: 10px;
    }
    .book .book__title {
        margin-top: 0;
        font-weight: 500;
    }

    .book__description {
        font-size: 17px;
    }

    .book__author {
        margin: 0;
    }

    .book__year {
        margin: 0;
    }
    .book__delete {
        padding: 0;
        background-color: transparent;
        border: none;
        padding: 10px;
        transition: all 0.2s ease-in-out;
    }
    .book__delete:hover,
    .book__delete:focus {
        background-color: transparent;
        opacity: 0.7;
    }
    .book__read-year {
        margin: 5px 0 0;
        font-size: 13px;
    }
</style>