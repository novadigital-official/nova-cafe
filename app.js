document.addEventListener('DOMContentLoaded', () => {
    // Rezervasyon Formu WhatsApp Entegrasyonu
    const resForm = document.getElementById('resForm');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('resName').value.trim();
            const phone = document.getElementById('resPhone').value.trim();
            const date = document.getElementById('resDate').value;
            const time = document.getElementById('resTime').value;
            const guests = document.getElementById('resGuests').value;

            let msg = `Merhaba Nova Cafe & Restoran, online masa rezervasyonu talebim var:

`;
            msg += `Ad Soyad: ${name}
`;
            msg += `Telefon: ${phone}
`;
            msg += `Tarih / Saat: ${date} - ${time}
`;
            msg += `Kişi Sayısı: ${guests}`;

            const wpUrl = `https://wa.me/905070871789?text=${encodeURIComponent(msg)}`;
            window.open(wpUrl, '_blank');
        });
    }

    // Menü Tab Geçişleri
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCards = document.querySelectorAll('.menu-item-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const cat = btn.getAttribute('data-tab');
            menuCards.forEach(card => {
                if (cat === 'all' || card.getAttribute('data-category') === cat) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});