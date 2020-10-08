<template>
    <article class="book col l4 m6 s12">
        <div class="card deep-purple lighten-4">
            <div class="card-content">
                <h3 class="card-title book__title">{{ book.title }}</h3>
                <p class="book__description">{{ book.description }}</p>
            </div>
            <div class="card-action">
                <p class="book__author">Автор: {{ book.author }}</p>
                <p class="book__year">{{ book.year }}</p>
            </div>
            <span class="btn-floating halfway-fab btn-large white">
                <router-link :to="{ name: 'EditBook', params: {id: book.id} }"><i class="material-icons deep-purple-text">edit</i></router-link>
            </span>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Book',
    props: ['book'],
    data() {
        return {

        }
    }
}
</script>

<style>
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
</style>