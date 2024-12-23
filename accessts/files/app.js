function realPageAnimation(){
    gsap.to(".slide" , {
        scrollTrigger : {
            trigger : ".Hero",
            start : "top top",
            end : "bottom bottom",
            scrub : 1,
        },
        xPercent : -100,
        ease : Power4,
    
    })
}

let searchData = [
    {name : "book" , image : "https://i.pinimg.com/736x/97/f6/67/97f66752f30be411e48746c3bed73954.jpg"},
    {name : "banana" , image : "https://i.pinimg.com/736x/b2/d6/e2/b2d6e26cea479b5d4cdd209ac8f2fead.jpg"},
    {name : "batman" , image : "https://i.pinimg.com/736x/bf/4e/ad/bf4ead0af64101c0bedeb15798a3c98f.jpg"},
    {name : "bed" , image : "https://i.pinimg.com/736x/04/36/c1/0436c1c12f8c8133cf12044dd8f9182f.jpg"},
    {name : "bat & ball" , image : "https://i.pinimg.com/736x/84/01/a3/8401a35e4c777c6852c9ecb590bd476a.jpg"},
    {name : "butterfly" , image : "https://i.pinimg.com/736x/09/6d/37/096d370c413e7cc60f95b5238f907ff5.jpg"},
    {name : "baby" , image : "https://i.pinimg.com/736x/10/ed/53/10ed53ce7599b7bff6ab7a066439d15c.jpg"},
    {name : "birthday celebration ideas" , image : "https://i.pinimg.com/736x/b9/37/c4/b937c45b42cfbbf2374f650224b8ede9.jpg"},
    {name : "balloon" , image : "https://i.pinimg.com/736x/be/b3/96/beb39627a2dccf58b3f9734da88e84d1.jpg"},
    {name : "birthday cake" , image : "https://i.pinimg.com/736x/d9/b4/b9/d9b4b90373e5232f5403bb5e7e0f8ef8.jpg"},
    {name : "barbie doll" , image : "https://i.pinimg.com/736x/e7/51/44/e751441677e1e01e04b3557a4f589313.jpg"},
    {name : "barbie cake" , image : "https://i.pinimg.com/736x/98/22/2c/98222cd2fe3ab59aab7275d7050cf353.jpg"},
    {name : "banana cake" , image : "https://i.pinimg.com/736x/38/3e/55/383e55c78253577ab6ee37e07574ee89.jpg"},
    {name : "bag for females" , image : "https://i.pinimg.com/736x/64/7b/e4/647be4e4839ab74d36c0f333bd0a7baf.jpg"},
    {name : "bag for males" , image : "https://i.pinimg.com/736x/05/70/38/05703807c1843c51a481227fe0089cee.jpg"},
    {name : "school bag for girls" , image : "https://i.pinimg.com/736x/e5/5d/e6/e55de6b4d3a200cbd27f792d11cd716c.jpg"},
    {name : "school bag for boys" , image : "https://i.pinimg.com/736x/50/ea/f9/50eaf9b7712a172ddfd0342bf13692b5.jpg"},
    {name : "stars background" , image : "https://i.pinimg.com/736x/76/ee/04/76ee0477c076b7908e5fc0e445ff2063.jpg"},
    {name : "beautifull background" , image : "https://i.pinimg.com/736x/a4/60/82/a460829df0f187c9180240ce93a48c98.jpg"},
    {name : "bus" , image : "https://i.pinimg.com/736x/10/d3/0c/10d30ca483851d368c49a75fce6d137b.jpg"},
    {name : "cloud" , image : "https://i.pinimg.com/736x/c7/cf/81/c7cf81081b994e2137fbef9e00c96917.jpg"},
    {name : "cloud background" , image : "https://i.pinimg.com/736x/0f/ed/41/0fed41e24fcd8f15f59fb53941eacae0.jpg"},
    {name : "cat" , image : "https://i.pinimg.com/736x/82/8a/99/828a996ca42898cd60a224155ff2eea3.jpg"},
    {name : "cycle" , image : "https://i.pinimg.com/736x/1b/72/77/1b7277ebce1ef538ad8f04401ce70c3e.jpg"},
    {name : "cherry" , image : "https://i.pinimg.com/736x/d6/b8/85/d6b8859894470e7b7c0e854f1dba7283.jpg"},
    {name : "apple" , image : "https://i.pinimg.com/736x/3f/a2/87/3fa287c717ff7a7102e6d872c68b5bda.jpg"},
    {name : "ant" , image : "https://i.pinimg.com/736x/72/2a/53/722a535b844dac56d764b726049439a0.jpg"},
    {name : "ax" , image : "https://i.pinimg.com/736x/0f/e4/63/0fe46351f5b8faee3003ee02c3afb6b4.jpg"},
    {name : "arrow" , image : "https://i.pinimg.com/736x/ca/57/7c/ca577c93beab0870accbaf678f063de0.jpg"},
    {name : "aeroplane" , image : "https://i.pinimg.com/736x/18/71/56/187156c36da34395af755a56fc4f0c9e.jpg"},
    {name : "ball" , image : "https://i.pinimg.com/736x/56/71/32/567132eacdcce7c19ae8646fbe142ff9.jpg"},
    {name : "car" , image : "https://i.pinimg.com/736x/ad/a1/c9/ada1c992568e928a7eaf8cb543683356.jpg"},
    {name : "cup" , image : "https://i.pinimg.com/736x/5b/ac/02/5bac02a523df792c7e4e2fa6be49c354.jpg"},
    {name : "ledies coat" , image : "https://i.pinimg.com/736x/3d/93/d4/3d93d4197b565334f298a29853614a8d.jpg"},
    {name : "gents coat" , image : "https://i.pinimg.com/736x/72/2a/3b/722a3bceafd0204c867e4d0a81c55d8e.jpg"},
    {name : "chilli" , image : "https://i.pinimg.com/736x/b4/7a/4f/b47a4f4ec7df4f280a4d193a62198b09.jpg"},
    {name : "cheese" , image : "https://i.pinimg.com/736x/f3/a2/de/f3a2de5199630e6155176e5aec9fc3d8.jpg"},
    {name : "Christmas" , image : "https://i.pinimg.com/736x/15/ba/7b/15ba7b5adc9a3f7eb3fcb5b243fb483e.jpg"},
    {name : "christmas tree" , image : "https://i.pinimg.com/736x/e6/c1/fd/e6c1fd20ad3ff81a73b55b029e42f115.jpg"},
    {name : "chritmas decor" , image : "https://i.pinimg.com/736x/4e/20/c5/4e20c50c46ac4540f0788854885786ee.jpg"},
    {name : "christmas wallpaper" , image : "https://i.pinimg.com/736x/53/d4/e7/53d4e70fb4695b2ddefe6e457515465f.jpg"},
    {name : "christmas background" , image : "https://i.pinimg.com/736x/ea/92/78/ea9278d87691fe2b1ddb6531eedfbcb5.jpg"},
    {name : "birthday wishes for children" , image : "https://i.pinimg.com/736x/7c/9a/35/7c9a357ec31b0aa5e81564c8af49df64.jpg"},
    {name : "birthday wishes for favourite person" , image : "https://i.pinimg.com/736x/07/37/0b/07370be869b7c579a5b4a8d3a54539d4.jpg"},
    {name : "birthday wishes for mama" , image : "https://i.pinimg.com/736x/9c/84/70/9c847031ee3db73d787b18583de8659a.jpg"},
    {name : "birthday wishes for baba" , image : "https://i.pinimg.com/736x/c6/41/95/c64195ba4ae505c02addaa5a970f8f62.jpg"},
    {name : "chairs" , image : "https://i.pinimg.com/736x/06/b5/5b/06b55b1845622ee92b32ed4622982558.jpg"},
    {name : "chair table" , image : "https://i.pinimg.com/736x/d4/83/2b/d4832b9522f828e61fd28b29cf0fb3ac.jpg"},
    {name : "chips" , image : "https://i.pinimg.com/736x/31/37/a8/3137a8d494ffe5a88cc4ecc67ce8d143.jpg"}
]

