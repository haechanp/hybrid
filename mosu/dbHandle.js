// dbHandle.js

// IndexedDB 초기화
let db;

function openDB() {
    const request = indexedDB.open('MosBurgerDB', 1);

    request.onupgradeneeded = function (event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains('menu')) {
            const menuStore = db.createObjectStore('menu', { keyPath: 'id', autoIncrement: true });
            menuStore.createIndex('name', 'name', { unique: true });
        }
        if (!db.objectStoreNames.contains('orders')) {
            db.createObjectStore('orders', { keyPath: 'id', autoIncrement: true });
        }
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log('Database initialized');
    };

    request.onerror = function (event) {
        console.error('Database error:', event.target.errorCode);
    };
}

function addOrder() {
    const burgerName = document.getElementById('burgerName').value;
    const quantity = document.getElementById('quantity').value;
    const extraOptions = document.getElementById('extraOptions').value;

    const transaction = db.transaction(['orders'], 'readwrite');
    const store = transaction.objectStore('orders');

    const order = { burgerName, quantity: parseInt(quantity, 10), extraOptions };
    store.add(order);

    transaction.oncomplete = function () {
        alert('Order added successfully!');
    };

    transaction.onerror = function (event) {
        console.error('Error adding order:', event.target.error);
    };
}

function loadMenu() {
    const transaction = db.transaction(['menu'], 'readonly');
    const store = transaction.objectStore('menu');
    const request = store.getAll();

    request.onsuccess = function () {
        const menuList = document.getElementById('menuList');
        menuList.innerHTML = '';
        request.result.forEach(menuItem => {
            const li = document.createElement('li');
            li.textContent = `${menuItem.name}: ${menuItem.price}원`;
            menuList.appendChild(li);
        });
    };

    request.onerror = function (event) {
        console.error('Error loading menu:', event.target.error);
    };
}

function clearOrderForm() {
    document.getElementById('burgerName').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('extraOptions').value = '';
}