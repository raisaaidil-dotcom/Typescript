let nama: string = "Budi";
let umur: number = 17;
let aktif: boolean = true;
console.log(nama, umur, aktif);

function login(username: string, password: string):
boolean {
return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));

interface User {
  id: number;
  nama: string;
  role: string;
}

const user: User = {
  id: 1,
  nama: "Sinta",
  role: "admin"
};

console.log(user);

interface Buku {
  id: number;
  judul: string;
  penulis?: string;
}

interface Siswa {
  id: number;
  nama: string;
  kelas: string;
}

const siswa1: Siswa = {
  id: 1,
  nama: "Andi",
  kelas: "XI RPL 1"
};

console.log(siswa1);

function hitungUmur(tahunLahir: number): number {
  const tahunSekarang = 2025;
  return tahunSekarang - tahunLahir;
}

console.log(hitungUmur(2008));