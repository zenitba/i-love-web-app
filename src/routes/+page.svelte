<script>
    import { onMount } from "svelte";
  
    // De gegevens die door de bovenliggende component zijn doorgegeven
    export let data;
  
    // Wordt uitgevoerd wanneer het component aan het DOM is toegevoegd
    onMount(() => {
      // Elementen selecteren uit de DOM
      const nextButton = document.getElementById('next');
      const prevButton = document.getElementById('prev');
      const carousel = document.querySelector('.carousel');
      const listHTML = document.querySelector('.carousel .list');
      const seeMoreButtons = document.querySelectorAll('.seeMore');
      const backButton = document.getElementById('back');
  
      // Event listeners toevoegen aan de next en prev knoppen
      nextButton.addEventListener('click', () => showSlider('next'));
      prevButton.addEventListener('click', () => showSlider('prev'));
  
      // Variabele om te voorkomen dat de knoppen te snel worden herhaaldelijk geklikt
      let unAcceptClick;
  
      // Functie om de slider te tonen
      const showSlider = (type) => {
        // Knoppen uitschakelen tijdens animatie
        nextButton.style.pointerEvents = 'none';
        prevButton.style.pointerEvents = 'none';
  
        // Huidige animatieklassen verwijderen
        carousel.classList.remove('next', 'prev');
        const items = document.querySelectorAll('.carousel .list .item');
  
        // Afhankelijk van het type (next of prev), verplaats het eerste of laatste item
        if (type === 'next') {
          listHTML.appendChild(items[0]);
          carousel.classList.add('next');
        } else {
          listHTML.prepend(items[items.length - 1]);
          carousel.classList.add('prev');
        }
  
        // Timer instellen om de knoppen na animatie te herstellen
        clearTimeout(unAcceptClick);
        unAcceptClick = setTimeout(() => {
          nextButton.style.pointerEvents = 'auto';
          prevButton.style.pointerEvents = 'auto';
        }, 2000);
      };
  
      // Event listeners toevoegen aan de "see more" knoppen
      seeMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
          // CSS-klassen toevoegen/verwijderen om de detailweergave te tonen
          carousel.classList.remove('next', 'prev');
          carousel.classList.add('showDetail');
        });
      });
  
      // Event listener toevoegen aan de "back" knop
      backButton.addEventListener('click', () => {
        // CSS-klasse verwijderen om de detailweergave te verbergen
        carousel.classList.remove('showDetail');
      });
    });
</script>

