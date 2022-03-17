const app = new Vue (
    {
        el : '#app',


        data : {
            imageArray : [
                {
                    src : "img/img-1.jpg",
                    name : "Immagine isola"
                },
                {
                    src : "img/img-2.jpg",
                    name : "Immagine deserto"
                },
                {
                    src : "img/img-3.jpg",
                    name : "Immagine prateria"
                },
                {
                    src : "img/img-4.jpg",
                    name : "Immagine montagne"
                },
                {
                    src : "img/img-5.jpg",
                    name : "Immagine lago"
                }
            ],

            activeElement : 0
        },


        methods : {
            nextSlide (){
                if (this.activeElement < 4) {
                    this.activeElement ++;
                    console.warn('Ha fatto ++');
                }
                else {
                    this.activeElement = 0;
                    console.warn('Element = 0');
                }
                console.log('Hai cliccato next!');
            },

            prevSlide : function() 
            {
                if (this.activeElement > 0) {
                    this.activeElement --;
                    console.warn('Ha fatto --');
                }
                else {
                    this.activeElement = 4;
                    console.warn('Element = 4');
                }
                console.log('Hai cliccato next!');
            }
        }
    }
)





// document.getElementById('my-before-carousel').innerHTML = `<h1>Beautifull Carousel</h1>`
// document.getElementById('my-after-carousel').innerHTML = `<p>Designed by Busna</p>`


// const imageContainer = document.querySelector('.my-carousel-images');
// const thumbnailContainer = document.querySelector('.my-thumbnails');


// for (let i = 0; i < imageArray.length; i++) {
//     imageContainer.innerHTML += `<img class="img-fluid my-carousel-item" src="${imageArray[i].src}" alt="${imageArray[i].name}">`

//     thumbnailContainer.innerHTML += `<img class="my-miniature-item" src="${imageArray[i].src}" alt="${imageArray[i].name}">`
// }


// const carouselElements = document.getElementsByClassName('my-carousel-item');
// const miniatureElements = document.getElementsByClassName('my-miniature-item');
// console.log(miniatureElements);


// carouselElements[0].classList.add('my-active');
// miniatureElements[0].classList.add('my-opacity-min');


// const prevBtn = document.querySelector('.my-previous');
// const nextBtn = document.querySelector('.my-next');
// let activeElement = 0;
// prevBtn.addEventListener('click', function() {
//     // Remove active from the current items
//     carouselElements[activeElement].classList.remove('my-active');
//     miniatureElements[activeElement].classList.remove('my-opacity-min');

//     activeElement--;

//     // Loop if condition that return to end
//     if(activeElement < 0) {
//         activeElement = carouselElements.length - 1;
//     }

//     // Add active to the previous items
//     carouselElements[activeElement].classList.add('my-active');
//     miniatureElements[activeElement].classList.add('my-opacity-min');
// });

// nextBtn.addEventListener('click', function() {
//     // Remove active from the current items
//     carouselElements[activeElement].classList.remove('my-active');
//     miniatureElements[activeElement].classList.remove('my-opacity-min');

//     activeElement++;

//     // Loop if condition that return to start
//     if(activeElement > (carouselElements.length - 1)) {
//         activeElement = 0;
//     }

//     // Add active to the next items
//     carouselElements[activeElement].classList.add('my-active');
//     miniatureElements[activeElement].classList.add('my-opacity-min');
// });


// setInterval(() => {
//     carouselElements[activeElement].classList.remove('my-active');
//     miniatureElements[activeElement].classList.remove('my-opacity-min');

//     activeElement++;

//     // Loop if condition that return to start
//     if(activeElement > (carouselElements.length - 1)) {
//         activeElement = 0;
//     }

//     // Add active to the next items
//     carouselElements[activeElement].classList.add('my-active');
//     miniatureElements[activeElement].classList.add('my-opacity-min');
// }, 2500);