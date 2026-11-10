const typeButtons = document.querySelectorAll('.type-btn');
const galleryGroups = document.querySelectorAll('.gallery-group');

typeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Remove 'active' class from all buttons and galleries
        typeButtons.forEach(btn => btn.classList.remove('active'));
        galleryGroups.forEach(group => group.classList.remove('active'));

        // 2. Add 'active' to the clicked button
        button.classList.add('active');

        // 3. Find and display the matching photo gallery group
        const categoryId = button.getAttribute('data-category');
        const targetGallery = document.getElementById(categoryId);
        if (targetGallery) {
            targetGallery.classList.add('active');
        }
    });
});