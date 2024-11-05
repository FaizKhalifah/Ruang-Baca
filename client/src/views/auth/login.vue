<template>
    <div id="login">
        <form @submit.prevent="loginUser">
            
            <h1>Login</h1>
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" >
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="password" >
            </div>
            <p>  Don't have an account?<a href="/register">Sign up here</a></p>
            <button>Submit</button>

            <div v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </div>

        </form>
        <img src="../../assets/login.png" alt="">
    </div>
</template>
<style scoped>
    #login{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 5rem auto;
        background-color: #d4cdf4;
        width: 70%;
        gap: 4rem;
        padding: 2rem;
        border-radius: 1rem;
     }

    form, form div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    form div{
        gap: 0.7rem;
    }
    form{
        gap: 1.5rem;
    } 

    form input{
        width: 20rem;
        padding: 0.3rem 0.5rem;
        border-radius: 0.5rem;
        border: none;
    }

    form button{
        color: white;
        width: 20rem;
        padding: 0.6rem 2.5rem;
        border: 1px solid #d4cdf4;
        background-color: black;
        cursor: pointer;
        border-radius: 1rem;
        transition: 0.3s;
    }

    form button:hover{
        background-color: #d4cdf4;
        border-color: black;
        color: black;
    }

    a{
        text-decoration: none;
        color: black;
        margin-left: 0.3rem;
    }

    h1{
        font-size: 48px;
        font-weight: bold;
    }

    img{
        width: 30rem;
        border-radius: 1rem;
    }

    .error-message{
      width: 20rem;
      background-color: red;
      color: white;
      border-radius: 2rem;
      padding: 0.5rem 1rem;
      text-align: center;
    }
</style>
<script>
    export default{
        name:'loginView',
        data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
    };
  },
  methods:{
    async loginUser() {
        console.log(this.email);
        console.log(this.password);
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          this.errorMessage = data.msg || 'Login gagal, coba lagi';
          console.log(this.errorMessage);
          return;
        }

        // Simpan token dan role di localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('role',data.role);

        // Redirect berdasarkan role
        if (data.role === 'admin') {
          this.$router.push('/admin/dashboard');
        } else if(data.role === 'user') {
          this.$router.push('/home');
        }else{
            console.log("unknown role");
        }
      } catch (error) {
        console.error('Login failed:', error);
        this.errorMessage = 'An error occurred during login. Please try again later.';
   
      }
    }
  

  }
    }
</script>