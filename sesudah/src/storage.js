const STORAGE_KEY = 'catatan-kuliah';

export function muatCatatan() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function simpanCatatan(catatan) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(catatan));
}