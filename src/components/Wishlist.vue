<template>
  <section class="container">
    <transition
      appear
      appear-class="title-hidden"
      appear-to-class="title-shown"
      appear-active-class="title-shown-active"
    >
      <h1 class="center-align">Хочу прочитать</h1>
    </transition>
    <transition
      appear
      appear-class="list-hidden"
      appear-to-class="list-shown"
      appear-active-class="list-shown-active"
    >
      <ul class="collection">
        <li v-for="book in list" :key="book.id" class="collection-item">
          <span class="material-icons deep-purple-text">book</span>
          <span>{{ book.author }}{{'&nbsp;–&nbsp;'}}{{ book.title }}</span>

          <!-- // TODO: on click:
          // remember current author and title (store or just sessionStorage?)
          // remove book from this list
          // go to the form of adding new book and paste author and title of the book -->
          <button class="done deep-purple lighten-1 btn-small">Прочитано</button>
        </li>
      </ul>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'Wishlist',
    data() {
      return {
        list: [
          { id: 1, author: 'Стивен Кинг', title: 'Тёмная башня'},
          { id: 2, author: 'Джо Хилл', title: 'Рога'},
          { id: 3, author: 'Уильям Голдинг', title: 'Повелитель мух'},
        ]
      }
    },
  }
</script>

<style>
  .list-hidden,
  .title-hidden {
    opacity: 0;
  }
  .list-shown,
  .title-shown {
    opacity: 1;
  }
  .list-shown-active,
  .title-shown-active {
    transition: all 0.3s ease;
  }
  .collection {
    margin-top: 40px;
  }
  .collection-item {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 17px;
  }
  .done {
    margin-left: auto;
  }
</style>
