function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const topOffset = section.offsetTop;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('#navigation button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

function toggleLoginForm() {
  const loginForm = document.getElementById('login-form');
  const loginButton = document.getElementById('login-button');
  const signUpButton = document.getElementById('signup-button');

  loginForm.classList.toggle('visible');
  loginButton.style.display = loginForm.classList.contains('visible') ? 'none' : 'block';

  signUpButton.style.display = 'none';

  document.addEventListener('click', function(event) {
    const isClickInsideLogin = login.contains(event.target);
    const isClickInsideSignUp = signUpButton.contains(event.target);
    
    if (!isClickInsideLogin && !isClickInsideSignUp) {
      loginForm.classList.remove('visible');
      loginButton.style.display = 'block';

      signUpButton.style.display = 'block';
    }
  });
}

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username.trim() !== '' && password.trim() !== '') {
    const loggedInMessage = document.createElement('p');
    loggedInMessage.textContent = `You are now logged in as ${username}`;
    loggedInMessage.classList.add('logged-in-message');


    loginButton.style.display = 'none';
    signUpButton.style.display = 'none';

 
    document.body.appendChild(loggedInMessage);
  } else {

    alert('Please enter a valid username and password.');
  }
});

function toggleSignUpForm() {
  const signUpForm = document.getElementById('signup-form');
  const signUpButton = document.getElementById('signup-button');
  
  signUpForm.classList.toggle('visible');
  signUpButton.style.display = signUpForm.classList.contains('visible') ? 'none' : 'block';

  document.addEventListener('click', function(event) {
    const isClickInsideSignUp = signup.contains(event.target);
    if (!isClickInsideSignUp) {
      signUpForm.classList.remove('visible');
      signUpButton.style.display = 'block';
    }
  });
}

const signUpForm = document.getElementById('signup-form');
const signUpButton = document.getElementById('signup-button');

signUpButton.addEventListener('click', toggleSignUpForm);

signUpForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  alert(`Congratulations, ${username}! Your account has been created.`);
});

