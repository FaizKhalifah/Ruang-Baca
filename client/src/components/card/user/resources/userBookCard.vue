<template>
    <baseCard title="Books" card-class="userBookCard">
        <div class="booksContainer" >
            <div class="bookItem" v-for="book in books" :key="book._id">
                <div class="imageDiv">
                <img :src="`http://localhost:3000${book.imagePath}`" alt="Book Image" class="bookImage" />
                </div>
                <div class="contentDiv">
                <p class="bookTitle">{{ book.title }}</p>
                <p class="bookAuthor">oleh {{ book.author }}</p>
                <p class="bookPublishedYear">{{ book.publishedYear }}</p>
                <p class="bookPublisher">{{ book.publisher }}</p>
                <p class="bookIsbn">ISBN : {{ book.isbn }}</p>
                </div>
                <button v-if="!book.isBorrowed" @click="borrowBook(book._id)">Borrow</button>
                <span v-else>Already Borrowed</span>
            </div>
        </div>
    </baseCard>
</template>
<style scoped>
    .booksContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: stretch;
        gap: 2rem;
        margin: 2rem;
    }  
    
    .bookItem{
        border: 1px solid gray;
        padding:1rem;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.5rem;
        align-items: flex-start;
        border-radius: 1rem;
        box-shadow: 1px 1px 5px black;
    }

    .imageDiv{
        height: 50%;
        width: auto;
        margin: 0rem 2rem;
    }

    .bookItem img{
        width: 100%;
        height: auto;
    }

    .contentDiv{
        text-align: left;
    }

    .bookTitle{
        font-size: 24px;
    }

    .bookAuthor{
        color: gray;
    }

    .bookIsbn{
        font-size: 10px;
    }

    button{
        border: 2px solid white;
        color: white;
        background-color: #EC9A29;
        border: none;
        margin-top: 1rem;
        padding: 0.5rem 3rem;
        border-radius: 1rem;
        align-self: center;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
        background-color: white;
        color:#EC9A29;
        border-color: #EC9A29;
    }
</style>

<script>
    import {jwtDecode} from "jwt-decode"
    import baseCard from '@/components/base/baseCard.vue';
    export default{
        name:"userBookCardComponent",
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
    console.log(this.books);
  },
  methods: {
    async getUserId(){
        const token = localStorage.getItem('token');
        if(!token){
            return null;
        }
        const decoded = jwtDecode(token);
        return decoded;
    },
    async fetchBooks() {
      const response = await fetch('http://localhost:3000/books', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(this.books)
      this.books = await response.json();
    },
    async borrowBook(bookId){
        const user = await this.getUserId();
        const userId = user.id;
        console.log("user : " + user);
        console.log("id user : " + user["id"]);
        console.log("id buku : " + bookId)
        const request = {
            userId:userId,
            bookId:bookId
        }
        try{
            const response = await fetch('http://localhost:3000/books/borrow', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(request)
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            alert('Book borrowed successfully!');
        } else {
            alert(data.message || 'Failed to borrow book');
        }
        }catch(err){
            console.log(err);
            alert("error borrowing book");
        }
    },
    async returnBook(bookId){
        console.log(bookId);
    }

    }

    }
</script>