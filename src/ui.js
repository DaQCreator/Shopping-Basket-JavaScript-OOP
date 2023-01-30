const basket = new Basket(); // #11 - Tworzymy koszyk w logice

const removeItem = event => {
  const id = Number(event.target.dataset.id);
  basket.remove(id);
  createBasketUi();
};

const buyBtns = [...document.querySelectorAll('[data-name]')]; // #12 - Obsługa przycisków - pobranie przycisków poprzez data
// Zwraca nam NodeList, dzięki [...X] zmienia na tablice
// Użycie funkcji strzałkowej ma jeden plus(lub minus), że nie tworzy własnego .this'a

const basketUl = document.querySelector('.basket-list'); // #18 - Pobieramy element docelowy dla funkcji generującej produkty. Tutaj będą wstrzykiwane produkty

const buyAllBtn = document.querySelector('.btn-buy-all'); // #24 - Zmienna przycisku złóż zamówienie

const createBasketUi = () => {
  basketUl.innerText = ''; // #23 - Usuwanie zawartości koszyka przed dodaniem nowej
  
  for (const {id, text} of basket.getBasketSummary()) {
    //#32 - up - destrukturyzacja - w nawiasach {} wpisujemy, co chcemy zabrać z obiektu - id i text
    const newLi = document.createElement('li'); // #20 - Tworzymy element listy <li>
    newLi.innerText = text;  // #21 - Dodajemy content do stworzonego elementu // #31 - dodajemy .text żeby zrobić z Object object to co było wcześniej
    newLi.addEventListener('click', removeItem) // #28 - Usuwanie elementów z koszyka w momencie kliknięcia na nie
    newLi.dataset.id = id; //#29 - dataset dla przechowywania informacji o elemencie. dataset służy do przechowywania dowolnych informacji
    basketUl.appendChild(newLi);
  }; // #22 - Odwołanie

  const basketTotalValue = basket.getTotalValue(); // #25 - Sumowanie wartości koszyka
  buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(2)} zł.`;

  buyAllBtn.disabled = basketTotalValue === 0 // #26 - funkcja do usunięcia atrybutu disabled z btn 

}; // #19 - Tworzymy funkcję funkcję generującą produkty w koszyku

const buyAllProducts = () => {
  const basketTotalValue = basket.getTotalValue();
  alert(`Zakupiono produkty o wartości ${basketTotalValue.toFixed(2)} zł`)
  basket.clear();
  createBasketUi();
};


const addProductToBasket = event => {
  const name = event.target.dataset.name;
  const price = Number(event.target.dataset.price);

  const newProduct = new Product(name, price);   // #14 - tworzymy na bazie logiki nowy produkt - obiekt
  
  basket.add(newProduct);   // #16 - dodanie do koszyka

  createBasketUi();   // #17 - Generujemy itemy w koszyku

}; // #15 - wyciągamy funkcję animową z pętli 13 - for of i robimy funkcje aby było czytelniej

for (const btn of buyBtns) {
  
  btn.addEventListener('click', addProductToBasket); // #12
}; // #13 - Dodajemy obsługę wszystkich przycisków poprzez pętlę for of


// #12 === rozwiązanie pętlą ForEach
// buyBtns.forEach(btn => {
//   btn.addEventListener('click', event => {
//     console.log('Kliknięty!', event.target.dataset.id);
//   });
// });


buyAllBtn.addEventListener('click', buyAllProducts) // #28 - W momencie kliknięcia