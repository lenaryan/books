<template>
    <article class="book col l4 m6 s12">
        <div class="card deep-purple lighten-4">
            <div class="card-content">
                <h3 class="card-title book__title">{{ book.title }}</h3>
                <p>{{ book.description }}</p>
                <p>Author: {{ book.author }}</p>
                <p>{{ book.year }}</p>
            </div>
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
    .book__title {
        margin-top: 0;
    }
</style>