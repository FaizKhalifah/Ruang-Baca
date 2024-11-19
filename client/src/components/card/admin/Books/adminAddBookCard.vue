<template>
    <baseCard title="Add Book" card-class="adminAddBookCard">
        <form @submit.prevent="addBook">
            <div>
                <label>Title</label>
                <input v-model="title" placeholder="Title" required />
            </div>
            <div>
                <label>Author</label>
                <input v-model="author" placeholder="Author" required />
            </div>
            <div>
                <label>Tahun Publikasi</label>
                <input v-model="publishedYear" type="number" placeholder="Published Year" required />
            </div>
            <div>
                <label>Penerbit</label>
                <input v-model="publisher" placeholder="Publisher" />
            </div>
            <div>
                <label>ISBN</label>
                <input v-model="isbn" placeholder="ISBN" />
            </div>
            <div>
                <label>Book Image</label>
                <input type="file" @change="handleImageUpload" accept="image/*" />
            </div>
            <button type="submit">Tambah Buku</button>
        </form>
    </baseCard>
</template>


<style scoped>
    form {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
    }

    form div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
    }

    input {
        padding: 0.5rem;
        width: 30rem;
    }

    button {
        cursor: pointer;
        width: 10rem;
        padding: 0.5rem;
        background-color: #ec9a29;
        color: white;
        border: 1px solid white;
        transition: 0.3s;
    }

    button:hover {
        background-color: white;
        border-color: #ec9a29;
        color: #ec9a29;
    }
</style>

<script>
import baseCard from "@/components/base/baseCard.vue";

export default {
    name: "adminAddBookCardComponent",
    data() {
        return {
            title: "",
            author: "",
            publishedYear: "",
            publisher: "",
            isbn: "",
            imageFile: null,
            imageBase64: "" // Store Base64 encoded image
        };
    },
    components: {
        baseCard,
    },
    methods: {
        handleImageUpload(event) {
            this.imageFile = event.target.files[0];
            if (this.imageFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    this.imageBase64 = reader.result.split(",")[1]; // Remove the "data:image/jpeg;base64," prefix
                };
                reader.readAsDataURL(this.imageFile); // Convert image to Base64
            }
        },
        async addBook() {
            try {
                // Buat FormData
                const formData = new FormData();
                formData.append("title", this.title);
                formData.append("author", this.author);
                formData.append("publishedYear", this.publishedYear);
                formData.append("publisher", this.publisher);
                formData.append("isbn", this.isbn);
                if (this.imageFile) {
                    formData.append("image", this.imageFile); // Tambahkan file gambar
                }

                // Kirim data ke server
                const response = await fetch("http://localhost:3000/admin/books/add", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`, // Tambahkan token
                    },
                    body: formData, // Gunakan FormData
                });

                const data = await response.json();
                console.log(data);

                if (response.ok) {
                    this.$router.push("/admin/books");
                } else {
                    console.error(data.message);
                }
            } catch (error) {
                console.error("Error adding book:", error);
            }
        }

    },
};
</script>