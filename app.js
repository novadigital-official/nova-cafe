document.addEventListener('DOMContentLoaded', () => {
    // ─── Sticky Category Filter for QR Menu ───────────────────
    const catBtns = document.querySelectorAll('.cat-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.getAttribute('data-cat');
            menuItems.forEach(item => {
                if (cat === 'all' || item.getAttribute('data-cat') === cat) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ─── Online Masa Rezervasyonu WhatsApp Entegrasyonu ────────
    const resForm = document.getElementById('resForm');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('rName').value.trim();
            const phone = document.getElementById('rPhone').value.trim();
            const date = document.getElementById('rDate').value;
            const time = document.getElementById('rTime').value;
            const guests = document.getElementById('rGuests').value;

            let msg = `Merhaba Nova Cafe & Bistro, online masa rezervasyon talebimi iletmek istiyorum:

`;
            msg += `👤 Ad Soyad: ${name}
`;
            msg += `📞 Telefon: ${phone}
`;
            msg += `📅 Tarih / Saat: ${date} - ${time}
`;
            msg += `👥 Kişi Sayısı: ${guests}`;

            const wpUrl = `https://wa.me/905070871789?text=${encodeURIComponent(msg)}`;
            window.open(wpUrl, '_blank', 'noopener,noreferrer');
        });
    }
});