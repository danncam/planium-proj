function erasefields(){
    document.getElementById("form_id").reset();
};

function submitform(){
    name_form = document.getElementById("name")
    age_form = document.getElementById("age")
    email_form = document.getElementById("email")

    console.log(name_form, age_form, email_form)

};

//module.exports