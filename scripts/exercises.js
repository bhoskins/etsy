// QUESTION ONE
// Show me how to calculate the average price of all items. Please console.log the average.
// The output should be "The average price is $23.63"

// Use filter to select items
// function isBigEnough(element) {
//   return element >= 10;
// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

function print(x) {
  console.log(x);
}

var total = 0;

etsyItems.map(function (object){
   total += object.price;
});

// console.log(total);

var avgPrice = Math.round((total / etsyItems.length) * 100) / 100;

console.log('The average price is ' + avgPrice );

console.log("****** Next Answer ********");

// QUESTION TWO
// Show me how to get an array of items that cost between $14.00 and $18.00 USD
// The output should be the three objects, which will look something like:
//
// "Items that cost between $14.00 USD and $18.00 USD:"
// [
//   {
//      title: "1970s Coors Banquet Glass Beer Pitcher",
//      ...
//   },
//   {
//      title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//      ...
//   },
//   {
//      title: "Hand Painted Colorful Feather Glass",
//      ...
//   }
// ]

console.log('\"Items that cost between \$14\.00 and \$18\.00 USD:\" \n \[');
var itemsMidPrice = etsyItems.forEach(function (item) {
    if (item.price > 14 && item.price < 18 ) {
      print( "\{ \n" + "\t" + "title: " + "\"" + item.title + "\" \n" + "\t" + "\.\.\. \n" +  "\}, \n" );
    } else {
      return;
    }

});
print("]");




console.log("****** Next Answer ********");

// QUESTION THREE
// Show me how find the item with a "GBP" curreny code and print its name and price. Please console.log the one you find.
// The output should be "1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18"

var itemPound = etsyItems.filter(function (item) {
  if ( ( item["currency_code"].toUpperCase() ) == "GBP" ) {
    return item;
    console.log(item.title);
  }

});

// .title   and .price   with pound symbol added

itemPound.forEach(function(item) {
  print(item.title + " costs " + "£" + item.price  );
});

console.log("****** Next Answer ********");


// QUESTION FOUR
// Show me how to find which items are made of wood. Please console.log the ones you find.
// The output should be:
//
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
// items.materials = [ 'wood', etc]
  //



var woodObjects

var etsyObjects = etsyItems.map(function(item) {
  return item;
});

var findWood = etsyObjects.filter(function(item) {

  return item.materials.indexOf('wood') != -1;

  });

findWood.map(function(item) {
  print("- " + item.title + " is made of wood.")
});


console.log("****** Next Answer ********");


 // Use this: if items.materials.indexOf('wood') != -1;


// QUESTION FIVE
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//
// The output should be:
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar
//
//
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass


// QUESTION 6
// Show me how to calculate how many items were made by their sellers
// The output should be "18 were made by their sellers"
