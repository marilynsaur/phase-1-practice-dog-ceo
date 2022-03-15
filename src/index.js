console.log('%c HI', 'color: firebrick')


function allDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(data => {
            console.log(data.message)

            data.message.forEach(imgUrl => renderOneDog(imgUrl))
        })

}
allDogs();


function renderOneDog(imageUrl) {
    container = document.querySelector("#dog-image-container");
    let dog = document.createElement('li');
    dog.className = 'dog'
    dog.innerHTML = `
    <img src = "${imageUrl}">
    `
    container.appendChild(dog);
    console.log(dog)
}





const breedUrl = 'https://dog.ceo/api/breeds/list/all'
containerBreed = document.querySelector("#dog-breeds");


function dogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(breeds => {
            let everyDogs = Object.keys(breeds.message);
            console.log(everyDogs)
            everyDogs.forEach(breed => renderBreedDog(breed))
           

           
          
        })


}
dogBreeds();


function renderBreedDog(breed) {
    
       
    let li = document.createElement('li');
        li.innerHTML = breed
       containerBreed.appendChild(li);
      


    
}

function fontColor(breed){

document.getElementById('li');

li.addEventListener('click', function onClick() {
li.forEach(breed => breed.add("red"));
  console.log('everyDogs');
});

}
fontColor(breed);