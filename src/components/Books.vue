<template>
    <section class="all-books container">
        <h1>All Books</h1>
        <div class="row">
            <Book v-for="(book, index) in books" :key="index" :book="book" />
        </div>
    </section>
</template>

<script>
import Book from '@/components/Book'

export default {
    name: 'Books',
    components: {
        Book
    },
    data() {
        return {
            books: [
                {title: 'Book 1', description: 'descr 1', author: 'author 1', year: 'year 1'},
                {title: 'Book 2', description: 'descr 2', author: 'author 2', year: 'year 2'},
                {title: 'Book 1', description: 'descr 1', author: 'author 1', year: 'year 1'},
                {title: 'Book 2', description: 'descr 2', author: 'author 2', year: 'year 2'},
            ]
        }
    }
}
</script>