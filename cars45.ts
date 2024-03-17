type cars = {
    manufacture :String
    model:string
    [key :string]: any;

}
function creatCar (manufacture :string ,model :string, optional: Record<string, any>): cars {
   return{
    manufacture,
    model,
    ...optional
}
}
const mycar : cars = creatCar("honda","toyota", {color: "silver", year: "2024"})
console.log(mycar)