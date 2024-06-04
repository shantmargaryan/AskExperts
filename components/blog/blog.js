class itemBlog extends HTMLElement {
   constructor() {
      super()
      const imgUrl = this.getAttribute("img-url")
      const title = this.getAttribute("title")
      const smallImgUrl = this.getAttribute("small-img-url")
      const name = this.getAttribute("name")
      this.innerHTML = `

<style>

.blog {
   padding: 10% 0;
   margin-bottom: 10%;
}

.blog__container {}

.blog__content {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-items: center;
       gap: 15px;
       margin-bottom: 50px
   }

   .blog__title-box {
       max-width: 500px
   }

   .blog__subtitle {
       margin-bottom: 6px
   }

   .blog__title {}

   .blog__link {}

   .blog__list {
      display: grid;
      grid-template-columns: repeat(1fr);
      gap: 30px
   }

   .blog__item {}

   .blog__link {
       display: inline-block;
       margin-bottom: 30px;
       text-decoration: none
   }

   .blog__img {
      aspect-ratio: 1/1;
      border-radius: 20px;
   }

   .blog__small-title {
       font-size: 30px;
       font-weight: 600
   }

   .blog__text {
       margin-bottom: 10px
   }

   .blog__item-box {
       display: flex;
       flex-wrap: wrap;
       align-items: center;
       justify-content: space-between;
       gap: 10px;
       padding: 15px 0;
       border-top: 1px solid #C1C1C1;
       border-bottom: 1px solid #C1C1C1
   }

   .blog__profile {
       display: flex;
       align-items: center;
       gap: 10px
   }

   .blog__profile-img {
       width: 60px;
       height: 60px;
       border-radius: 50%
   }

   .blog__name {
       padding-right: 20px;
       font-family: Lato;
       font-weight: 400;
       color: #595566;
       border-right: 1px solid #C1C1C1
   }

   .blog__date {
       font-family: Lato;
       font-weight: 400;
       color: #595566
   }

   .blog__profile-link {
      background-color: #fff;
      color: #181818;
   }

   .blog__profile-link:hover {
      background-color: #181818;
      color: #fff;
   }

   @media (min-width: 768px) {
       .blog__list {
           grid-template-columns: repeat(2, 1fr)
       }
   }

</style>

         <li class="blog__item">
                  <a class="blog__link" href="blog-single.html">
                     <img class="blog__img img" src=${imgUrl} alt="team-work" loading="lazy">
                  </a>
                  <h3 class="blog__small-title title">
                     ${title}
                  </h3>
                  <p class="blog__text text">
                     Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                     approaches to corporate strategy foster collaborative thinking to further the overall value
                     proposition.
                  </p>
                  <div class="blog__item-box">
                     <div class="blog__profile">
                           <img class="blog__profile-img img" src=${smallImgUrl} alt="man" loading="lazy">
                        <span class="blog__name">
                           ${name}
                        </span>
                        <span class="blog__date">
                           September 1, 2022
                        </span>
                     </div>
                     <a class="blog__profile-link black-link" href="blog-single.html">
                        Read More
                     </a>
                  </div>
               </li>
         `
   }
}

customElements.define("item-blog", itemBlog)
