<template>
    <baseCard title="edit journal" card-class="adminEditJournalCard">
        <form @submit.prevent="updateJournal">
        <div>
            <label>Judul</label>
            <input v-model="title" placeholder="Title" required />
        </div>
        <div>
            <label>Author</label>
            <input v-model="authors" placeholder="Author" required />
        </div>
        <div>
            <label>Tahun terbit</label>
            <input v-model="publishedYear" placeholder="Published Year" required />
        </div>
        <div>
            <label>Jurnal</label>
            <input v-model="publisher" placeholder="Publisher" />
        </div>
        <div>
            <label>Volume</label>
            <input v-model="volume" placeholder="volume" />
        </div>
        <div>
            <label>Number</label>
            <input v-model="number" placeholder="number" />
        </div>
      <button type="submit">Update Jurnal</button>
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
        components:{
            baseCard
        },
        data() {
            return {
            title: "",
            authors: "",
            publishedYear: "",
            publisher: "",
            volume: "",
            number:""
            };
        },
        async created() {
            const id = this.$route.params.id; // Ambil ID dari URL
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:3000/admin/journal/${id}`, {
                    method:'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) throw new Error("Failed to fetch book data");
                const journal = await response.json();

                this.title = journal.title || ""; // Defaultkan ke string kosong jika null
                this.authors = journal.authors.join(", ") || "";
                this.publishedYear = journal.publishedYear || "";
                this.publisher = journal.publisher || "";
                this.volume = journal.volume || "";
                this.number = journal.number || "";
            } catch (error) {
                console.error("Error fetching book data:", error);
                alert("Gagal mengambil data buku. Silakan coba lagi.");
            }
        },
        methods:{
            async updateJournal() {
            const id = this.$route.params.id;
            await fetch(`http://localhost:3000/admin/journal/update/${id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                title: this.title,
                authors: this.authors.split(", "),
                publishedYear: parseInt(this.publishedYear),
                publisher: this.publisher,
                volume:this.volume,
                number:this.number
                })
            });
        this.$router.push('/admin/journals');
    }
    
        }
    }
</script>