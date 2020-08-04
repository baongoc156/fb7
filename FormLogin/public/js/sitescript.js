const login = document.querySelector('#flogin');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
// bắt event gửi 
login.addEventListener('submit', (e) => {
    // check user
    if (!validateUsername(username.value)) {
        setError(username);
        e.preventDefault();
    } else {
        setSuccess(username);
    }
    //check Pass
    if (!validatePassword(password.value)) {
        setError(password);
        e.preventDefault();
    } else {
        setSuccess(password);
    }
});
// lỗi thì add class error 
function setError(ele) {
    ele.closest('.form-group').classList.add('error');
}
// thành công thì xóa class error
function setSuccess(ele) {
    ele.closest('.form-group').classList.remove('error');
}
// check Username ít nhất 6 kí tự
function validateUsername(inputValue) {
    const regex = /^\w{6,}$/;
    return regex.test(inputValue);
}
// check Password ít nhất 5 kí tự, ít nhất 1 kí tự hoa , ít nhất 1 kí tự số
function validatePassword(inputValue) {
    const regex = /^(?=.*\d)(?=.*[A-Z])[\s\S]{5,}$/;
    return regex.test(inputValue);
}