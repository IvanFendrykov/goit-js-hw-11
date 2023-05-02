const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};
const sticky = refs.form.offsetTop;

export default function formSticky() {
  if (window.scrollY > sticky) {
    refs.form.classList.add('on-scroll');
    refs.gallery.style.paddingTop = `72px`;
  } else {
    refs.form.classList.remove('on-scroll');
    refs.gallery.style.paddingTop = `24px`;
  }
}
