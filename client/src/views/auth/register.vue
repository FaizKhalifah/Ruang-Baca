<template>
    <div id="login">
        <form @submit.prevent="registerUser">
            
            <h1>Register</h1>
            <div>
                <label for="username">username</label>
                <input type="text" v-model="username">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="password">
            </div>
            <p>  Already have an account?<a href="/login">Log in here</a></p>
            <button>Submit</button>
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
</style>
<script>
    export default{
        name:'registerView',
        data(){
            return{
                username:'',
                email:'',
                password:'',
                errorMessage:''
            }
        },
        methods:{
            async registerUser(){
                try{
                    const response = await fetch('http://localhost:3000/register',{
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username:this.username,
                            email: this.email,
                            password: this.password
                        })
                    });
                    const data = await response.json();
                    if (!response.ok) {
                        this.errorMessage = data.msg || 'Register gagal, coba lagi';
                        console.log(this.errorMessage);
                        return;
                    }
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('role',data.role);
                    this.$router.push('/home');
                }catch(err){
                    console.log(err);
                }
            }
        }
    }
</script>