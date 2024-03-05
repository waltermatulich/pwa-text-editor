
const openRequest = indexedDB.open("text-editor-db", 1);

openRequest.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore("text", { keyPath: "id", autoIncrement:true });
};

openRequest.onerror = function(event) {
  console.error("IndexedDB error:", event.target.error);
};

openRequest.onsuccess = function(event) {
  const db = event.target.result;
  console.log("IndexedDB database opened successfully");
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
