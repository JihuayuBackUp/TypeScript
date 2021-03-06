// ==ORIGINAL==

function /*[#|*/f/*|]*/() {
    return Promise.resolve().then(() =>
        Promise.all([fetch("https://typescriptlang.org"), fetch("https://microsoft.com"), Promise.resolve().then(function () {
            return fetch("https://github.com");
        })]).then(res => res.toString()));
}

// ==ASYNC FUNCTION::Convert to async function==

async function f() {
    await Promise.resolve();
    const res = await Promise.all([fetch("https://typescriptlang.org"), fetch("https://microsoft.com"), Promise.resolve().then(function() {
        return fetch("https://github.com");
    })]);
    return res.toString();
}
