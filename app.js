function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const newForm = parent.nextElementSibling;
            console.log(input)
            console.log(parent)
            console.log(newForm);

            //check for validation
            if(input.type === "text" && validateUser(input)) {
                nextSlide(parent, newForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, newForm);
            } else if (input.type === 'password' && validateUser(input)) {
                nextSlide(parent, newForm);
            } else {
                parent.style.animation = 'shake 0.5s ease';
            }
            //get rid of animation
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            })
        })
    })
};

function validateUser(user) {
    if(user.value.length < 6) {
        console.log('not enough characters');
        error('rgb(189,87,87)');
    } else {
        error('aquamarine');
        return true;
    };
};

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)) {
        error('aquamarine');
        return true;
    } else {
        error('red');
        console.log('not an email')
    };
};

function nextSlide(parent, newForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    newForm.classList.add('active');
};

function error(color) {
    document.body.style.backgroundColor = color;
};

animatedForm();