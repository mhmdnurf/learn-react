# Menggunakan node versi 14 sebagai dasar
FROM node:18

# Mengatur direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json (atau yarn.lock jika menggunakan Yarn) ke dalam container
COPY package.json package-lock.json ./

# Menginstal dependensi proyek
RUN npm install

# Menyalin seluruh konten proyek ke dalam container
COPY . .

# Membangun proyek menggunakan Vite
RUN npm run build

# Menginstal server statis "http-server" sebagai dependensi global
RUN npm install -g http-server

# Menjalankan server statis menggunakan http-server saat container berjalan
CMD ["http-server", "dist", "-p", "3000"]
