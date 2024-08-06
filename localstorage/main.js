// const date = new Date();

// let h = date.getHours();
// let m = date.getMinutes();
// let s = date.getSeconds();

// setInterval(() => {
//     if (s >= 60) {
//         s = 0;
//         m++;
//     }

//     if (s <= 9) {
//         s = "0" + s;
//     }

//     if (m <= 9) {
//         m = "0" + m;
//     }

//     if (h <= 9) {
//         h = "0" + h;
//     }
//     if (m >= 60) {
//         m = 0;
//         h++;
//     }
//     let h_ = document.getElementById("hour");
//     let m_ = document.getElementById("minut");
//     let s_ = document.getElementById("sec");
//     h_.innerHTML = h;
//     m_.innerHTML = m;
//     s_.innerHTML = s;
//     s++;
// }, 500);

setInterval(() => {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let h_ = document.getElementById("hour");
    let m_ = document.getElementById("minut");
    let s_ = document.getElementById("sec");
    h_.innerHTML = h;
    m_.innerHTML = m;
    s_.innerHTML = s;
}, 1000);
