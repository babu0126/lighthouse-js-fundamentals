const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", 
"baking powder", "chocolate chips", "bananas"];

let index = 0;
while(index<ingredients.length){
  console.log(ingredients[index]);
  index++;
}

for(let i = 0; i<ingredients.length; i++){
  console.log(ingredients[i]);
}

for(let j = ingredients.length-1; j > 0; j--){
  console.log(ingredients[j]);
}
