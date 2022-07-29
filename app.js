const wrapper= document.querySelector(".sliderWrapper");
const menuItems= document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Nyx Foundation",
      price: 30,
      colors: [
        {
          code: "#ffcc99",
          img: "./image/nyxFoundation.png",
        },
        {
          code: "#ffe6cc",
          img: "./image/ivory_foundation.webp",

        },
      ],
    },
    {
      id: 2,
      title: "Nyx Mascara",
      price: 15,
      colors: [
        {
          code: "black",
          img: "./image/nyxMascara.png",
        },
        {
          code: "darkblue",
          img: "./image/waterproof_mascara.webp",
        },
      ],
    },
    {
      id: 3,
      title: "Nyx Lipstick",
      price: 10,
      colors: [
        {
          code: "#ff8080",
          img: "./image/nyxLipstick.png",
        },
        {
          code: "#ff0066",
          img: "./image/monte_carlo_lipstick.webp",
        
        },
      ],
    },
    {
      id: 4,
      title: "Nyx Eye-Shadow",
      price: 15,
      colors: [
        {
          code: "black",
          img: "./image/nyxEyeshadow.png",
        },
        {
          code: "yellow",
          img: "./image/bright_eyeshadow.webp",
        },
      ],
    },
    {
      id: 5,
      title: "Nyx Blush",
      price:10,
      colors: [
        {
          code: "#ff9999",
          img: "./image/nyxBlush.png",
        },
        {
          code: "#ff4d4d",
          img: "./image/rose blush.webp",
        },
      ],
    },
    {
        id: 6,
        title: "Nyx Highlighter",
        price: 20,
        colors: [
          {
            code: "#ffe699",
            img: "./image/nyxHighlighter.jpeg",
          },
          {
            code: "#e6ac00",
            img: "./image/rocky_candy_highlighter.jpeg",
          },
        ],
      },
]
      

let choosenProduct= products[0]

const currentProductImg= document.querySelector(".productImg" );
const currentProductTitle= document.querySelector(".productTitle" );
const currentProductPrice= document.querySelector(".productPrice" );
const currentProductColors= document.querySelectorAll(".color" );
const currentProductSizes= document.querySelectorAll(".size" );



menuItems.forEach((item, index)=>{
    item.addEventListener ("click", ()=>{
        //change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct= products[index];

        //change texts of currentProduct

        currentProductTitle.textContent= choosenProduct.title;
        currentProductPrice.textContent= "$"+ choosenProduct.price;
        currentProductImg.src= choosenProduct.colors[0].img;
       
       
        //assign new colours
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
            });
      
    });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src= choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click",()=>{
    
    currentProductSizes.forEach((size)=>{
    size.style.backgroundColor="white"
    size.style.color= "black"
    });
    size.style.backgroundColor="black"
    size.style.color= "white"
  });
});

const productButton= document.querySelector(".productButton" );
const payment= document.querySelector(".payment" );
const close= document.querySelector(".close" );


productButton.addEventListener("click", ()=>{
  payment.style.display="flex";
});

close.addEventListener("click", ()=>{
  payment.style.display="none";
});