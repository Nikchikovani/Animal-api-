const dogBtn = document.querySelector('.dog-btn');
const dogDiv = document.querySelector('.dog-image-div');

const foxBtn = document.querySelector('.fox-btn');
const foxDiv = document.querySelector('.fox-image-div');

dogBtn.addEventListener('click', getRandomDog)
foxBtn.addEventListener('click', getRandomFox)


function getRandomDog() {
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            dogDiv.innerHTML = `<img src="${data.url}" class="dog-image" />`
        })
}

function getRandomFox() {
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            foxDiv.innerHTML =  `<img src="${data.image}" class="fox-image" />`
        })
}









// function getRandomFox() {
//     fetch("https://randomfox.ca/floof/")
//         .then(res => res.json())
//         .then(data => {
//             foxDiv.innerHTML = `<img src="${data.url}" class="image" />`
//         })
// }

