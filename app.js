addItemsCart(); 

function addItemsCart(){
    let buttonClick;
    let nameOfBook;
    let valueOfBook;
    let valueReplace;
    let valueFloat;
    let total = 0;
    let totalDisplay;
    let shoppingCart = document.querySelector('.cart-list');
    let totalPurchase = document.querySelector('.cart-value');
    let msgCart = document.querySelector(".cart-msg");

    elementButton = document.getElementsByTagName('button');

    for (let i = 0; i < elementButton.length; i++){
        elementButton[i].addEventListener("click", function(){
        msgCart.classList.add('none');
        buttonClick = elementButton[i].getElementsByClassName('info-book')[0].textContent;

        nameOfBook = buttonClick.split('-')[0];
        valueOfBook = buttonClick.split('-')[1];
    
        valueReplace = valueOfBook.replace(',','.');
        valueFloat = parseFloat(valueReplace);
        total += valueFloat;
        totalDisplay = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total);
            
        shoppingCart.innerHTML = shoppingCart.innerHTML + `<section class="cart-list">
        <p class="cart-list-item"><span class="cart-name">${nameOfBook}</span><span class="cart-price">${valueOfBook}</span></p>
        </section><hr class="line-cart">`
        
        totalPurchase.innerHTML = `<h4 class="container__cart-total">Total: <span class="cart-value">${totalDisplay}</span></h4>`
        })
    }
}

qtdItemsCart(); 

function qtdItemsCart(){
    let numberClicks = 0;
    let buttonCart = document.getElementsByTagName('button');
    let showQtdItems = document.querySelector(".cart-items");

    for (let i = 0; i < buttonCart.length; i++){
        buttonCart[i].addEventListener("click", function(){
            showQtdItems.style.display = 'block';
            numberClicks++;
            showQtdItems.innerHTML = numberClicks;
        })
    }
}

function changeIconStart(){
    let tagImg = document.querySelector('.container__start-icon');
    tagImg.src = `/images/startIconB.png`;    
}

function changeIconStartInvert(){
    let tagImg = document.querySelector('.container__start-icon');
    tagImg.src = `/images/startIcon.png`;  
}
