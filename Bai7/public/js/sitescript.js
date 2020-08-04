const score = document.querySelector('.score');
const time = document.querySelector('.time');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const broad = document.querySelector('.broad');
    //random 100 phần tử
    for (let i = 1; i <= 20; i++) {
        //tạo phần tử 
        const el = document.createElement('div');
        //thêm class circle vào phần tử
        el.classList.add('circle');
        //random vị trí phần tử
        const horiozontal = getRandomInt(0, 1200);
        const vertical = getRandomInt(50, 1500);
        el.style.top = `${vertical}px`;
        el.style.left = `${horiozontal}px`;
        //gán giá tri cho phần tử
        el.innerHTML = i;
        //gán phần tử vào class broad
        broad.append(el);
    }
    // lấy các phần tử circle đã được tạo
    const circle = document.querySelectorAll('.circle');
    // đổi background circle sang màu xanh khi click đúng thứ tự
    let temp = 1;
    let diem = 0;
    for (let i = 0; i < circle.length; i++) {
        circle[i].addEventListener('click', () => {
            if (circle[i].innerHTML == temp) {
                circle[i].style.backgroundColor = 'blue';
                temp++;
                diem++;
                score.innerHTML = diem;
            }
        });
    }
    // đếm ngược thời gian 
    let t = 60;
    let countTime = setInterval(() => {
        t--;
        time.innerHTML = 'Thời gian : ' + t;
        if (t == 0 || temp == circle.length + 1) {
            alert("Điểm của bạn: " + score.innerHTML);
            clearInterval(countTime)
        }
    }, 1000);
}, { once: true });

// hàm random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}