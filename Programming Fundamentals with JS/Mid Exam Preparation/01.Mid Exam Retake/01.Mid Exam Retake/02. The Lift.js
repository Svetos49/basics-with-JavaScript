function lift(input) {
   let people = Number(input.shift());
   let wagons = input[0].split(' ').map(Number);

   while(people > 0 && isFree(wagons)) {
      wagons = wagons.map(w => {
         n = 4 - w;
         if(n > people) {
            n = people;
         }
         people -= n;
         w += n;
         return w
      })
   }

   if(isFree(wagons)) {
      console.log(`The lift has empty spots!`);
   }

   if(people > 0) {
      console.log(`There isn't enough space! ${people} people in a queue!`);
   } 
   console.log(wagons.join(' '));
   
   function isFree(arr) {
      return arr.filter(x => x < 4).length > 0;
   }
}

lift([
    "15",
    "0 0 0 0 0"
   ]);

lift(["20", "0 2 0"]);   