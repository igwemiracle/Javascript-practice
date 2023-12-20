var info = "Your Fibonacci Series are; "

function generateFibonacciSeries(n) {
    let fiboSeries = []

    if (n >= 1) {
        fiboSeries.push(0);

    }
    if (n >= 2) {
        fiboSeries.push(1);

    }

    for (let i = 2; i < n; i++) {
        fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    }

    return fiboSeries;
}

// function generateFibonacciSeries(n) {
//     const series = [0, 1];

//     for (let i = 2; i < n; i++) {
//         const nextNumber = series[i - 1] + series[i - 2];
//         series.push(nextNumber);
//     }

//     return series;
// }




const fibResult = generateFibonacciSeries(2);
console.log(info + fibResult);



document.write("Hellon")