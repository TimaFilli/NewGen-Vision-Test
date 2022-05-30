let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterPrices(courses, requiredRange) {

    return courses.filter(course => {
        let price = course.prices

        let byFirst = requiredRange[0] ? requiredRange[0] <= price[0] : true

        let bySecond = !requiredRange[0] ||
            requiredRange[0] &&
            requiredRange[1] ? requiredRange[1] >= price[0] :
            requiredRange[0] &&
                !requiredRange[1] ? requiredRange[0] >= price[0] : true

        let byThird = requiredRange[1] ? requiredRange[1] >= price[1] : true

        return byFirst && bySecond && byThird
    })
}

console.log(filterPrices(courses, requiredRange1))
console.log(filterPrices(courses, requiredRange2))
console.log(filterPrices(courses, requiredRange3))