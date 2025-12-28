const btnOpen = document.getElementById('btnOpen');
const intro = document.getElementById('intro');
const bookWrapper = document.getElementById('bookWrapper');
const book = document.getElementById('book');
const bgMusic = document.getElementById('bgMusic');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Pages
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

let currentState = 1;
const maxState = 4;

// BUKA BUKU
btnOpen.addEventListener('click', () => {
    bgMusic.play().catch(e => console.log(e));
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.classList.add('hidden');
        bookWrapper.classList.remove('hidden');
        
        // Mulai dengan posisi tertutup (Cover di tengah)
        book.classList.add('book-close');
        
        setTimeout(() => {
            bookWrapper.style.opacity = '1';
        }, 100);
    }, 500);
});

// LOGIKA POSISI
function openBookLogic() {
    book.classList.remove('book-close');
    book.classList.add('book-open');
}

function closeBookLogic() {
    book.classList.remove('book-open');
    book.classList.add('book-close');
}

// LOGIKA NAVIGASI
function goNext() {
    if (currentState < maxState) {
        switch (currentState) {
            case 1:
                openBookLogic();
                p1.classList.add('flipped');
                p1.style.zIndex = 1;
                break;
            case 2:
                p2.classList.add('flipped');
                p2.style.zIndex = 2;
                break;
            case 3:
                p3.classList.add('flipped');
                p3.style.zIndex = 3;
                // Saat halaman terakhir, tetap biarkan terbuka (jangan geser lagi)
                // agar tombol WA mudah ditekan
                break;
        }
        currentState++;
    }
}

function goPrev() {
    if (currentState > 1) {
        switch (currentState) {
            case 2:
                closeBookLogic(); // Balik ke mode cover tengah
                p1.classList.remove('flipped');
                p1.style.zIndex = 3;
                break;
            case 3:
                p2.classList.remove('flipped');
                p2.style.zIndex = 2;
                break;
            case 4:
                p3.classList.remove('flipped');
                p3.style.zIndex = 1;
                break;
        }
        currentState--;
    }
}

nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);

function kirimWA() {
    const no = "6281234567890"; // GANTI NOMOR WA
    const text = "Websitenya keren! Makasih ya";
    window.open(`https://wa.me/${no}?text=${encodeURIComponent(text)}`, '_blank');
}