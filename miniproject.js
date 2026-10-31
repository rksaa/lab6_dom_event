// Memilih elemen DOM
const formWorkshop = document.getElementById("formWorkshop");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const selectSesi = document.getElementById("sesi");
const jumlahKarakterNama = document.getElementById("jumlahKarakterNama");
const btnReset = document.getElementById("btnReset");
const pesanFeedback = document.getElementById("pesanFeedback");


// Fitur 1: Penghitung Karakter Langsung (Event 'input')
inputNama.addEventListener("input", function () {
  jumlahKarakterNama.textContent = inputNama.value.length;
});

// Fitur 2: Validasi Form & Pesan Ringkasan Sukses (Event 'submit')
formWorkshop.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const sesi = selectSesi.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset kelas tampilan pesan
  pesanFeedback.className = "pesan-box";

  // Pemeriksaan Validasi Input
  if (nama === "") {
    tampilkanPesan("Nama lengkap wajib diisi.", "error");
  } else if (!polaEmail.test(email)) {
    tampilkanPesan("Masukkan alamat email yang valid.", "error");
  } else if (sesi === "") {
    tampilkanPesan("Silakan pilih salah satu sesi workshop.", "error");
  } else {
    // Tampilan Ringkasan Sukses
    tampilkanPesan(
      `<strong>Pendaftaran Berhasil!</strong><br>` +
      `Nama: ${nama}<br>` +
      `Email: ${email}<br>` +
      `Sesi: ${sesi}`,
      "sukses"
    );
  }
});

// Fitur 3: Tombol Reset Form (Event 'click')
btnReset.addEventListener("click", function () {
  formWorkshop.reset();
  jumlahKarakterNama.textContent = "0";
  pesanFeedback.className = "pesan-box";
  pesanFeedback.style.display = "none";
});

// Fungsi Pembantu Menampilkan Pesan
function tampilkanPesan(teks, tipe) {
  pesanFeedback.innerHTML = teks;
  pesanFeedback.classList.add(tipe);
}


// Panggil elemen dropdown dan paragraf penampung

const pesanSesi = document.getElementById("pesanSesi");

// Event 'change' saat pilihan dropdown berubah (Eksperimen Mandiri No. 3)
selectSesi.addEventListener("change", function () {
  if (selectSesi.value !== "") {
    pesanSesi.innerHTML = `Sesi dipilih: <b>${selectSesi.value}</b>`;
  } else {
    pesanSesi.innerHTML = "Sesi dipilih: <i>Belum ada sesi dipilih</i>";
  }
});

// Panggil elemen tombol dan paragraf
const btnToggleParagraf = document.getElementById("btnToggleParagraf");
const paragrafInfo = document.getElementById("paragrafInfo");

// Event click untuk toggle class CSS (Eksperimen Mandiri No. 4)
btnToggleParagraf.addEventListener("click", function () {
  paragrafInfo.classList.toggle("sembunyi");

  // Mengubah teks tombol secara dinamis
  if (paragrafInfo.classList.contains("sembunyi")) {
    btnToggleParagraf.textContent = "Tampilkan Informasi";
  } else {
    btnToggleParagraf.textContent = "Sembunyikan Informasi";
  }
});