<template>
    <section class="all-books container">
        <h1>Все книги</h1>
        <div class="row">
            <Book v-for="(book, index) in books" :key="index" :book="book" />
        </div>
    </section>
</template>

<script>
import Book from '@/components/Book'
import db from '@/firebase/init'

export default {
    name: 'Books',
    components: {
        Book
    },
    data() {
        return {
            books: []
        }
    },
    created() {
        db.collection('books').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let book = doc.data();
                    book.id = book.id;
                    this.books.push(book)
                })
            })
    }
}
</script>

<style>

</style>