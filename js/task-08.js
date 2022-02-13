// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением
//  о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения
//  полей в обьект, где имя поля будет именем свойства, а значение поля
//     - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы 
// методом reset.
const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formValue = {
        mail,
        password,
    };
    
    if (mail === "" || password === "") {
        return alert("Please fill in all the fields!");
    }
    console.log(formValue);
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(name, value )
    // })
    event.currentTarget.reset();
}