<section>
    <header>
      <!-- Header inhoud hier -->
      <div class="logo">WE LOVE WEB</div>
    </header>
    
    <div class="carousel">
      <!-- Carrousel inhoud hier -->
      <div class="list">
        {#each [data.kilians, data.valeries, data.tims, data.julies, data.yolijns, data.ischas] as items}
          {#each items as item (item.id)}
            <div class="item">
              <!-- Inhoud van elk carrousel-item hier -->
              <img src={item.image.url} alt={item.title} width="300px" height="300px" loading="lazy" />
              <div class="introduce">
                <div class="title">{item.title}</div>
                <div class="topic">{item.name}</div>
                <div class="des">{item.description}</div>
                <button class="seeMore">Read More &#8599</button>
              </div>
              <div class="detail">
                <div class="title">{item.name}</div>
                <div class="des">{item.content.markdown}</div>
              </div>
            </div>
          {/each}
        {/each}
      </div>
      <!-- Buttons naar vorige, volgende en see all post -->
      <div class="arrows">
        <button id="next">&#8599</button>
        <button id="prev">&#8599</button>
        <button id="back">See All The Post &#8599</button>
      </div>
    </div>
  </section>
  
<style>
    /* Header Styles */
header{
    width: 1140px;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 50px;
    align-items: center;
}
header .logo{
    font-weight: bold;
    color: var(--color-cyan);
    font-size: 2rem;

}

/* carousel */
.carousel{
    position: relative;
    height: 800px;
    overflow: hidden;
    margin-top: -50px;
}
.carousel .list{
    position: absolute;
    width: 1140px;
    max-width: 90%;
    height: 80%;
    left: 50%;
    transform: translateX(-50%);
}
.carousel .list .item{
    position: absolute;
    left: 0%;
    width: 70%;
    height: 100%;
    font-size: 15px;
    transition: left 0.5s, opacity 0.5s, width 0.5s;
}
.carousel .list .item:nth-child(n + 6){
    opacity: 0;
}
.carousel .list .item:nth-child(2){
    z-index: 10;
    transform: translateX(0);
}
.carousel .list .item img{
    width: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: right 1.5s;
}

.carousel .list .item .introduce{
    opacity: 0;
    pointer-events: none;
}
.carousel .list .item:nth-child(2) .introduce{
    opacity: 1;
    pointer-events: auto;
    width: 400px;
    position: absolute;
    top: 50%;
    transform:  translateY(-50%);
    transition: opacity 0.5s;
}
.carousel .list .item .introduce .title{
    font-size: 2em;
    font-weight: 500;
    line-height: 1em;
    color: var(--color-blue);
}
.carousel .list .item .introduce .topic{
    font-size: 4em;
    font-weight: 500;
    color: var(--color-cyan);
}
.carousel .list .item .introduce .des{
    font-size: small;
    color: rgba(0, 213, 181, 0.869);
}
.carousel .list .item .introduce .seeMore{
    margin-top: 1.2em;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid var(--color-blue);
    background-color: transparent;
    font-weight: bold;
    letter-spacing: 3px;
    transition: background 0.5s;
    color: var(--color-cyan);
}
.carousel .list .item .introduce .seeMore:hover{
    background: var(--color-blue);

}
.carousel .list .item:nth-child(1){
    transform: var(--item1-transform);
    filter: var(--item1-filter);
    z-index: var(--item1-zIndex);
    opacity: var(--item1-opacity);
    pointer-events: none;
}
.carousel .list .item:nth-child(3){
    transform: var(--item3-transform);
    filter: var(--item3-filter);
    z-index: var(--item3-zIndex);
}
.carousel .list .item:nth-child(4){
    transform: var(--item4-transform);
    filter: var(--item4-filter);
    z-index: var(--item4-zIndex);
}
.carousel .list .item:nth-child(5){
    transform: var(--item5-transform);
    filter: var(--item5-filter);
    opacity: var(--item5-opacity);
    pointer-events: none;
}
/* animation text in item2 */
.carousel .list .item:nth-child(2) .introduce .title,
.carousel .list .item:nth-child(2) .introduce .topic,
.carousel .list .item:nth-child(2) .introduce .des,
.carousel .list .item:nth-child(2) .introduce .seeMore{
    opacity: 0;
    animation: showContent 0.5s 1s ease-in-out 1 forwards;
}
@keyframes showContent{
    from{
        transform: translateY(-30px);
        filter: blur(10px);
    }to{
        transform: translateY(0);
        opacity: 1;
        filter: blur(0px);
    }
}
.carousel .list .item:nth-child(2) .introduce .topic{
    animation-delay: 1.2s;
}
.carousel .list .item:nth-child(2) .introduce .des{
    animation-delay: 1.4s;
}
.carousel .list .item:nth-child(2) .introduce .seeMore{
    animation-delay: 1.6s;
}
/* next click */
.carousel.next .item:nth-child(1){
    animation: transformFromPosition2 0.5s ease-in-out 1 forwards;
}
@keyframes transformFromPosition2{
    from{
        transform: var(--item2-transform);
        filter: var(--item2-filter);
        opacity: var(--item2-opacity);
    }
}
.carousel.next .item:nth-child(2){
    animation: transformFromPosition3 0.7s ease-in-out 1 forwards;
}
@keyframes transformFromPosition3{
    from{
        transform: var(--item3-transform);
        filter: var(--item3-filter);
        opacity: var(--item3-opacity);
    }
}
.carousel.next .item:nth-child(3){
    animation: transformFromPosition4 0.9s ease-in-out 1 forwards;
}
@keyframes transformFromPosition4{
    from{
        transform: var(--item4-transform);
        filter: var(--item4-filter);
        opacity: var(--item4-opacity);
    }
}
.carousel.next .item:nth-child(4){
    animation: transformFromPosition5 1.1s ease-in-out 1 forwards;
}
@keyframes transformFromPosition5{
    from{
        transform: var(--item5-transform);
        filter: var(--item5-filter);
        opacity: var(--item5-opacity);
    }
}
/* previous */
.carousel.prev .list .item:nth-child(5){
    animation: transformFromPosition4 0.5s ease-in-out 1 forwards;
}
.carousel.prev .list .item:nth-child(4){
    animation: transformFromPosition3 0.7s ease-in-out 1 forwards;
}
.carousel.prev .list .item:nth-child(3){
    animation: transformFromPosition2 0.9s ease-in-out 1 forwards;
}
.carousel.prev .list .item:nth-child(2){
    animation: transformFromPosition1 1.1s ease-in-out 1 forwards;
}
@keyframes transformFromPosition1{
    from{
        transform: var(--item1-transform);
        filter: var(--item1-filter);
        opacity: var(--item1-opacity);        
    }
}

/* detail  */
.carousel .list .item .detail{
    opacity: 0;
    pointer-events: none;
}
/* showDetail */
.carousel.showDetail .list .item:nth-child(3),
.carousel.showDetail .list .item:nth-child(4){
    left: 100%;
    opacity: 0;
    pointer-events: none;
}
.carousel.showDetail .list .item:nth-child(2){
    width: 100%;
}
.carousel.showDetail .list .item:nth-child(2) .introduce{
    opacity: 0;
    pointer-events: none;
}
.carousel.showDetail .list .item:nth-child(2) img{
    right: 50%;
}
.carousel.showDetail .list .item:nth-child(2) .detail{
    opacity: 1;
    width: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    pointer-events: auto;
}
.carousel.showDetail .list .item:nth-child(2) .detail .title{
    font-size: 4em;
    color: var(--color-blue);
}
.carousel.showDetail .list .item:nth-child(2) .detail .specifications{
    display: flex;
    gap: 10px;
    width: 100%;
    border-top: 1px solid #5553;
    margin-top: 20px;
}
.carousel.showDetail .list .item:nth-child(2) .detail .specifications div{
    width: 90px;
    text-align: center;
    flex-shrink: 0;
}
.carousel.showDetail .list .item:nth-child(2) .detail .specifications div p:nth-child(1){
    font-weight: bold;
}
.carousel.carousel.showDetail .list .item:nth-child(2) .checkout button{
    font-family: Poppins;
    background-color: transparent;
    border: 1px solid #5555;
    margin-left: 5px;
    padding: 5px 10px;
    letter-spacing: 2px;
    font-weight: 500;
}
.carousel.carousel.showDetail .list .item:nth-child(2) .checkout button:nth-child(2){
    background-color: #00ffc3;
    color: #eee;
}
.carousel.showDetail .list .item:nth-child(2) .detail  .title,
.carousel.showDetail .list .item:nth-child(2) .detail  .des,
.carousel.showDetail .list .item:nth-child(2) .detail .specifications,
.carousel.showDetail .list .item:nth-child(2) .detail .checkout{
    opacity: 0;
    animation: showContent 0.5s 1s ease-in-out 1 forwards;
}
.carousel.showDetail .list .item:nth-child(2) .detail  .des{
    animation-delay: 1.2s;
    color: var(--color-cyan);
}
.carousel.showDetail .list .item:nth-child(2) .detail .specifications{
    animation-delay: 1.4s;
}
.carousel.showDetail .list .item:nth-child(2) .detail .checkout{
    animation-delay: 1.6s;
}
.arrows{
    position: absolute;
    bottom: 10px;
    width: 1140px;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);
}
#prev,
#next{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-family: monospace;
    border: 1px solid #06877a;
    font-size: large;
    bottom: 20%;
    left: 10%;
    background-color: black;
    color: var(--color-cyan);
    align-items: center;

}
#next{
    left: unset;
    right: 10%;
}
#back{
    position: absolute;
    z-index: 100;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    border-bottom: 1px solid #00907d;
    font-family: Poppins;
    font-weight: bold;
    letter-spacing: 3px;
    background-color: transparent;
    padding: 10px;
    /* opacity: 0; */
    transition: opacity 0.5s;
    color: var(--color-cyan);
}
#prev:focus,
    #next:focus,
    #back:focus,
    .seeMore:focus
    .carousel.showDetail .list .item:nth-child(2) .checkout button:focus {
        outline: none;
        background-color: #00ffc3; /* Achtergrondkleur voor focus */
        color: #000000; /* Tekstkleur voor focus */
    }
    .carousel .list .item .introduce .seeMore:focus,
