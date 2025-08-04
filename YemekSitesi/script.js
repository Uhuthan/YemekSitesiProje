// 1. Canlı Arama
const searchInput = document.querySelector('.search-container input');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    document.querySelectorAll('.menu-item').forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        item.style.display = itemName.includes(searchTerm) ? 'block' : 'none';
    });
});


// 2. Karanlık Mod
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = '🌙 Gece Modu';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.top = '10px';
darkModeBtn.style.right = '10px';
darkModeBtn.style.zIndex = 1000;
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// 3. Yukarı Çık Butonu
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '⬆️';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.display = 'none';
scrollTopBtn.style.zIndex = 1000;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




// 4. Sipariş Butonuna Tıklanınca Bildirim
document.querySelectorAll('.order-buttom').forEach(button => {
    button.addEventListener('click', () => {
        const toast = document.createElement('div');
        toast.textContent = 'Sipariş Sepete Eklendi!';
        toast.style.position = 'fixed';
        toast.style.bottom = '100px';
        toast.style.right = '20px';
        toast.style.background = 'green';
        toast.style.color = 'white';
        toast.style.padding = '10px';
        toast.style.borderRadius = '8px';
        toast.style.zIndex = 1000;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    });
});


// 5. Menü Filtreleme (örnek: sadece "çorba"ları göster)
const filterBtn = document.createElement('button');
filterBtn.textContent = 'Sadece Çorbalar';
filterBtn.style.position = 'fixed';
filterBtn.style.top = '50px';
filterBtn.style.right = '10px';
filterBtn.style.zIndex = 1000;
document.body.appendChild(filterBtn);

let filterOn = false;
filterBtn.addEventListener('click', () => {
    filterOn = !filterOn;
    document.querySelectorAll('.menu-item').forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        if (filterOn) {
            item.style.display = name.includes('çorba') ? 'block' : 'none';
        } else {
            item.style.display = 'block';
        }
    });
});



// 6. Slayt Geçişli Banner (Hero metni)
const hero = document.querySelector('.hero h1');
const heroMessages = ['Lezzetli Yemekler Kapında', 'Tıkla, Gelsin!', 'Acıktın mı? Biz Buradayız!'];
let heroIndex = 0;
setInterval(() => {
    heroIndex = (heroIndex + 1) % heroMessages.length;
    hero.textContent = heroMessages[heroIndex];
}, 3000);



// 7. Sayfa Giriş Animasyonu
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-item').forEach((item, index) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease';
            item.style.opacity = 1;
        }, index * 100);
    });
});

// 8. Sepete Eklenen Ürün Sayacı
let orderCount = 0;
const counter = document.createElement('div');
counter.textContent = '🛒 0 ürün';
counter.style.position = 'fixed';
counter.style.top = '90px';
counter.style.right = '10px';
counter.style.background = '#f90';
counter.style.padding = '8px';
counter.style.borderRadius = '6px';
counter.style.color = 'white';
counter.style.fontWeight = 'bold';
counter.style.zIndex = 1000;
document.body.appendChild(counter);

document.querySelectorAll('.order-buttom').forEach(button => {
    button.addEventListener('click', () => {
        orderCount++;
        counter.textContent = `🛒 ${orderCount} ürün`;
        
    });
});

// 9. Tema Rengi Değiştirici
const colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.style.position = 'fixed';
colorPicker.style.top = '130px';
colorPicker.style.right = '10px';
colorPicker.title = 'Tema Rengini Değiştir';
document.body.appendChild(colorPicker);

colorPicker.addEventListener('input', () => {
    document.documentElement.style.setProperty('--theme-color', colorPicker.value);
});

// 10. Kampanya Geri Sayım
const countdown = document.createElement('div');
countdown.style.position = 'fixed';
countdown.style.top = '170px';
countdown.style.right = '10px';
countdown.style.background = '#d00';
countdown.style.color = 'white';
countdown.style.padding = '6px';
countdown.style.borderRadius = '6px';
countdown.style.fontWeight = 'bold';
document.body.appendChild(countdown);

let seconds = 3600; // 1 saat kampanya
setInterval(() => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    countdown.textContent = `İndirim bitiyor: ${m}:${s < 10 ? '0' : ''}${s}`;
    if (seconds > 0) seconds--;
    countdown.style.top = '20px';
countdown.style.left = '20px';
countdown.style.right = '';
}, 1000);
