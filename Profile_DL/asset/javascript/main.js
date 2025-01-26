// const diliBtn = document.querySelector(".logo");
// const containerCard = document.querySelector(".js-card-container");
// const card = document.querySelector(".js-card");
// const input_pass = document.querySelector(".pass_input_js");
// const bodyInput = document.querySelector(".body_input");
// const closeBtn = document.querySelector(".js-close");
// const btn_submit = document.querySelector(".btn_contact");
// const correctPassword = "123"; // Replace "123" with your password
// const errorBox = document.querySelector(".errorBox_contact");
// const errorBox_logo = document.querySelector(".error_box_input");
// // const passwordForm_logo = document.querySelector(".passwordForm_logo");

// var openCard = function () {
//     card.classList.add("open");
//     card.classList.add("ani");
// };

// var hiddenCard = function () {
//     card.classList.remove("open");
//     card.classList.remove("ani");
// };

// closeBtn.addEventListener("click", hiddenCard);
// containerCard.addEventListener("click", function (event) {
//     event.stopPropagation();
// });

// card.addEventListener("click", hiddenCard);

// // passwordForm.addEventListener("submit", function (event) {
// //     event.preventDefault();
// //     var password = document.getElementById("password").value;
// //     if (password === correctPassword) {
// //         openCard();
// //     } else {
// //         errorBox.style.display = "block";
// //         // Hide error message after 2 seconds
// //         setTimeout(function () {
// //             errorBox.style.display = "none";
// //         }, 2000);
// //     }
// // });

// // input pass logo
// var hiddenInputLogo = function () {
//     input_pass.classList.remove("open");
//     input_pass.classList.remove("ani");
// };

// // Show input when clicking on logo
// diliBtn.addEventListener("click", function () {
//     console.log("click");
//     input_pass.classList.add("open"); // Show input
//     input_pass.classList.add("ani"); // Add animation
// });

// // Hide input when clicking on container input pass
// input_pass.addEventListener("click", hiddenInputLogo);
// // Prevent event propagation on input click
// bodyInput.addEventListener("click", function (event) {
//     event.stopPropagation();
// });

// // Logic to handle password submission and display the card
// // btn_submit.addEventListener("submit", function (event) {
//     // console.log("submit");
//     // event.preventDefault();
//     // var password = document.getElementById("password_input_logo").value;
//     // if (password === correctPassword) {
//     //     hiddenInputLogo();
//     //     openCard();
//     // } else {
//     //     errorBox_logo.style.display = "block";
//     //     // Hide error message after 2 seconds
//     //     setTimeout(function () {
//     //         errorBox_logo.style.display = "none";
//     //     }, 2000);
//     // }
// // });


// document.querySelector('.passwordForm_logo').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const password = document.getElementById('password_input_logo').value;
//     const errorBox_logo = document.querySelector('.error_box_input');
    
//     if (password === correctPassword) {
//         errorBox_logo.style.display = 'none';
//         hiddenInputLogo();
//         openCard();
//     } else {
//         errorBox_logo.style.display = 'block';
//         // Hide error message after 2 seconds
//         setTimeout(function () {
//             errorBox_logo.style.display = 'none';
//         }, 2000);
//     }
// });


// Các phần tử cần thiết
const diliBtn = document.querySelector(".logo");
const card = document.querySelector(".js-card");
const containerCard = document.querySelector(".js-card-container");
const input_pass = document.querySelector(".pass_input_js");
const bodyInput = document.querySelector(".body_input");
const closeBtn = document.querySelector(".js-close");
const btn_submit = document.querySelector(".btn_contact");
const correctPassword = "123"; // Mật khẩu đúng
const errorBox_logo = document.querySelector(".error_box_input");

// Hàm để hiển thị card với hiệu ứng
const openCard = () => {
    card.classList.add("open", "ani");
};

// Hàm để ẩn card
const hiddenCard = () => {
    card.classList.remove("open", "ani");
};

// Hàm để hiển thị input cho mật khẩu
const showPasswordInput = () => {
    input_pass.classList.add("open", "ani");
};

// Hàm để ẩn input của mật khẩu
const hiddenPasswordInput = () => {
    input_pass.classList.remove("open", "ani");
};

// Xử lý khi nhấn vào logo để hiển thị form nhập mật khẩu
diliBtn.addEventListener("click", showPasswordInput);

// Ngăn chặn việc đóng khi nhấn vào trong vùng input
bodyInput.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Đóng form input mật khẩu khi nhấn vào ngoài vùng input
input_pass.addEventListener("click", hiddenPasswordInput);

// Đóng card khi nhấn vào ngoài vùng card hoặc vào nút đóng
card.addEventListener("click", hiddenCard);
closeBtn.addEventListener("click", hiddenCard);
containerCard.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Xử lý khi submit mật khẩu
document.querySelector('.passwordForm_logo').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password_input_logo').value;

    if (password === correctPassword) {
        // Nếu đúng mật khẩu, ẩn form input mật khẩu và hiển thị card
        errorBox_logo.style.display = 'none';
        hiddenPasswordInput();
        openCard();
    } else {
        // Nếu sai mật khẩu, hiển thị thông báo lỗi trong 2 giây
        errorBox_logo.style.display = 'block';
        setTimeout(() => {
            errorBox_logo.style.display = 'none';
        }, 2000);
    }
});
