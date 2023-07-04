const wrapper = document;querySelector('.wrapper');
const signUpLink = document;querySelector('.signUp- link');
const signInLink = document;querySelector('.signIn- link');

signUpLink.addEventListener('Click',()=>{
    wrapper.classList.add('animated-signIn');
    wrapper.classList.remove('animated-signUp');
});
signInLink.addEventListener('Click',()=>{
    wrapper.classList.add('animated-signUp');
    wrapper.classList.remove('animated-signIn');
});