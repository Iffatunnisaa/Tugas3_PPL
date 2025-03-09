# Tugas3_PPL
# Kelompok 7

# Deskripsi Program

Program ini merupakan aplikasi berbasis Node.js yang berfungsi sebagai sistem manajemen database karakter anime sederhana menggunakan API berbasis RESTful. Program ini menyimpan data dalam file JSON (`characters.json`) dan memungkinkan pengguna untuk melakukan beberapa operasi utama, yaitu:

1. Melihat daftar karakter anime  
2. Menambahkan karakter baru  
3. Melihat detail karakter berdasarkan ID  
4. Memperbarui informasi karakter  
5. Menghapus karakter dari database  
6. Keluar dari server  

Aplikasi ini memungkinkan pengguna untuk melakukan berbagai operasi seperti melihat daftar karakter yang tersimpan dalam database JSON, menambahkan karakter baru dengan informasi berupa nama, anime asal, dan umur, serta melihat detail karakter berdasarkan ID. Selain itu, pengguna juga dapat memperbarui informasi karakter yang telah ada dengan mengganti nama, anime asal, atau umurnya, serta menghapus karakter dari database jika sudah tidak diperlukan.  

Data karakter disimpan dalam file `characters.json`, dan program menggunakan `fs` (File System) untuk membaca serta menulis data ke dalam file tersebut. Antarmuka berbasis API dibuat menggunakan **Express.js**, yang memungkinkan pengguna untuk berinteraksi dengan program melalui request HTTP. Dengan fitur **CRUD** (Create, Read, Update, Delete), program ini memberikan kemudahan dalam mengelola database karakter secara sederhana dan interaktif.

---

## Cara Kerja Program

1. Server dijalankan menggunakan **Node.js** dengan menjalankan file `server.js`.  
2. Pengguna mengakses endpoint API melalui **Postman, cURL, atau browser**.  
3. Program akan mengekseskusi fungsi sesuai dengan request pengguna.  
4. Jika server dihentikan, semua perubahan pada data tetap tersimpan dalam `characters.json`.  

---

## Instalasi & Menjalankan Server  

### 1️⃣ **Instalasi Dependencies**  
Pastikan **Node.js** telah terinstal, lalu jalankan:  
```bash
npm install
