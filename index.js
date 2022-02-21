const mainImgContainer = document.querySelector('.sub-carousel__div--image-wrap');
const subImgContainer = document.querySelectorAll('.sub-carousel__div--image-wrap');
const nextBtn = document.querySelector('.btn--right');
const prevBtn = document.querySelector('.btn--left');
console.log(nextBtn)
nextBtn.addEventListener("click", changeOrderNext);

let classesArr = [];
let orderNoArr = [0, 1, 2];

async function fetchClass() {
  const res = await fetch('./data.json');
  const classesData = await res.json();
  classesArr = classesData;
}
fetchClass()

function changeOrderNext() {
  const pick = orderNoArr[0];
  orderNoArr.push(pick);
  orderNoArr.shift()
  createClassesEl()

}

function changeOrderPrev() {
  const pick = orderNoArr.splice(0, orderNoArr.length - 1);
  orderNoArr.push(pick);
  createClassesEl()
}

function createClassesEl() {
  const orderChangedClassessArr = orderNoArr.map((orderNo) => {
    return classesArr[orderNo]
  })
  createSubClass(orderChangedClassessArr)
}

function createMainClass(data) {
  return `
  <div class="carousel__section--main">
    <img src=${data.img} alt="main-class-img" class="main-carousel__img">
    <p class="main-carousel__text--description">
    ${data.description}<a href=${data.link}></a>
  </p>
  </div>
  `
}

function createSubClass(arr) {
  const html = arr.map((data) => {
    return `
    <section class="carousel__section--sub">
            <span class="sub-carousel__div--image-wrap">
              <img src=${data.img} alt="" class="sub-carousel__img">
            </span>
            <div class="sub-carousel__div">
              <p class="sub-carousel__text--title">${data.name}</p>
              <p class="sub-carousel__text--price">${data.price}원</p>
              <div class="sub-carousel__div--tags">
                <button class="sub-carousel__button--tag">tag</button>
              </div>
            </div>
          </section>
    `
  }).join('');
  console.log(html)
  return html;
}

