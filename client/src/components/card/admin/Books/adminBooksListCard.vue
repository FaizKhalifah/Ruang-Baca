<template>
    <baseCard title="Books" card-class="adminBooksListCard">
        <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Published Year</th>
          <th>Publisher</th>
          <th>ISBN</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book._id">
          <td>{{ book.title }}</td>
          <td>{{ book.author}}</td>
          <td>{{ book.publishedYear }}</td>
          <td>{{ book.publisher }}</td>
          <td>{{ book.isbn }}</td>
          <td>
            <button @click="editBook(book._id)" style="background-color: orange;">Edit</button>
            <button @click="deleteBook(book._id)" style="background-color: red;">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addBook" class="addButton">Add book</button>
    </baseCard>
</template>
<style>
    table, th, td{
       border: 1px solid black;
    }

    table{
        margin-top: 2rem;
        border-collapse: collapse;
    }

    th,td{
        padding: 1rem 1.5rem;
    }

    table button{
        cursor: pointer;
        margin: 0rem 1rem;
        padding: 0.5rem 1.5rem;
        color: white;
        border: 1px solid white;
    }

    .addButton{
        cursor: pointer;
        margin-top: 2rem;
        background-color: #04AA6D;
        padding: 0.5rem 1.5rem;
        color: white;
        border: 1px solid white;
        transition: 0.3s;
    }

    .addButton:hover{
        border-color: #04AA6D;
        background-color: white;
        color: #04AA6D;
    }
</style>
<script>
    import baseCard from '@/components/base/baseCard.vue';
    export default{
        name:"adminBooksListCardComponent",
        components:{
            baseCard
        },
        data() {
    return {
      books: [],
    };
  },
  async created() {
    await this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      const response = await fetch('http://localhost:3000/admin/books', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      this.books = await response.json();
    },
    editBook(id) {
      this.$router.push(`/admin/book/edit/${id}`);
    },
    async deleteBook(id) {
      await fetch(`http://localhost:3000/api/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      this.fetchBooks();
    },
    addBook(){
        this.$router.push('/admin/book/add')
    }
  }
    }
</script>