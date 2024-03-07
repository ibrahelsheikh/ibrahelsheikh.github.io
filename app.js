const wrapper = document.querySelector('.sliderWrapper');

const menuItems = document.querySelectorAll('.menuItem');

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        const selectedItem = document.querySelector('.selectedItem');
        selectedItem.classList.remove('selectedItem');
        menuItem.classList.add('selectedItem');
    });
});