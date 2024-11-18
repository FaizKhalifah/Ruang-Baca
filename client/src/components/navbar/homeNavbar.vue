<template>
    <nav>
    <ul>
      <li>Ruang Baca</li>
      <div class="navlists">
        <router-link to="/admin/dashboard">Profile</router-link>
        <router-link to="/admin/dashboard">Layanan</router-link>

        <!-- Dropdown untuk Resources -->
        <div class="dropdown">
          <span class="dropdown-toggle">Resources</span>
          <ul class="dropdown-menu">
            <li><router-link to="/resources/books">Books</router-link></li>
            <li><router-link to="/resources/journals">Journals</router-link></li>
          </ul>
        </div>

        <router-link to="/admin/dashboard">Gallery</router-link>
        <router-link to="/admin/dashboard">Kontak</router-link>
        <router-link to="/admin/dashboard">Daftar</router-link>
        <a @click.prevent="logout">Logout</a>
      </div>
    </ul>
  </nav>
</template>
<style scoped>
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

 

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #EC9A29;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 1rem 0rem;
  margin: 0;
  z-index: 1000;
}

.dropdown-menu li {
  padding: 8px 15px;
}

.dropdown-menu li:hover {
  color: #EC9A29;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
<script>
    export default{
        name:"homeNavbarComponent",
        methods:{
          logout(){
            localStorage.removeItem('token'); 
            localStorage.removeItem('role'); 
            this.$router.push({ name: 'login' }); 
        }
    }
    }
</script>