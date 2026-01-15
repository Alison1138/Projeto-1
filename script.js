document.addEventListener('DOMContentLoaded', () => {
    const seriesGrid = document.getElementById('seriesGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (seriesGrid && prevBtn && nextBtn) {
        // Define a distância de rolagem (largura de um card + gap)
        const scrollAmount = seriesGrid.clientWidth * 0.8; 

        nextBtn.addEventListener('click', () => {
            seriesGrid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            seriesGrid.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Opcional: Esconder botões se não houver conteúdo para rolar
        const toggleButtons = () => {
            prevBtn.style.display = seriesGrid.scrollLeft <= 0 ? 'none' : 'flex';
            
            const maxScroll = seriesGrid.scrollWidth - seriesGrid.clientWidth;
            nextBtn.style.display = seriesGrid.scrollLeft >= maxScroll ? 'none' : 'flex';
        };

        seriesGrid.addEventListener('scroll', toggleButtons);
        window.addEventListener('resize', toggleButtons);
        
        // Inicializa o estado dos botões
        setTimeout(toggleButtons, 100);
    }
});