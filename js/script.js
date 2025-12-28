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

// Logic State
let currentState = 1; 
const maxState = 4;

// Fungsi Update Tombol (Biar tombol hilang kalau gak perlu)
function updateButtons() {
    if (currentState === 1) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    } else if (currentState === maxState) {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden'); // Sembunyikan Next di akhir
    } else {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
}

// BUKA PERTAMA
btnOpen.addEventListener('click', () => {
    bgMusic.play().catch(e => console.log(e));
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.classList.add('hidden');
        bookWrapper.classList.remove('hidden');
        
        // Animasi fade in
        setTimeout(() => {
            bookWrapper.style.opacity = '1';
        }, 50);
        
        updateButtons();
    }, 500);
});

// LOGIC NAVIGASI
function goNext() {
    if (currentState < maxState) {
        switch (currentState) {
            case 1:
                book.classList.add('book-open');
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
               // book.classList.remove('book-open'); // Tutup di akhir
                break;
        }
        currentState++;
        updateButtons();
    }
}

function goPrev() {
    if (currentState > 1) {
        switch (currentState) {
            case 2:
                book.classList.remove('book-open'); // Tutup cover
                p1.classList.remove('flipped');
                p1.style.zIndex = 3;
                break;
            case 3:
                p2.classList.remove('flipped');
                p2.style.zIndex = 2;
                break;
            case 4:
                book.classList.add('book-open'); // Buka lagi
                p3.classList.remove('flipped');
                p3.style.zIndex = 1;
                break;
        }
        currentState--;
        updateButtons();
    }
}

nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);

// WhatsApp
function kirimWA() {
    const no = "6281234567890"; // GANTI NOMOR WA
    const text = "Hi! Makasih ya kadonya ❤️";
    window.open(`https://wa.me/${no}?text=${encodeURIComponent(text)}`, '_blank');
}