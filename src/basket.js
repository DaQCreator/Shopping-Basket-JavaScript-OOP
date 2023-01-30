// #1 - Tworzymy klasy
class Basket {
  constructor() {
    this.items = []; // items = []; <- wersja skrócona
    this.totalValue = 0;
  };

  clear() {
    this.items = [];
    // this.items.splice(0);
    // this.items.length = 0;

  }   //#27 - funkcja czyszczenia tablicy

  // #3  - Stworzenie metody dodającej
  add(item) {
    this.items.push(item);
    // this.addToTotalValue(item.price);
  };

  // #8 - metoda dodająca linijkę kodu, aby móc wykorzystać w innym miejscu w celu dodania wartości lub np. rabatu
  
  // addToTotalValue(newPrice) {
  //   this.totalValue += newPrice;
  // }

  // #6 - Sumujemy wartość koszyka. Metoda zwracająca

  getTotalValue() { 
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  };

  // #9 - Poprawna metoda wyświetlania koszyka

  getBasketSummary() {
    return this.items
      // .map((product, i) => `${i + 1} - ${product.name} - ${product.price.toFixed(2)} zł.`) // map tworzy nam nową tablicę o tej samej długości i później jest przetwarzana przez forEach()

      .map((product, i) => {
        return {
          id: i + 1,
          text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł.`, 
        };
      });  // #30 - Zamieniamy starą funkcję .map na nową, żeby nie zwracać prostego tekstu, a informcje do koszyka z całym obiektem - literałem, w którym będziemy zwracali informacje nas interesujące.
  };

  // #10 - Metoda usuwająca przedmiot
  remove(no) {
    this.items.splice(no - 1, 1); // usuwamy 1 element z indexu i odejmujemy 1 którą dodaliśmy aby liczyć od 1
  };

};

// #4  - Tworzymy klasę dla produktu 

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  };

  // #7 - Ustalamy cenę - zostawiamy na potem

  // setNewPrice(newPrice) {
  //   this.price = newPrice;
  // };

};

// #2  - Tworzymy nową instancję koszyka

const shopBasket = new Basket();


