document.addEventListener("DOMContentLoaded", function() {
    const arcText = document.getElementById('meu-portfolio');
    if (arcText) {
        new CircleType(arcText).radius(350);
    }

    const cardTitles = document.querySelectorAll('.arc-title');
    cardTitles.forEach(title => {
        new CircleType(title).radius(180);
    });

    // Lógica do Modal de Projetos
    const modal = document.getElementById('projectModal');
    const openBtns = document.querySelectorAll('.open-modal-btn');
    
    if (openBtns.length > 0) {
        // Abrir modal
        openBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = btn.getAttribute('data-modal') || 'projectModal';
                const targetModal = document.getElementById(modalId);
                if (targetModal) {
                    targetModal.classList.add('active');
                }
            });
        });

        // Fechar modal no X
        const closeBtns = document.querySelectorAll('.close-modal');
        closeBtns.forEach(cBtn => {
            cBtn.addEventListener('click', function() {
                const activeModal = cBtn.closest('.modal-overlay');
                if (activeModal) activeModal.classList.remove('active');
            });
        });

        // Fechar modal clicando fora da caixa
        const allModals = document.querySelectorAll('.modal-overlay');
        allModals.forEach(m => {
            m.addEventListener('click', function(e) {
                if (e.target === m) {
                    m.classList.remove('active');
                }
            });
        });
        
        // Lógica do Carrossel
        const nextBtns = document.querySelectorAll('.next-slide');
        const prevBtns = document.querySelectorAll('.prev-slide');
        
        function updateSlides(modalElement, direction) {
            const slides = modalElement.querySelectorAll('.carousel-slide');
            if(slides.length === 0) return;
            
            let currentIndex = 0;
            slides.forEach((slide, index) => {
                if(slide.classList.contains('active')) currentIndex = index;
            });
            
            slides[currentIndex].classList.remove('active');
            slides[currentIndex].style.display = 'none';
            
            let nextIndex = currentIndex + direction;
            if (nextIndex >= slides.length) nextIndex = 0;
            if (nextIndex < 0) nextIndex = slides.length - 1;
            
            slides[nextIndex].classList.add('active');
            slides[nextIndex].style.display = 'flex';
        }

        nextBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const currentModal = btn.closest('.modal-overlay');
                updateSlides(currentModal, 1);
            });
        });

        prevBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const currentModal = btn.closest('.modal-overlay');
                updateSlides(currentModal, -1);
            });
        });
        
    }

    // Image Slider logic (Galerias Gammy e Amor)
    const sliderBoxes = document.querySelectorAll('.image-slider-box');
    
    sliderBoxes.forEach(box => {
        const slides = box.querySelectorAll('.slider-slides img');
        const nextBtn = box.querySelector('.next-btn');
        const prevBtn = box.querySelector('.prev-btn');
        let currentIdx = 0;

        if(slides.length > 0 && nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                slides[currentIdx].classList.remove('active');
                currentIdx = (currentIdx + 1) % slides.length;
                slides[currentIdx].classList.add('active');
            });

            prevBtn.addEventListener('click', () => {
                slides[currentIdx].classList.remove('active');
                currentIdx = (currentIdx - 1 + slides.length) % slides.length;
                slides[currentIdx].classList.add('active');
            });
        }
    });
});