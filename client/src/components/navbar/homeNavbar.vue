<template>
    <nav>
        <ul>
            <li>Ruang baca</li>
            <div class="navlists">
                <router-link to="/admin/dashboard">Profile</router-link>
                <router-link to="/admin/dashboard">Layanan</router-link>
                <router-link to="/admin/dashboard">Resources</router-link>
                <router-link to="/admin/dashboard">Gallery</router-link>
                <router-link to="/admin/dashboard">Kontak</router-link>
            </div>
        </ul>
    </nav>
</template>
<style>
    ul, .navlists{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    nav{
        background-color: #EC9A29;
        color: white;
    }

    ul{
        justify-content: space-between;
        padding: 1rem 2rem;
        list-style-type: none;
        gap: 2rem;
    }
    .navlists{
        gap: 3rem;
    }

    a{
        text-decoration: none;
        padding: 0.5rem;
        color: white;
        border-bottom: 1px solid #EC9A29;
        cursor: pointer;
        transition: 0.3s;
    }

    a:hover{
        border-color: white;
    }
</style>
<script>
    export default{
        name:"homeNavbarComponent"
    }
</script>