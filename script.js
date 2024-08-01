"strict mode";

const textTxt = document.getElementById("textTxt");
const warningTxt = document.getElementById("warningTxt");

const loginTxt = document.getElementById("loginTxt");
const passTxt = document.getElementById("passTxt");
const hintTxt = document.getElementById("hintTxt");

const enterBtt = document.getElementById("enterBtt");
// const exitBtt = document.getElementById("exitBtt");

let userData = {};
let counter = 0;

const checkNull = (login, password, hint) => {
  if (login === "" || password === "" || hint === "") {
    warningTxt.classList.remove("hidden");
    return true;
  }
};

// TODO
// Adicionar register
// Exit button

// BUG

const alreadyLogged = () => {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(`Login ${i}`) === loginTxt.value) {
      console.log(
        "This user is already logged in as:",
        localStorage.getItem(`Login ${i}`)
      );
      warningTxt.innerHTML = "This user is not available.";
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

const checkPassword = (password, login, hint) => {
  if (password.length < 5) {
    console.log("Please enter a longer password.");
    return false;
  } else if (login.length < 5) {
    console.log("Please enter a longer login.");
    return false;
  } else if (hint.length < 3) {
    console.log("Please enter a longer hint.");
  }
};

enterBtt.addEventListener("click", () => {
  if (checkNull(loginTxt.value, passTxt.value, hintTxt.value)) {
    console.log("You need to fill in the data.");
    return;
  }

  if (alreadyLogged() === false) {
    return;
  }

  if (rememberCount() === false) {
    return;
  }

  if (checkPassword(passTxt.value, loginTxt.value, hintTxt.value) === false) {
    return;
  }

  userData = {
    id: counter,
    login: loginTxt.value,
    password: passTxt.value,
    hint: hintTxt.value
  };

  localStorage.setItem(`Login ${userData.id}`, userData.login);
  localStorage.setItem(`Password ${userData.id}`, userData.password);
  localStorage.setItem(`Hint ${userData.id}`, userData.hint)
  warningTxt.classList.add("hidden");
});

/*exitBtt.addEventListener("click", () => {
  textTxt.innerHTML = `You are not logged in.`;
});
*/
