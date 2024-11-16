<template>
    <baseCard title="Edit book" card-class="editBookCard">
    <form @submit.prevent="updateBook">
        <div>
            <label>Judul</label>
            <input v-model="title" placeholder="Title" required />
        </div>
        <div>
            <label>Author</label>
            <input v-model="author" placeholder="Author" required />
        </div>
        <div>
            <label>Tahun terbit</label>
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
      <button type="submit">Update Buku</button>
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
        name:"adminEditBookCardComponent",
        components:{
            baseCard
        },
        data() {
            return {
            title: "",
            author: "",
            publishedYear: "",
            publisher: "",
            isbn: "",
            };
        },
    async created() {
    const id = this.$route.params.id; // Ambil ID dari URL
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/admin/books/${id}`, {
            method:'GET',
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error("Failed to fetch book data");
        const book = await response.json();

        this.title = book.title || ""; // Defaultkan ke string kosong jika null
        this.author = book.author || "";
        this.publishedYear = book.publishedYear || "";
        this.publisher = book.publisher || "";
        this.isbn = book.isbn || "";
    } catch (error) {
        console.error("Error fetching book data:", error);
        alert("Gagal mengambil data buku. Silakan coba lagi.");
    }
},
        methods: {
        async updateBook() {
        const id = this.$route.params.id;
        await fetch(`http://localhost:3000/admin/books/update/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
            title: this.title,
            author: this.author,
            publishedYear: parseInt(this.publishedYear),
            publisher: this.publisher,
            isbn: this.isbn
            })
        });
        this.$router.push('/admin/books');
    }
    }
    }
</script>