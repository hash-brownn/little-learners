const cards = document.querySelectorAll(".difference_card")

counter = 0;
cards.forEach(
    (card,index) =>{
        card.style.left = `${index * 550}px`
    }
)

const slideCard = () =>{
    cards.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter*550}px)`
        }
    )
}


const prevcard = () =>{
    if (counter!= 0){
        counter--
        slideCard()
    }else{
        cards.forEach(
            (slide) =>{
                slide.style.transform = `translateX(-${(cards.length-2)*550}px)`
            }
        )
        counter=cards.length-2
    }
    
}
const nextcard = () =>{
    if (counter < cards.length -2){
        counter++
        slideCard()
    }else{
        cards.forEach(
            (slide) =>{
                slide.style.transform = `none`
            }
        )
        counter=0
    }
    
    
}