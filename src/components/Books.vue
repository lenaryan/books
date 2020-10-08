<template>
    <section class="all-books container">
        <h1>Все книги</h1>
        <div class="row">
            <Book v-for="book in books" :key="book.id" :book="book" @delete="deleteBook" />
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
                    book.id = doc.id;
                    this.books.push(book)
                })
            })
    },
    methods: {
        deleteBook(data) {
            db.collection('books').doc(data.id).delete()
                .then(() => {
                    this.books  = this.books.filter(book => book.id != data.id)
                })
        }
    }
}
</script>

<style>

</style>