document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.animate-item');
    
    // Плавное появление элементов один за другим
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-up');
        }, 150 * (index + 1));
    });

    // Легкое движение фона за мышкой (параллакс)
    document.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.background-glow');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        glow.style.transform = `translate(calc(-50% + ${x * 30}px), calc(-50% + ${y * 30}px))`;
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.animate-item');
    
    // Постепенное появление
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('fade-up');
        }, 100 * (index + 1));
    });

    // Умный параллакс для фона (теперь он не будет мешать скроллу)
    document.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.background-glow');
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        
        glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
});
