const form = document.querySelector('.form__myform');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

const patternPhone = new RegExp(/^\+?\d{1}\s?[(]?\d{3}[)]?\s?\d{3}[-]?\d{2}[-]?\d{2}$/);

const patternEmail = new RegExp(/^[a-zA-Zа-яА-ЯёЁ0-9][a-zA-Zа-яА-ЯёЁ0-9.!#$%&'*+/=?^_`{|}~-]*@[a-zA-Zа-яА-ЯёЁ0-9][a-zA-Zа-яА-ЯёЁ0-9-]{0,61}\.[a-zA-Zа-яА-ЯёЁ0-9]{2,}$/);

// new RegExp("/d")  - c кавычками не работает!!!

form.noValidate = true;

const isValid = (pattern, field) => pattern.test(field.value);

form.addEventListener('input', () => {

  if (phone.value === '' || isValid(patternPhone, phone)) {
    phone.classList.remove('form__error');
    phone.setCustomValidity('');
  }

  if (email === '' || isValid(patternEmail, email)) {
    email.classList.remove('form__error');
    email.setCustomValidity(''); // фокс = ок, хром - сообщение :(
    // email.setCustomValidity(' '); // с этим хром работает без лишнего сообщения, а фокс - выдаёт его
     }
});

const onSubmitForm = (evt) => {
  evt.preventDefault();

  if (phone.value === '') {
    phone.classList.add('form__error');

    phone.setCustomValidity('Поле обязательно для заполнения.');
    phone.reportValidity();

  } else if (email.value === '') {
    email.setCustomValidity('Поле обязательно для заполнения.');
    email.classList.add('form__error');
    email.reportValidity();

  } else if (!isValid(patternPhone, phone)) {
    phone.setCustomValidity('Формат телефона: +7(983)745-45-45 или 8(800)000-00-00, или +79837454545, 11 цифр!');
    phone.classList.add('form__error');
    phone.reportValidity();

  } else if (!isValid(patternEmail, email)) {
    email.reportValidity();
    email.setCustomValidity('Пожалуйста, введите корректный email: имя@домен.рф');
    email.classList.add('form__error');
  }

  if (isValid(patternPhone, phone) && isValid(patternEmail, email)) {
    form.submit();
    form.reset();
    // console.log('OK!');
  }
};

const validatesForm = () => {
  form.addEventListener('submit', onSubmitForm);
};

export { validatesForm };
