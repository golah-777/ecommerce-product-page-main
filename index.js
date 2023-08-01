class App{
  constructor(){
   this.cart = document.querySelector(".cart");
   this.numberOfItems = document.querySelector(".number-products");
   this.number = document.querySelector("#number");
   this.cartInfo= document.querySelector(".cart-info");
   this.emty = document.querySelector(".emty");
   this.item = document.querySelector(".item");
   this.checkoutBtn = document.querySelector(".checkoutdiv");
   this.decrease= document.querySelector(".decrease");
    this.increase= document.querySelector(".increase");
    this.$value= document.querySelector(".value");
    this.count = 0;
    this.addToCart = document.querySelector(".add-to-cart-btn");
    this.errorMessage= document.querySelector(".error-mesage");
    this.fee= document.querySelector(".fee");
    this.multiply= document.querySelector(".fee-multi");
    this.total= document.querySelector(".fee-total");
    this.imgOne=document.querySelector(".thumbnail-one");
    this.imgTwo=document.querySelector(".thumbnail-two");
    this.imgThree=document.querySelector(".thumbnail-three");
    this.imgfour=document.querySelector(".thumbnail-four");
    this.mainImg = document.querySelector('.main-img');
    this.one = document.querySelector('.img-one');
    this.two = document.querySelector('.img-two');
    this.three = document.querySelector('.img-three');
    this.four = document.querySelector('.img-four');

   
   this.addEventListeners();

  }

  addEventListeners(){
    document.body.addEventListener('click',(event)=>{
      this.handleOnClick(event);
      this.quantity(event);
      this.addItemToCart(event);
      this.imgs(event);
    })
  }

  
  handleOnClick(event){
    const cartClicked = this.cart.contains(event.target);
    const cart = this.cartInfo.contains(event.target);
    const checkoutBtnClicked = this.checkoutBtn.contains(event.target);

    if (cartClicked){
     this.cartInfo.style.display='inline';
    } else if(!cart){
      this.cartInfo.style.display='none';
    }

    if(this.number.innerText>= 1){
     this.emty.style.visibility='hidden';
     this.item.style.visibility='visible';
     this.checkoutBtn.style.visibility='visible';
    }
    
    if (checkoutBtnClicked){
      this.emty.style.visibility='visible';
      this.item.style.visibility='hidden';
      this.checkoutBtn.style.visibility='hidden';
      this.emty.innerText = 'Thank you!';
      this.numberOfItems.style.display = 'none';
      this.number.innerText = 0;
    }
  }
  
  quantity(event){
    const plus = this.increase.contains(event.target);

    const minus = this.decrease.contains(event.target);

    if(plus){
     this.increment();
    } else if(minus){
      this.decrement();
    }
  }

  increment(){
   const sum = parseInt(this.$value.innerText);
   this.$value.innerText = sum + 1;
  }

  decrement(){
   const sum = parseInt(this.$value.innerText);
   this.$value.innerText = sum - 1;
  }

  addItemToCart(event){
    const addBtnClecked = this.addToCart.contains(event.target);
    const numberOfItems = this.$value.innerText

    if(addBtnClecked && numberOfItems == 0){
     this.numberOfItems.style.display = 'none';
     this.errorMessage.innerText = 'Please select the number of products you want to buy';
     this.errorMessage.style.color = 'red';
     this.errorMessage.style.margin = '10px 0px'
    } else if (addBtnClecked && !numberOfItems == 0){
      this.numberOfItems.style.display = 'inline';
      this.number.innerText = numberOfItems;
      this.$value.innerHTML = 0;
      this.errorMessage.innerText = '';
      this.multiply.innerText = numberOfItems;
      this.totalAmount();
    } 

  }

  totalAmount(){
    const multiply = parseInt(this.multiply.innerText);
    const actualValue = parseInt(this.fee.innerText);
    const total = multiply*actualValue;
    this.total.innerText = total;
  }

  imgs(event){
    const imgOneClicked = this.imgOne.contains(event.target);
    const imgTwoClicked = this.imgTwo.contains(event.target);
    const imgThreeClicked = this.imgThree.contains(event.target);
    const imgFourClicked = this.imgfour.contains(event.target);
    const backgroungImg = this.mainImg;

    const one = this.one;
    const two = this.two;   
    const three = this.three;   
    const four = this.four; 

    if(imgOneClicked){
      backgroungImg.classList.add('main-img');    backgroungImg.classList.remove('img-two');    backgroungImg.classList.remove('img-three');    backgroungImg.classList.remove('img-four');

      one.classList.add('img-one');
      two.classList.remove('img-one');
      three.classList.remove('img-one');
      four.classList.remove('img-one');
    } else if(imgTwoClicked){
      backgroungImg.classList.add('img-two');    backgroungImg.classList.remove('main-img');    backgroungImg.classList.remove('img-three');    backgroungImg.classList.remove('img-four');

      one.classList.remove('img-one');
      two.classList.add('img-one');
      three.classList.remove('img-one');
      four.classList.remove('img-one');
    } else if (imgThreeClicked){
      backgroungImg.classList.add('img-three');
      backgroungImg.classList.remove('main-img');    backgroungImg.classList.remove('img-two');
      backgroungImg.classList.remove('img-four');

      one.classList.remove('img-one');
      two.classList.remove('img-one');
      three.classList.add('img-one');
      four.classList.remove('img-one');
    } else if (imgFourClicked){
      backgroungImg.classList.add('img-four');
      backgroungImg.classList.remove('main-img');    backgroungImg.classList.remove('img-two');    backgroungImg.classList.remove('img-three');

      one.classList.remove('img-one');
      two.classList.remove('img-one');
      three.classList.remove('img-one');
      four.classList.add('img-one');
    }
  }

  
};

const app = new App();