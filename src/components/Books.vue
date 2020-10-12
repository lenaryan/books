<template>
    <section class="all-books container">
        <h1>Все книги</h1>
        <div class="row switch">
            <button class="deep-purple lighten-1 btn switch__btn" @click="filterBooks">Все</button>
            <button v-for="(rYear, index) in readYears" :key="index" class="deep-purple lighten-1 btn switch__btn" @click="filterBooks">{{ rYear }}</button>
        </div>
        <div class="row books-row">
            <Book v-for="book in filteredBooks" :key="book.id" :book="book" @delete="deleteBook" />
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
            books: [],
            filteredBooks: [],
            readYears: null
        }
    },
    created() {
        this.readYears = new Set();

        db.collection('books').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let book = doc.data();
                    book.id = doc.id;
                    this.books.push(book);
                    this.readYears.add(book.readYear);
                })
            })
        this.filteredBooks = this.books
    },
    methods: {
        deleteBook(data) {
            db.collection('books').doc(data.id).delete()
                .then(() => {
                    this.books  = this.books.filter(book => book.id != data.id)
                })
        },
        filterBooks(e) {
            if (Number.parseInt(e.target.innerText)) {
                this.filteredBooks = this.books.filter(book => book.readYear == e.target.innerText)
            }
            else {
                this.filteredBooks = this.books
            }
        }
    }
}
</script>

<style>
    .switch {
        display: flex;
        align-items: center;
        margin: 40px 0 30px;
    }
    .switch__btn {
        margin-right: 10px;
    }
    .books-row {
        margin-right: -0.75rem;
        margin-left: -0.75rem;
    }
</style>