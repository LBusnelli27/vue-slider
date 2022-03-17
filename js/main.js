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
                if (this.activeElement < this.imageArray.length - 1) {
                    this.activeElement ++;
                    console.warn('Ha fatto ++');
                }
                else {
                    this.activeElement = 0;
                    console.warn('activeElement = 0');
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
                    this.activeElement = this.imageArray.length - 1;
                    console.warn('activeElement = imageArray.length - 1');
                }
                console.log('Hai cliccato next!');
            },

            clickThumb : function(imgIndex)
            {
                this.activeElement = imgIndex;
            }
        }
    }
)