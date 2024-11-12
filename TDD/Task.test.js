const {filterScores,increaseScores,squareEachScores,distribute, student,discounted} = require("./Task")
test("Find scores greater than or equal to 70",()=>{
    let testScores = [23,56,86,23,85,77,98];
    let result = filterScores(testScores);
    let answer = [86,85,77,98];
    expect(result).toEqual(answer);
});
test("Increase each grade by 5",()=>{
    let grades = [85, 92, 78, 88, 95];
    let result = increaseScores(grades);
    let answer = [90, 97, 83, 93, 100];
    expect(result).toEqual(answer);
});
test("Square each number",()=>{
    let numbers = [2,4,6,8,10];
    let result = squareEachScores(numbers);
    let answer = [4,16,36,64,100];
    expect(answer).toEqual(result);
});
test("Check time",()=>{
    let numbers = [2,4,6,8,10];
    let result = squareEachScores(numbers);
    let answer = [4,16,36,64,100];
    expect(answer).toEqual(result);
});
test("Amount spent ",() =>{
    const collection ={
                    "groceries" : 150,
                    "dining out" : 100,
                    "transportation" : 50,
                    "entertainment" : 80
    };
    let result = distribute(collection);
    let answer = 380;
    expect(answer).toEqual(result);
});
test("display students grade ",()=>{
    const students = [95, 78, 85, 60, 45, 92];
    let result = student(students);
    let answer = ["A", "C", "B", "D", "F", "A"];
    expect(result).toEqual(answer);

});
test("find discounted price",()=>{
    const products = [

                { name: "Laptop", price: 1200},
                { name: "Phone", price: 600 },
                { name: "Mouse", price: 25 },
                { name: "Monitor", price: 200 }
    ];
    let result = discounted(products);
    let answer = [{name: "Laptop", price: 120},{ name: "Phone", price: 60},{ name: "Monitor", price: 20}];
    expect(result).toEqual(answer);

});
test("Amy shopping list",()=>{
    const shoppingList =  [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];
    let result = list(shoppingList);
})

