# 💰 Sistem Insentif Lomba IPB-P2-Kelompok 10 

## Back-end
[Back-end aplikasi](https://github.com/bimaaul/psbo-backend)

## Figma
[Link Figma](https://www.figma.com/file/k8vbxBA6bLo3caRksYVH80/PSBO-Kelompok-10?node-id=1%3A2)

## Deskripsi Aplikasi
Alur proses pengajuan bantuan dana dan insentif lomba yang dirasa sulit berdampak terhadap peningkatan prestasi civitas IPB. Menyadari hal itu, perlu adanya sistem yang membantu mengatasi masalah ini. Oleh karena itu kami mengusulkan adanya fitur Insentif pada website prestasi.ipb.ac.id. Dengan adanya fitur Insentif ini civitas IPB dapat mengajukan insentif perlombaan yang telah dimenangkan sehingga bisa mendapatkan uang insentif yang telah dijanjikan pihak kampus. Selain itu civitas IPB juga bisa mendapatkan informasi lebih lanjut terkait pengajuan insentif lomba yang diikuti sehingga bisa melacak apakah insentif sudah diberikan atau belum karena ada kendala tertentu. 
Apabila uang insentif telah dikirim pihak kampus nantinya mahasiswa yang melakukan pengajuan akan mendapatkan email notifikasi bahwa uang insentif sudah berhasil dikirim. 
Data statistik terkait konfirmasi pengiriman uang insentif juga bisa diakses pada website prestasi.ipb.ac.id. Sehingga bisa menjadi bahan evaluasi untuk pengajuan dana insentif kedepannya. 


## User Analysis
### User Story
- Sebagai Mahasiswa IPB saya ingin mengajukan insentif perlombaan yang telah saya menangkan sehingga saya bisa mendapat uang insentif yang telah dijanjikan oleh IPB.
- Sebagai Mahasiswa IPB saya ingin mendapat informasi lebih lanjut perihal pengajuan insentif lomba saya sehingga saya mengetahui apakah insentif sudah diberikan atau belum.
- Sebagai pegawai administrasi insentif lomba IPB, saya ingin membuat formulir pengajuan insentif lomba sehingga dokumen persyaratan terpusat dalam satu tempat
- Sebagai pegawai administrasi insentif lomba IPB, saya ingin lebih mudah untuk meninjau dokumen persyaratan, melakukan seleksi proposal, dan memberi informasi lanjutan terkait pengiriman insentif

## Lingkungan Pengembangan
### Software
![Frame 1](https://user-images.githubusercontent.com/46121487/122228789-65c0d880-cee2-11eb-806d-21b5b52f3a5e.png)


### Hardware
- Processors: Intel i5-7200
- Memory: RAM 8GB


### Tech Stack
<table>
    <thead>
        <tr>
            <th>Nama</th>
            <th>Fungsi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MongoDB</td>
            <td>Database</td>
        </tr>
         <tr>
            <td>ExpressJS</td>
            <td>NodeJS Web Framework</td>
        </tr>
        <tr>
            <td>NodeJS</td>
            <td>JavaScript Web Server</td>
        </tr>
       <tr>
            <td>React JS</td>
            <td>Client-side JavaScript framework (Front-End)</td>
        </tr>
</tbody>
</table>

## Konsep OOP
### Object, Method, dan Property
- Object di dalam JavaScript adalah variabel yang menyimpan nilai, object adalah representasi nyata dari class
- Method di dalam JavaScript adalah actions yang dapat dilakukan pada objects. Object method adalah suatu object property yang mengandung definisi fungsi
- Property di dalam object dapat berupa nilai primitif, object lain, maupun fungsi
- Singkatnya, Javascript objects adalah containers untuk beberapa value yang disimpan, yaitu property dan method.
### Class
- Classes adalah template untuk membuat objects. Classes meng-enkapsulasi data dengan kode untuk bekerja pada data tersebut. Classes di dalam JavaScript dibangun pada prototipe namun juga memiliki beberapa sintaks dan semantics
### Getter and Setter
- Getter didefiniskan oleh kata kunci get diikuti oleh suatu fungsi yang dinamai setelah property, tanpa mengambil argumen dan mengembalikan nilai dari property tersebut
- Setter didefinisikan oleh kata kunci set diikuti oleh suatu fungsi yang dinamai setelah property yang mengambil nilai baru dari property tersebut sebagai parameter.

## Tipe Design Pengembangan
Pada Sistem Insentif Lomba IPB, kami menggunakan design pattern MVC (Model View controller). MVC memecah sebuah aplikasi menjadi tiga bagian, yaitu model yang berhubungan dengan database, view yang berurusan dengan tampilan, dan controller yang mengatur alur jalannya aplikasi.
<br /> <br />
![image](https://user-images.githubusercontent.com/46121487/122526377-6b363400-d044-11eb-8428-81a0e9c7dbfc.png)



## Hasil & Pembahasan
### Use Case Diagram
![Project PSBO-Use case (3)](https://user-images.githubusercontent.com/46121487/122192896-41eb9b80-cebe-11eb-8408-af0ffbdb2280.png)

### Activity Diagram
![Activity Diagram](https://user-images.githubusercontent.com/47895564/120601941-b6f9b280-c474-11eb-8aaa-89d3de9bed3d.png)

### Class Diagram
![Project PSBO-class diagram (3)](https://user-images.githubusercontent.com/46121487/121803318-1cb31f00-cc6b-11eb-86d9-851eb4a5a004.png)

### Entity Relationship Diagram
![Project PSBO-ERD (2)](https://user-images.githubusercontent.com/46121487/122526589-aa648500-d044-11eb-842b-a4a90f536086.png)

### Arsitektur Sistem
![Project PSBO-Arsitektur Sistem](https://user-images.githubusercontent.com/46121487/121877825-3f116f00-cd35-11eb-8051-0964dcff6748.png)

### Fungsi Utama
- Mahasiswa
  - Membuat pengajuan insentif
  - Melihat progress pengajuan
- Admin
  - Melihat pengajuan insentif mahasiswa
  - Mengubah status pengajuan mahasiswa
  - Membuka dan mengakhiri periode pengisian formulir input

### Fungsi CRUD
#### CREATE Function
- Membuat pengajuan insentif (Mahasiswa)
#### READ Function
- Melihat progress pengajuan (Mahasiswa)
- Melihat pengajuan insentif mahasiswa (Admin)
#### UPDATE Function
- Mengubah status pengajuan mahasiswa (Admin)
- Membuka dan mengakhiri periode pengisian formulir input (Admin)
#### DELETE Function
- Menghapus pengajuan insentif (Mahasiswa)
- Menghapus pengajuan mahasiswa (Admin)

## Hasil Implementasi
### Screenshot Sistem
### User
![login user](https://user-images.githubusercontent.com/46121487/123547876-b3fc9400-d78c-11eb-96eb-c1d8f94494a6.jpg)
![dashboardUserHaveData](https://user-images.githubusercontent.com/46121487/123547902-d098cc00-d78c-11eb-93d6-c26d8add0a35.jpg)
![biodataUser](https://user-images.githubusercontent.com/46121487/123547914-dd1d2480-d78c-11eb-89e0-0b89887f24df.jpg)
![insentifNasional](https://user-images.githubusercontent.com/46121487/123547928-f0c88b00-d78c-11eb-92a9-d7b88b4b4e55.jpg)

### Admin
![login admin](https://user-images.githubusercontent.com/46121487/123547939-ffaf3d80-d78c-11eb-8f43-d1e8b17c4136.jpg)
![dashboardAdmin](https://user-images.githubusercontent.com/46121487/123547951-08077880-d78d-11eb-9cec-92e9c2476040.jpg)
![tableAdmin](https://user-images.githubusercontent.com/46121487/123547955-0ccc2c80-d78d-11eb-91b3-b501565ebe1e.jpg)

### Link Aplikasi (Opsional)
<a href="https://silomba.netlify.app/login">Link Apliasi</a>
#### Akun user
email: bimaaulia.15@gmail.com
pw: 000000

#### Akun admin
email: bobusang.15@gmail.com
pw: 000000

## Saran Pengembangan Selanjutnya
- Pengintegrasian dengan API IPB untuk login dan mendapatkan data mahasiswa
- Menyelesaikan fitur untuk membuka dan menutup periode pengisian formulir oleh admin
- Menambahkan fitur untuk kustomisasi input formulir oleh admin
- Menambahkan fitur view file oleh admin
- Menambahkan fitur download excel oleh admin
- Menambahkan fitur notifikasi melalui email ketika mengubah status pengajuan

## Job Desc
<table>
    <thead>
        <tr>
            <th>Nama</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Imam Mulhaq Rosyadi</td>
            <td>Project Manager</td>
        </tr>
         <tr>
            <td>Bima Aulia</td>
            <td>Front-end Developer</td>
        </tr>
        <tr>
            <td>Faishal Wicaksono</td>
            <td>Back-end Developer</td>
        </tr>
       <tr>
            <td>Muhammad Naufal Abdillah</td>
            <td>Back-end Developer</td>
        </tr>
      <tr>
            <td>Fitra Andika</td>
            <td>UI Designer</td>
        </tr>
</tbody>
</table>

## Lampiran

### Trello
![image](https://user-images.githubusercontent.com/46121487/122527645-b69d1200-d045-11eb-8744-a1206c577f85.png)
