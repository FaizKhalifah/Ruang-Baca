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
                    <a href="/logout">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
    nav{
        padding: 1rem;
        background-color: #FF9B06;
        color: white;
    }


</style>
<script>
    export default{
        name:"NavBar"
    }
</script>