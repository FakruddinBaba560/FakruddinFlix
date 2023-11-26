
let email = document.getElementById("email")
let label = document.getElementById("email-label").style
let email1 = document.getElementById("email1")
let label1 = document.getElementById("email-label1").style
function email_label_changer(email, label) {
    email.addEventListener("focus", () => {

        label.top = "0px"
        label.fontSize = "14px"
        check_blur_event = true
    })
    email.addEventListener("input", () => {
        if (email.value != "") {
            check_blur_event = false
        }
    })
    email.addEventListener("blur", () => {

        if (email.value === "") {
            label.top = "11px"
            label.fontSize = "18px"
        }
    })
}
email_label_changer(email, label)
email_label_changer(email1, label1)
function changeHeight(element) {
    let question_list = document.querySelectorAll("#question-list li");
    let answer = element.querySelector('.answer');
    let btn = element.querySelector('.btn');
    let svg = btn.querySelector('svg');
    if (element.style.maxHeight === "1000px") {
        question_list.forEach(function (li) {
            li.style.maxHeight = "90px";
        });
        svg.style.transform = "rotate(0deg)";
    }
    else {
        question_list.forEach(function (li) {
            li.style.maxHeight = "90px";
        });
        element.style.maxHeight = "1000px"
        svg.style.transform = "rotate(45deg)";
    }

}
