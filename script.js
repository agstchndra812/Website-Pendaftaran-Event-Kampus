const form = document.getElementById("formPendaftaran");
const pesan = document.getElementById("pesan");
const listPeserta = document.getElementById("listPeserta");
const jumlahPesertaEl = document.getElementById("jumlahPeserta");

let jumlahPeserta = 0;
const kuotaMaks = 50;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const hp = document.getElementById("hp").value.trim();
  const kategori = document.getElementById("kategori").value;

  // Cek kuota
  if (jumlahPeserta >= kuotaMaks) {
    pesan.textContent = "Pendaftaran ditutup, kuota sudah penuh";
    pesan.style.color = "red";
    return;
  }

  // Validasi
  if (!nama || !email || !hp || !kategori) {
    pesan.textContent = "Semua input wajib diisi!";
    pesan.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    pesan.textContent = "Email harus mengandung @";
    pesan.style.color = "red";
    return;
  }

  if (isNaN(hp)) {
    pesan.textContent = "Nomor HP hanya boleh angka";
    pesan.style.color = "red";
    return;
  }

  // === MANIPULASI DOM (tanpa reload) ===
  const li = document.createElement("li");
  li.textContent = `${nama} - ${kategori}`;
  listPeserta.appendChild(li);

  jumlahPeserta++;
  jumlahPesertaEl.textContent = jumlahPeserta;

  pesan.textContent = "Pendaftaran berhasil!";
  pesan.style.color = "green";

  form.reset();
});
