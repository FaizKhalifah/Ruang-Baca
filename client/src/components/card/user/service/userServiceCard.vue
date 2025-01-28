<template>
    <baseCard title="service" card-class="userServiceCard">
        <div class="loker">
        <h1>Loker</h1>
        <p>Pengunjung ruang baca diperbolehkan menggunakan loker dengan ketentuan sebagai berikut : </p>
        <ul>
            <li>Tas baik berupa ransel atau tas lengan diharuskan dimasukkan ke loker saat ingin memasuki ruang baca</li>
            <li>Mengambil kunci loker di petugas ruang baca</li>
            <li>Tindakan merusak loker akan dikenakan denda</li>
            <li>Tindakan menghilangkan kunci loker juga akan dikenakan denda</li>
        </ul>
        </div>
        <div class="meeting">
            <h1>Ruang Rapat</h1>
            <p>Civitas universitas dapat menggunakan ruang pertemuan di ruang baca dengan ketentuan berikut : </p>
            <ul>
                <li>Pengajuan ruang pertemuan hanya bisa dilakukan oleh civitas universitas yang ditunjukkan dengan
                    kartu mahasiswa atau kartu pegawai
                </li>
                <li>
                    Pengajuan ruang pertemuan dilakukan maksimal satu pekan sebelum penggunaan ruangan kepada staf ruang Baca
                </li>
                <li>
                    Pembatalan pengajuan ruang pertemuan dilakukan maksimal h-3 penggunaan ruangan di awal
                </li>
                <li>
                    Dilarang untuk merusak segala fasilitas yang ada di dalam ruang pertemuan. Segala jenis kerusakan akan dikenakan denda
                </li>
                
            </ul>
        </div>
        
    </baseCard>
</template>
<style scoped>
    .userServiceCard div{
        padding: 1rem;
    }

    ul{
        margin-top: 0.5rem;
        list-style-type: decimal;
    }

    h1{
        color: #EC9A29;
    }
</style>
<script>
import baseCard from '@/components/base/baseCard.vue';
export default{
    name:"userServiceCardComponent",
    components:{
        baseCard
    }
}
</script>