let textFields = document.querySelectorAll('.text-field');

let errorFileds = document.querySelectorAll('.error');
fields.addEventListener('submit', (event) => {

    event.preventDefault();
    textFields.forEach((textField) => {
        const value = textField.value;
        const name = textField.name;
        let errorDiv = document.querySelector(`.${name}.error`);
        var mailformat= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        console.log(name);
        if (name!='email' &&value.trim() === "") {
            errorDiv.style.visibility = "visible";
        }
        else if(name==='email' && !value.match(mailformat)){
            errorDiv.style.visibility = "visible";

        }
        else {
            errorDiv.style.visibility = "hidden";
        }

    })
})