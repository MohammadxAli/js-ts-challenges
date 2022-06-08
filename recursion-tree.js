const getUniqueSortedNumbers = (tree) => {
    const result = [];
    Object.values(tree).map((value) => {
        if (typeof value === "object") {
            result.push(...getUniqueSortedNumbers(value));
        }
        if (typeof value === "number") {
            result.push(value);
        }
    });
    return result
        .filter((item, index) => result.indexOf(item) === index)
        .sort((a, b) => a - b);
};

const result = getUniqueSortedNumbers({
    a: {
        x: 3,
        y: {
            d: 2,
            e: 2,
            f: {
                g: 4,
            },
            z: 8,
        },
        n: {
            b: 12,
            c: 493,
            d: 980,
            e: "foo",
            d: 980,
            f: 12,
        },
    },
    b: 12,
    c: 1,
    d: 980,
    e: "foo",
    d: 980,
    f: 12,
});

console.log(result);
