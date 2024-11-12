function filterScores(array){
    let result = array.filter((number)=>{
        return number >=70;
    });
    return result;
}
<<<<<<< HEAD
function squareEachScores(numbers){
    let result = numbers.map(number=>{
        return number * number;
    })
    return result;
}
function distribute(numbers){
    let sum = 0;
    for(let element in numbers){
        sum += numbers[element];
    }
    return sum;
}
function student(grade){
    let result = grade.map((number)=>{
        if(number >=90 && number <= 100){
            return "A";
        }
        if(number >=80 && number <= 89) {
            return "B";
        }
        if(number >=70 && number <= 79){
            return "C";
        }
        if(number >=60 && number <= 69){
            return "D";
        }
        if(number < 60){
            return "F";
        }
    });
    return result;
}
=======
>>>>>>> 657954af9b351d76cb7f3c0ed338ae0d81eb1c29
function increaseScores(grades){
    let result = grades.map((number)=>{
        return number + 5;
    })
    return result;
}
<<<<<<< HEAD
function discounted(prices){
    let result = [];
    let newPrice = [];
    prices.filter((number) => number.price >= 50,result.push(number)
            result.map((number) => {
            newPrice = number.price * 0.01;
        });
    return {
        name: prices.name,
        newPrice: newPrice,
    };
}
module.exports = {filterScores,increaseScores,squareEachScores,distribute,student, discounted}
=======
function squareEachScores(numbers){
    let result = numbers.map(number=>{
        return number * number;
    })
    return result;
}
module.exports = {filterScores,increaseScores,squareEachScores}
>>>>>>> 657954af9b351d76cb7f3c0ed338ae0d81eb1c29