function paraAnimation(){
    
    var clutter = "";
    document.querySelector(".imp")
    .textContent.split("")
    .forEach(function(l){
        if(l == " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${l}</span>`
    })
    document.querySelector(".imp").innerHTML = clutter
    
    gsap.set(".imp span",{opacity:.1})
    gsap.to(".imp span" , {
        scrollTrigger :{
            trigger : ".content",
            start : "top 30%",
            end : "bottom 10%",
            scrub : .2 ,
        },
        opacity: 1,
        stagger : .03,
        ease : Power4
    })
    
}

function inputFunctionality(){
    const searchInput = document.getElementById('input');
    const galleryItems = document.querySelectorAll('#img');

    // Add an event listener to filter images based on search input
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
      galleryItems.forEach(item => {
        const itemTitle = item.getAttribute('data-title').toLowerCase();
        if (itemTitle.includes(searchTerm)) {
          item.style.display = ''; // Show item if title matches the search term
        } else {
          item.style.display = 'none'; // Hide item if title doesn't match
        }
      });
    });
}

function imgDetails (){
    const imageDownload = document.getElementById('imgDownload')
    const images = document.querySelectorAll('.clickable-image');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-button');

    // Add click event to each image
    images.forEach(image => {
        image.addEventListener('click', () => {
            // Set modal content
            modalImage.src = image.src;
            modalTitle.textContent = image.dataset.title;
            modalDescription.textContent = image.dataset.description;
            imageDownload.href = image.src;
            
            // Show modal
            modal.style.display = 'flex';
        });
    });

    // Close modal when close button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function filterImages(query) {
const images = document.querySelectorAll("#img");
const suggestionsBox = document.getElementById("suggestions-box");

query = query.toLowerCase();
const suggestions = [];

images.forEach((image) => {
const title = image.getAttribute("data-title").toLowerCase();

if (title.includes(query)) {
image.style.display = "block"; // Show the image
suggestions.push(title); // Add title to suggestions
} else {
image.style.display = "none"; // Hide the image
}
});

// Update the suggestions box
if (query && suggestions.length > 0) {
suggestionsBox.innerHTML = suggestions
.map(
(suggestion) =>
  `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
)
.join("");
suggestionsBox.style.display = "block";
} else {
suggestionsBox.style.display = "none";
}
}

function selectSuggestion(value) {
const searchBar = document.getElementById("input");
searchBar.value = value; // Autofill search bar
filterImages(value); // Filter images
document.getElementById("suggestions-box").style.display = "none"; // Hide suggestions
}
realPageAnimation();
paraAnimation();
inputFunctionality();
imgDetails();
filterImages();
selectSuggestion();
