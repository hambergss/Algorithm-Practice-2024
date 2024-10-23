function spaces(n, yesterday, today){
    let count = 0;
    for (let i = 0; i < n; i++){
        if (yesterday[i] === "C" && today[i] === "C") {
            count++;
        }
    }
    return count;
};

console.log(spaces(5, "CC..C", ".CC.C"));


