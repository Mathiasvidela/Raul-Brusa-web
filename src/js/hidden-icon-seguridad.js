//iconos en las cards blancas
let cards = document.querySelectorAll('.card-h');

cards.forEach(card => {
    let iconWhite = card.querySelector('.icon-white');
    let iconRed = card.querySelector('.icon-red');

    card.addEventListener('mouseover', () => {
        iconWhite.classList.remove('hidden');
        iconWhite.classList.add('block');

        iconRed.classList.remove('block');
        iconRed.classList.add('hidden');
    });

    card.addEventListener('mouseout', () => {
        iconWhite.classList.remove('block');
        iconWhite.classList.add('hidden');

        iconRed.classList.add('block');
        iconRed.classList.remove('hidden');
    });
});


//iconos en las cards rojas
let cardsRed = document.querySelectorAll('.card-h-red');

cardsRed.forEach(card => {
    let iconWhite = card.querySelector('.icon-white');
    let iconRed = card.querySelector('.icon-red');

    card.addEventListener('mouseover', () => {
        iconWhite.classList.remove('block');
        iconWhite.classList.add('hidden');

        iconRed.classList.remove('hidden');
        iconRed.classList.add('block');
    });

    card.addEventListener('mouseout', () => {
        iconWhite.classList.remove('hidden');
        iconWhite.classList.add('block');

        iconRed.classList.add('hidden');
        iconRed.classList.remove('block');
    });
});
