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

    // ─── Live Menu Search Input (10,000 Customer Simulation) ──
    const menuSearch = document.getElementById('menuSearch');
    if (menuSearch) {
        menuSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            menuItems.forEach(item => {
                const title = item.querySelector('h4').textContent.toLowerCase();
                const desc = item.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || desc.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // ─── Waiter Bell Notification Trigger ─────────────────────
    const btnWaiter = document.getElementById('btnWaiter');
    if (btnWaiter) {
        btnWaiter.addEventListener('click', () => {
            const tableNum = prompt("Lütfen Masa Numarasını Giriniz (Örn: Masa 12):", "Masa 12");
            if (tableNum) {
                alert("🔔 " + tableNum + " için garson çağrısı iletildi! Ekibimiz birazdan yanınızda olacaktır.");
            }
        });
    }

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