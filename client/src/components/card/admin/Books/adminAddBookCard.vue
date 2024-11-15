<template>
    <baseCard title="add book" card-class="adminAddBookCard">
    <form @submit.prevent="addBook">
        <div>
            <label>Title</label>
            <input v-model="title" placeholder="Title" required />
        </div>
        <div>
            <label>Author</label>
            <input v-model="author" placeholder="Author" required />
        </div>
        <div>
            <label>Tahun Publikasi</label>
            <input v-model="publishedYear" placeholder="Published Year" required />
        </div>
        <div>
            <label>Penerbit</label>
            <input v-model="publisher" placeholder="Publisher" />
        </div>
        <div>
            <label>ISBN</label>
            <input v-model="isbn" placeholder="ISBN" />
        </div>
      <button type="submit">Tambah Buku</button>
    </form>
    </baseCard>
</template>
<style scoped>
    form{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
    }

    form div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
    }

    input{
        padding: 0.5rem;
        width: 30rem;
    }

    button{
        cursor: pointer;
        width: 10rem;
        padding: 0.5rem;
        background-color: #EC9A29;
        color: white;
        border: 1px solid white;
        transition: 0.3s;
    }

    button:hover{
        background-color: white;
        border-color: #EC9A29;
        color: #EC9A29;
    }
</style>
<script>
    import baseCard from '@/components/base/baseCard.vue';
    export default{
        data(){
            return{
                title: "",
                author: "",
                publishedYear: "",
                publisher: "",
                isbn: "",
            }
        },
        name:"adminAddBookCardComponent",
        components:{
            baseCard
        },methods:{
            async addBook(){
                const response = await fetch('http://localhost:3000/admin/books/add', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`},
                    body: JSON.stringify({
                        title: this.title,
                        author: this.author,
                        publishedYear: parseInt(this.publishedYear),
                        publisher: this.publisher,
                        isbn: this.isbn
                    })
                });
                const data =await response.json();
                console.log(data);
                this.$router.push('/admin/books');
                
            }
        }
    }
</script>