import * as state from './state.js';
import { renderTampilan } from './ui.js';

let kataCari = '';

function perbaruiTampilan() {
  renderTampilan(state.semua(), kataCari);
}

// Event Handler: Form Submit
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const judulInput = document.getElementById('judul');
  const mkInput = document.getElementById('mk');
  const judul = judulInput.value.trim();

  if (judul === '') return;

  state.tambah(judul, mkInput.value);
  judulInput.value = '';
  perbaruiTampilan();
});

// Event Handler: Input Pencarian
document.getElementById('cari').addEventListener('input', function (e) {
  kataCari = e.target.value;
  perbaruiTampilan();
});

// Event Delegation untuk Tombol Kartu (Sematkan & Hapus)
function tanganiAksiKartu(e) {
  const tombol = e.target.closest('button[data-aksi]');
  if (!tombol) return;

  const id = Number(tombol.dataset.id);
  const aksi = tombol.dataset.aksi;

  if (aksi === 'semat') {
    state.alihSemat(id);
    perbaruiTampilan();
  } else if (aksi === 'hapus') {
    if (confirm('Hapus catatan ini?')) {
      state.hapus(id);
      perbaruiTampilan();
    }
  }
}

document.getElementById('sematan').addEventListener('click', tanganiAksiKartu);
document.getElementById('semua').addEventListener('click', tanganiAksiKartu);

// Inisialisasi awal
perbaruiTampilan();