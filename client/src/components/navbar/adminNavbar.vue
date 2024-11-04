<template>
    <nav>
        <ul>
            <li>Admin</li>
            <li>
                <div class="searchBar">
                    <div class="searchForm">
                        <form action="">
                            <input type="text" name="search" id="search" placeholder="search">
                        </form>
                        <button>Search</button>
                    </div>
                    <a @click.prevent="logout">Logout</a>
                </div>
            </li>
        </ul>  
    </nav>
</template>
<script>
    export default{
        name:'adminNavbarComponent',
        methods:{
          logout(){
            localStorage.removeItem('token'); 
            localStorage.removeItem('role'); 
            this.$router.push({ name: 'login' }); 
        }
    }
}
</script>
<style scoped>
    nav{
        padding: 1rem;
        background-color: #393D3F;
        color: white;
        width: 100%;
    }

    nav ul, .searchBar, .searchForm{
        list-style-type: none;
        display: flex;
        flex-direction: row;
    }

    nav ul{
        align-items: center;
        justify-content: space-between;
        gap: 10rem;
    }

    .searchBar{
        align-items: center;
        gap: 2rem;
    }

    .searchForm{
        gap: 0rem;
        align-items: stretch;
    }

    .searchForm button{
        padding: 0rem 1.1rem;
        background-color: #EC9A29;
        color: white;
        border: none;
    }

    .searchBar a{
        text-decoration: none;
        color: white;
        cursor: pointer;
    }

    nav input[type=text]{
        padding: 0.5rem 1rem;
    }

</style>