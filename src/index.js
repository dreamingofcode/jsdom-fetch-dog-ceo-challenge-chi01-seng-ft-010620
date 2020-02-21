console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded",function(){
    dogFecther()
    fetchDogBreed()
    dropDownListener()
})

/////// DROP DOWN LISTENER ////////
function dropDownListener() {
    const dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener("change", function(){
        const letterSelected = event.target.value 
        const breedListItems = document.getElementById('dog-breeds').children
       
        for ( i = 0; i < breedListItems.length; i++ ) {
              breedListItems[i].style.display = "block";
        }
        for ( i = 0; i < breedListItems.length; i++ ) {
            
            if (letterSelected === "all"){
                breedListItems[i].style.display = "block";
            }
            else if (breedListItems[i].innerHTML[0] != letterSelected){
               breedListItems[i].style.display = "none";
            } 
            
        }
    })
}

        ///////// BREED LIST //////////
function fetchDogBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
  //.then(breed => console.log(breed.message))
    .then(breedData => dogBreeds(breedData["message"]))
}

function dogBreeds(breeds){
    const breedList = document.getElementById('dog-breeds')
    let breedArray = Object.keys(breeds)
    breedArray.forEach (breedType => {
    const breedListItem = document.createElement("li")
    breedListItem.innerHTML = `${breedType}`
    breedList.append(breedListItem)

   //////////////////// Breed Click ///////////////// 
    breedListItem.addEventListener('click', function(event){
    
   if (event.target.style.color === "red" ){
        event.target.style.color ="black";}
        else 
        {
            event.target.style.color = "red"
        }

})

    })    
}

    ////////////// Dog Image /////////////////
function dogFecther(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    //.then(data => console.log(data["message"]))
    .then(data => dogImages(data["message"]))
}

function dogImages(json){
    const imageContainer = document.getElementById("dog-image-container")
    json.forEach(image => {
         const img = document.createElement('img')
         img.src =`${image}`
        imageContainer.append(img)
        
    } )
}
