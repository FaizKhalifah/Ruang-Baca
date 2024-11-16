<template>
    <baseCard title="add journal" card-class="adminAddJournalCard">
        <form @submit.prevent="addJournal">
        <div>
            <label>Title</label>
            <input v-model="title" placeholder="Title" required />
        </div>
        <div>
            <label>Author</label>
            <input v-model="authors" placeholder="Author" required />
        </div>
        <div>
            <label>Tahun Publikasi</label>
            <input v-model="publishedYear" placeholder="Published Year" required />
        </div>
        <div>
            <label>Jurnal</label>
            <input v-model="publisher" placeholder="Jurnal" />
        </div>
        <div>
            <label>Volume</label>
            <input v-model="volume" placeholder="volume" />
        </div>
        <div>
            <label>Nomor</label>
            <input v-model="number" placeholder="nomor" />
        </div>
      <button type="submit">Tambah Jurnal</button>
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
        name:"adminAddJournalCard",
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
        methods: {
    async addJournal() {
        await fetch('http://localhost:3000/admin/journal/add', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
        title: this.title,
        authors: this.authors.split(","),
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