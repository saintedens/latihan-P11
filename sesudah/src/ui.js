export function buatKartuHTML(c, disematkanStatus) {
  const labelTombolSemat = disematkanStatus ? 'Lepas' : (c.disematkan ? 'Lepas' : 'Sematkan');
  const tgl = new Date(c.dibuat).toLocaleDateString('id-ID');
  
  return (
    '<div class="kartu">' +
      '<small>' + c.mk + '</small>' +
      '<h3>' + c.judul + '</h3>' +
      '<small>' + tgl + '</small>' +
      '<div class="aksi">' +
        '<button data-aksi="semat" data-id="' + c.id + '">' + labelTombolSemat + '</button>' +
        '<button data-aksi="hapus" data-id="' + c.id + '">Hapus</button>' +
      '</div>' +
    '</div>'
  );
}

export function renderTampilan(catatanSemua, kataCari = '') {
  const sematanEl = document.getElementById('sematan');
  const semuaEl = document.getElementById('semua');
  const infoEl = document.getElementById('info');

  const kataKunci = (kataCari || '').toLowerCase();
  const hasil = catatanSemua.filter((c) => c.judul.toLowerCase().includes(kataKunci));

  let htmlSematan = '';
  let htmlSemua = '';
  let jumlahSemat = 0;

  for (let j = 0; j < hasil.length; j++) {
    const c = hasil[j];
    if (c.disematkan) {
      jumlahSemat++;
      htmlSematan += buatKartuHTML(c, true);
    }
    htmlSemua += buatKartuHTML(c, false);
  }

  sematanEl.innerHTML = htmlSematan || '<p class="kosong">Belum ada catatan yang disematkan.</p>';
  semuaEl.innerHTML = htmlSemua || '<p class="kosong">Tidak ada catatan.</p>';
  infoEl.textContent = hasil.length + ' catatan, ' + jumlahSemat + ' disematkan';
}