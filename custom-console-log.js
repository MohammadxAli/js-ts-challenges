const ref = console.log;

console.log = function () {
    const args = Array.prototype.slice.call(arguments);
    const newArgs = [];
    args.forEach((arg) => {
        newArgs.push(arg, `"${typeof arg}"`);
    });
    ref.apply(console, newArgs);
};

console.log("Hello world", { foo: "bar" });
console.log(34);
