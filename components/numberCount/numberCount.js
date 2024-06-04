class numberCount extends HTMLElement {
   constructor() {
      super();
      this.innerHTML = `

      <style>

      .clients__count-list {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         gap: 20px;
         margin-top: 60px;
      }

      .clients__count-item {}


      .clients__number {
         display: block;
         margin-bottom: 10px;
         font-size: 50px;
         color: #181818;
         text-align: center;
      }


      .clients__small-text {
         display: block;
         font-size: 18px;
         font-weight: 500;
         color: #181818;
      }

      </style>
        <ul class="clients__count-list list-reset">
        <li class="clients__count-item">
           <strong class="clients__number" data-count="1128" data-num>
              0
           </strong>
           <span class="clients__small-text">
              Successful Work
           </span>
        </li>
        <li class="clients__count-item">
           <strong class="clients__number" data-count="908" data-num>
              0
           </strong>
           <span class="clients__small-text">
              Team member
           </span>
        </li>
        <li class="clients__count-item">
           <strong class="clients__number" data-count="258" data-num>
              0
           </strong>
           <span class="clients__small-text">
              Happy Customers
           </span>
        </li>
        <li class="clients__count-item">
           <strong class="clients__number" data-count="564" data-num>
              0
           </strong>
           <span class="clients__small-text">
              Creative Idea
           </span>
        </li>
     </ul>
        `
   }
}

customElements.define('number-count', numberCount)

const numberValues = document.querySelectorAll("[data-num]");

let interval = 3000

const counterObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         numberValues.forEach((numberValue) => {
            let startValue = 1
            let endValue = parseInt(numberValue.getAttribute("data-count"))
            let duration = Math.floor(interval / endValue)
            let counter = setInterval(function () {
               startValue += 1
               numberValue.textContent = startValue
               if (startValue == endValue) {
                  clearInterval(counter)
                  numberValue.textContent = endValue + "+"
               }
               counterObserver.unobserve(numberValue);
            }, duration)
         })
      }
   })
})
counterObserver.observe(numberValues[0])