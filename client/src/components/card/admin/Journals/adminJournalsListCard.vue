<template>
    <baseCard title="Journals" card-class="adminJournalsCard">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Published Year</th>
          <th>publisher</th>
          <th>Volume</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="journal in journals" :key="journal._id">
          <td>{{ journal.title }}</td>
          <td>{{ journal.authors.join(", ")}}</td>
          <td>{{ journal.publishedYear }}</td>
          <td>{{ journal.publisher }}</td>
          <td>{{ journal.volume }}</td>
          <td>{{ journal.number }}</td>
          <td>
            <button @click="editBook(book._id)" class="editButton">Edit</button>
            <button @click="deleteBook(book._id)"  class="deleteButton">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addJournal" class="addButton">Add Journal</button>
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

    .editButton, .deleteButton{
      width: 5rem;
      text-align: center;
      margin: auto;
      border-radius: 0.5rem;
      border: 1px solid white;
      transition: 0.3s
    }

    .editButton{
      background-color: orange;
    }

    .editButton:hover{
        background-color: white;
        color: orange;
        border-color: orange;
    }

    .deleteButton{
      background-color: red;
    }

    .deleteButton:hover{
        background-color: white;
        color: red;
        border-color: red;
    }
</style>
<script>
    import baseCard from '@/components/base/baseCard.vue';
    export default{
        name:"adminJournalsCardComponent",
        components:{
            baseCard
        },
        data(){
            return{
                journals:[]
            }
        },
        async created(){
            this.fetchJournal();
        },
        methods:{
            async fetchJournal(){
                const response = await fetch('http://localhost:3000/admin/journals',{
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                this.journals=await response.json();
            },
            editJournal(id){
                this.$router.push(`/admin/journal/edit/${id}`);
            },
            addJournal(){
                this.$router.push('/admin/journal/add');
            },
            async deleteJournal(id){
                await fetch(`http://localhost:3000/admin/journal/delete/${id}`, {
                method: 'DELETE',
                headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            this.fetchJournal();
            }
        }
    }
</script>