// Imagens 
const imageChartCoffeOne = document.getElementById('imageChartCoffeOne');
const imageChartCoffeTwo = document.getElementById('imageChartCoffeTwo');
const imageChartCoffeThree = document.getElementById('imageChartCoffeThree');
const imageChartCoffeFour= document.getElementById('imageChartCoffeFour');

// Descrições
const descriptionChartCoffeOne = document.getElementById('descriptionCoffeOne');
const descriptionChartCoffeTwo = document.getElementById('descriptionCoffeTwo');
const descriptionChartCoffeThree = document.getElementById('descriptionCoffeThree');
const descriptionChartCoffeFour = document.getElementById('descriptionCoffeFour');


imageChartCoffeOne.addEventListener('click', () => {  
    imageChartCoffeOne.classList.add('hidden');
    descriptionChartCoffeOne.classList.remove('hidden');
    descriptionChartCoffeOne.classList.add('active');
    imageChartCoffeOne.classList.add('invisible');
});

imageChartCoffeTwo.addEventListener('click', () => {  
    imageChartCoffeTwo.classList.add('hidden');
    descriptionChartCoffeTwo.classList.remove('hidden');
    descriptionChartCoffeTwo.classList.add('active');
});

imageChartCoffeThree.addEventListener('click', () => {  
    imageChartCoffeThree.classList.add('hidden');
    descriptionChartCoffeThree.classList.remove('hidden');
    descriptionChartCoffeThree.classList.add('active');
});

imageChartCoffeFour.addEventListener('click', () => {  
    imageChartCoffeFour.classList.add('hidden');
    descriptionChartCoffeFour.classList.remove('hidden');
    descriptionChartCoffeFour.classList.add('active');
});


// Contrário

descriptionChartCoffeOne.addEventListener('click', () => {  
    imageChartCoffeOne.classList.remove('hidden');
    imageChartCoffeOne.classList.remove('invisible');
    imageChartCoffeOne.classList.add('active');
    descriptionChartCoffeOne.classList.add('hidden');
    descriptionChartCoffeOne.classList.remove('active');
});

imageChartCoffeTwo.addEventListener('click', () => {  
    imageChartCoffeTwo.classList.remove('hidden');
    descriptionChartCoffeTwo.classList.add('hidden');
    descriptionChartCoffeTwo.classList.remove('active');
});

imageChartCoffeThree.addEventListener('click', () => {  
    imageChartCoffeThree.classList.remove('hidden');
    descriptionChartCoffeThree.classList.add('hidden');
    descriptionChartCoffeThree.classList.remove('active');
});

imageChartCoffeFour.addEventListener('click', () => {  
    imageChartCoffeFour.classList.remove('hidden');
    descriptionChartCoffeFour.classList.add('hidden');
    descriptionChartCoffeFour.classList.remove('active');
});