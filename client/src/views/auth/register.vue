<template>
    <div id="login">
        <form action="">
            
            <h1>Register</h1>
            <div>
                <label for="username">username</label>
                <input type="text" name="username" id="username">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password">
            </div>
            <p>  Don't have an account?<a href="/register">Sign up here</a></p>
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
        name:'registerView'
    }
</script>