
var knownIngredients = []; //Ta zmienna przechowywać będzie tabelę, w której znajdować się będą wszystkie składniki (obiekty), z których możemy zrobić burgera

var menu = []; //Zmienna, która będzie przechowywać wszystkie burgery, które można u nas zamówić.

  //Poniżej mamy konstruktor burgerów. Na jego podstawie możemy stworzyć nowe burgery
  // Bread może być white lub dark
  var Burger = function (name, typeOfBread, arrayOfIngredients, price){

    // Poniżej przypisujemy wartości podane w w nawiasie przy tworzeniu burgera do odpowiednich kluczy
    this.name = name;
    if (typeOfBread=="white" || typeOfBread=="dark" ){
    this.typeOfBread = typeOfBread;
    } else {
      console.log("Hey, we don't use that type of bread in our company. Your bread will be white.")
      this.typeOfBread = "white";
    }
    this.arrayOfIngredients=[];
    //zmienna pomocnicza - łatwiej będzie nam odnależć obiekty produkty po indeksie
    this.indexOfIngradients=[];
    //sprawdzamy czy istnieje taki produkt
    for(var i = 0; i < arrayOfIngredients.length; i++){
        for(var y=0; y < knownIngredients.length; y++){
          if(arrayOfIngredients[i]==knownIngredients[y].name){
            this.arrayOfIngredients.push(arrayOfIngredients[i]);
            this.indexOfIngredients.push(y);
          }
        }
      }

    this.price = price;
    // dodajemy burgera do lity burgerów
    // Jako, że wrzucamy do tabeli cały obiekt, a nie tylko jego nawę (watość) nie musimy tworzyć meody zmieniającej nazwę
    // Obiekt to referencyjny typ danych - co oznacza, że w momencie, kiedy dodamy go do tablicy - dodamy odwołanie do pewnego miejsca w pamięci
    // komputera, w którym znajduje się nasz obiekt. Oznacza to, że w momencie kiedy zmienimy jakąkolwiek wartość w obiekcie zmieni się ona też w tablicy
    menu.push(this);
 };

 // konstruktor składników
 //Ostatni parametr dodaliśmy wraz z wartością domyślną, jeśli nie podamy żadnych wartości dla niego - zostanie mu przypisana wartość "no"
 var Ingredient = function (name, color, description, allergens = "no"){
       this.name = name;
       this.color = color;
       this.description = description;
       this.allergens = allergens;
       knownIngredients.push(this);
 }
//tworzenie nowych składników
var cheese = new Ingredient("cheese", "yellow", "Our cheese is made from natural raw milk.", "milk");
var ham = new Ingredient("ham", "#E69EAA", "The classic Easter ham, shaved from the bone. We cure and smoke it with the bone in, to add flavour and succulence to this ham.");
var salad = new Ingredient("salad", "#589123", "Our salad is fresh and delicious.");


//tworzenie nowych burgerów
var cheeseBurger = new Burger('Cheeseburger', "white", ["cheese","salad"], 12);
var hamBurger = new Burger('Hamburger', "dark", ["salad", "ham", "cheese"], 25);







//miejsce na twoj kod






//wyświetlanie burgerów z menu na stronie
for( let item of menu){
    let ingradients = "";
    let description = "";
  for(let x = 0; x<item.arrayOfIngredients.length; x++){
    index = item.indexOfIngradients[x];
    ingradients+="<div class = 'ingradient' id='"+ item.name+knownIngredients[index].name +"' style='background: "+knownIngredients[index].color +";'></div>";
    description+="<div class = 'itemOnList' name='"+ item.name+knownIngredients[index].name +"'><div class = 'descItem'><div class='descName'>"+knownIngredients[index].name+"</div><div class='descText'>";
    description+= knownIngredients[index].description+"</div><div class='alergens'>Allergens: "+ knownIngredients[index].allergens +"</div></div></div>"
  }
  let visualization = "<div class = 'burgerVis'><div class = 'topBread "+item.typeOfBread+"'></div>"+ingradients+"<div class = 'bottomBread "+item.typeOfBread+"'></div></div>";
  let preparedCode = "<div class = 'product' id = "+item.name+"><div class='name'>"+item.name+"</div><div class='hamburgerBody'>"+visualization +"<div class='producsDescription'><div class='scrolled'>"+ description+"</div></div></div></div>";
  document.getElementById("burgers").innerHTML+=preparedCode;

}
