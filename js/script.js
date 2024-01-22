const passwordBox = document.getElementById('Password');
const length = 12;

const uppercase = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"
const lowercase = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, ss, t, u, v, w, x, y, z"
const numbers = "0123456789";
const symbols = "@#%^&*()_+=|{}[]<>/-=";

const allchars = uppercase + lowercase + numbers + symbols;

const button = document.getElementById("btn");
btn.addEventListener("click", () => {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.value = password;
})

const im = document.querySelector(".img");
im.addEventListener('click', () => {
    passwordBox.select();
    document.execCommand('copy');
})