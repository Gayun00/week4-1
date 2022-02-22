const mainImgContainer = document.querySelector('.carousel__section--main');
const subImgContainer = document.querySelector('.carousel-wrap__section--sub');
const nextBtn = document.querySelector('.btn--next');
const prevBtn = document.querySelector('.btn--prev');

nextBtn.addEventListener("click", changeOrderNext);
prevBtn.addEventListener("click", changeOrderPrev);

let classesArr = [];
let orderNoArr = [0, 1, 2];

async function fetchClass() {
  const res = await fetch('./data/data.json');
  const classesData = await res.json();
  classesArr = classesData;
  createClassesEl();
}

fetchClass()

function changeOrderNext() {
  const pick = orderNoArr[0];
  orderNoArr.push(pick);
  orderNoArr.shift()
  createClassesEl()

}

function changeOrderPrev() {
  const pick = orderNoArr[orderNoArr.length - 1];
  orderNoArr.unshift(pick);
  orderNoArr.pop()
  createClassesEl()
}

function createClassesEl() {
  const orderChangedClassessArr = orderNoArr.map((orderNo) => {
    return classesArr[orderNo]
  })
  const mainClassHtml = createMainClass(orderChangedClassessArr[0]);
  mainImgContainer.innerHTML = mainClassHtml;

  const subClassHtml = createSubClass(orderChangedClassessArr.slice(1,3));
  subImgContainer.innerHTML = subClassHtml;
}

function createMainClass(data) {
  return `
    <div class="main-carousel__div--img-wrap">
      <img src=${data.img} alt="main-class-img" class="main-carousel__img">
    </div>
    <div class="main-carousel__text--description">
    <p>${data.description1}</p>
    <p>${data.description2}
    <a href=${data.link}></a>
    </p>
  </div>
  `
}

function createSubClass(arr) {
  const tagsColor = {
    '광운점': '#a27fde',//purple
    '부산동래점': '#00afe3',//blue
    '송파점': '#46cfa7',//green
    '구로점': '#ffcd32',//yellow
    '광화문점': '#ffa04d'//orange
  }
  const html = arr.map((data) => {
    return `
    <section class="carousel__section--sub">
            <span class="sub-carousel__div--image-wrap">
              <div class="sub-carousel__img" style="background-image: url(${data.img})"></div>
            </span>
            <div class="sub-carousel__div">
              <p class="sub-carousel__text--title">${data.name}</p>
              <p class="sub-carousel__text--price">${data.price}원</p>
              <div class="sub-carousel__div--tags">
                ${data.tags.map((tag) => {
                  return `<button class="sub-carousel__button--tag" style="color:${tagsColor[tag]}; border: 1px solid ${tagsColor[tag]}">${tag}</button>`
                }).join('')}
              </div>
            </div>
          </section>
    `
  }).join('');
  return html;
}

function createTagsEl(tags) {
  return tags.map((tag) => {
    return `<button class="sub-carousel__button--tag">${tag}</button>`
  }).join('');
}

