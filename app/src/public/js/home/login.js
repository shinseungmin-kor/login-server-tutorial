const id = document.querySelector('#id');
const password = document.querySelector('#psword');
const loginBtn = document.querySelector('button');

loginBtn.addEventListener("click", login);

function login() {
    // console.log(id.value);
    const req = {
        id: id.value,
        psword: psword.value,
    };
    // console.log(req);
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러발생"));
    })
}
