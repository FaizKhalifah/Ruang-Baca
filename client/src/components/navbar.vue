<template>
    <nav>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <!-- <li><router-link to="/books">Books</router-link></li>
        <li><router-link to="/employees">Employees</router-link></li>
        <li><router-link to="/students">Students</router-link></li>
        <li><router-link to="/facilities">Facilities</router-link></li>
        <li><router-link to="/orders">Orders</router-link></li> -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppNavbar",
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 15px;
  }
  
  li {
    color: white;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  