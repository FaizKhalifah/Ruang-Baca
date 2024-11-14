<template>
    <baseCard title="Edit book" card-class="editBookCard">
        <form @submit.prevent="updateBook">
      <input v-model="title" placeholder="Title" required />
      <input v-model="authors" placeholder="Authors (comma separated)" required />
      <input v-model="publishedYear" placeholder="Published Year" required />
      <input v-model="publisher" placeholder="Publisher" />
      <input v-model="isbn" placeholder="ISBN" />
      <button type="submit">Update Buku</button>
    </form>
    </baseCard>
</template>
<script>
    import baseCard from '@/components/base/baseCard.vue';
    export default{
        name:"adminEditBookCardComponent",
        components:{
            baseCard
        }
    }
</script>