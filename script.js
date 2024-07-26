"strict mode";

const textTxt = document.getElementById("textTxt");
const warningTxt = document.getElementById("warningTxt");

const loginTxt = document.getElementById("loginTxt");
const passTxt = document.getElementById("passTxt");

const enterBtt = document.getElementById("enterBtt");
const exitBtt = document.getElementById("exitBtt");

let userData = {};
let counter = 0;

const checkNull = (login, password) => {
  if (login === "" || password === "") {
    warningTxt.classList.remove("hidden");
    return true;
  }
};

// TODO
// Adicionar register
// Exit button
// Vide bug

// BUG


const alreadyLogged = () => {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(`Login ${i}`) === loginTxt.value) {
      console.log(
        "This user is already registered as:",
        localStorage.getItem(`Login ${i}`)
      );
      return false;
    }
  }
};

const rememberCount = () => {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(`Login ${i}`) === null) {
      return true;
    } else if (localStorage.getItem(`Login ${i}`).length > 0) {
      counter++;
    }
  }
};

const checkPassword = (password, login) => {
  if (password.length < 5 || login.length < 4) {
    console.log("Please insert a bigger password.");
    return false;
  }
};

enterBtt.addEventListener("click", () => {
  if (checkNull(loginTxt.value, passTxt.value)) {
    console.log("You need to fill the data");
    return;
  }

  if (alreadyLogged() === false) {
    return;
  }

  if (rememberCount() === false) {
    return;
  }

  if (checkPassword(passTxt.value, loginTxt.value) === false) {
    return;
  }

  userData = {
    id: counter++,
    login: loginTxt.value,
    password: passTxt.value,
  };

  localStorage.setItem(`Login ${userData.id}`, userData.login);
  localStorage.setItem(`Password ${userData.id}`, userData.password);
  //  textTxt.innerHTML = `Hello, ${userData.login}!`
  warningTxt.classList.add("hidden");
});

exitBtt.addEventListener("click", () => {});
