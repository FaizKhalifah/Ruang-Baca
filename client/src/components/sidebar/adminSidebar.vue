<template>
    <aside>
        <ul>
            <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
            <li><router-link to="/admin/books">Books</router-link></li>
            <li><router-link to="/admin/journals">Journals</router-link></li>
            <li><router-link to="/admin/employees">Employees</router-link></li>
            <li><router-link to="/admin/students">Students</router-link></li>
            <li><router-link to="/admin/facilities">Facilities</router-link></li>
        </ul>
    </aside>
</template>
<style scoped>
    aside{
        background-color: #EC9A29;
        width: 15%;
        padding: 2rem;
        padding-bottom: 15rem;
        min-height: 100vh;
    }

    aside a{
        text-decoration: none;
        color: white;
        transition: 0.3s;
        padding: 1rem;
    }

    aside ul{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
        gap: 3rem;
        font-weight: bold;
        list-style-type: none;
    }

    li{
        transition: 0.3s;
    }


    a:hover{
        background-color: white;
        color: #EC9A29;
    }
</style>
<script>
    export default{
        name:'adminSidebarComponent'
    }
</script>