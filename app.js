document.addEventListener('DOMContentLoaded', () => {
    // ─── Sticky Navbar Blur Scroll ────────────────────────────
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.padding = '12px 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '16px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // ─── Mobile Drawer ────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');

    if (hamburger && mobileDrawer) {
        hamburger.addEventListener('click', () => mobileDrawer.classList.add('active'));
        if (drawerClose) drawerClose.addEventListener('click', () => mobileDrawer.classList.remove('active'));
        
        mobileDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileDrawer.classList.remove('active'));
        });
    }

    // ─── Interactive Menu Tab Filters ────────────────────────
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const cat = btn.getAttribute('data-tab');
            menuCards.forEach(card => {
                if (cat === 'all' || card.getAttribute('data-category') === cat) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ─── Online Reservation Form WhatsApp Trigger ─────────────
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