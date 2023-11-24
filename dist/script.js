const search_icon = document.getElementsByName('search_icon');
const search_input = document.getElementsByName('search_input');
const search_inside = document.getElementsByClassName('search_inside');
const search_box = document.getElementsByClassName('search_box');

search_icon[0].addEventListener('click', () => {
  search_input[0].focus();
  search_box[0].classList.toggle('hidden');
  console.log('first')
});
search_inside[0].addEventListener('click', (e) => {
    console.log(e.key = 'Enter')
});

const shop_now = ()=>{
    window.location.href = "items.html";
}
const sign_up = ()=>{
    window.location.href = "sign_up.html";
}
const logout = ()=>{
    window.location.href = "logout.html";
}
