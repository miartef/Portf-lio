document.addEventListener("mousemove", function(e) {
    const elements = document.querySelectorAll(".element");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    elements.forEach((el, index) => {
        // Multiplicadores diferentes para cada imagem criar profundidade
        const speed = (index + 1) * 20; 
        const xOffset = (0.5 - x) * speed;
        const yOffset = (0.5 - y) * speed;

        el.style.transform = `translate(${xOffset}px, ${yOffset}px) ${el.style.transform.includes('rotate') ? el.style.transform.split(') ')[1] || el.style.transform : ''}`;
    });
});