.carousel.showDetail .list .item:nth-child(2) .detail .checkout button:focus {
outline: none;
background-color: #00ffc3; /* Achtergrondkleur voor focus */
color: #000000; /* Tekstkleur voor focus */
}
.carousel.showDetail #back{
    opacity: 1;
    color: cadetblue;
}
.carousel.showDetail #prev,
.carousel.showDetail #next{
    opacity: 0;
    pointer-events: none;
}
.carousel::before{
    width: 500px;
    height: 300px;
    content: '';
    background-image: linear-gradient(70deg, #00667a, #00ffc8);
    position: absolute;
    z-index: -1;
    border-radius: 20% 30% 80% 10%;
    filter: blur(150px);
    top: 50%;
    left: 50%;
    transform: translate(-10%, -50%);
    transition: 1s;
}
.carousel.showDetail::before{
    transform: translate(-100%, -50%) rotate(90deg);
    filter: blur(130px);

}
@media screen and (max-width: 991px){
    /* ipad, tablets */
    .carousel .list .item{
        width: 90%;
    }
    .carousel.showDetail .list .item:nth-child(2) .detail .specifications{
        overflow: auto;
    }
    .carousel.showDetail .list .item:nth-child(2) .detail .title{
        font-size: 2em;
        color: var(--color-blue);
    }
}
@media screen and (max-width: 767px){
    /* mobile */
    .carousel{
        height: 100vh;
    }
    .carousel .list .item{
        width: 100%;
        font-size: 10px;
    }
    
    .carousel .list{
        height: 100%;
    }
    .carousel .list .item:nth-child(2) .introduce{
        width: 50%;
    }
    
    .carousel .list .item img{
        width: 55%;
    }
    .carousel.showDetail .list .item:nth-child(2) .detail{
        backdrop-filter: blur(10px);
        font-size: small;
    }
    .carousel .list .item:nth-child(2) .introduce .des,
    .carousel.showDetail .list .item:nth-child(2) .detail .des{
        height: 200px;
        overflow: auto;
    }
    .carousel.showDetail .list .item:nth-child(2) .detail .checkout{
        display: flex;
        width: max-content;
        float: right;
    }
} 
</style>
