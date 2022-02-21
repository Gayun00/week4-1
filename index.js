const mainImgContainer = document.querySelector('.sub-carousel__div--image-wrap');
const subImgContainer = document.querySelectorAll('.sub-carousel__div--image-wrap')
let classesArr = [];

async function fetchClass() {
  const res = await fetch('./data.json');
  const classesData = await res.json();
  classesArr = classesData;
}
fetchClass()

function createClassesEl() {
  const imgEl = document.createElement('img');
  //

}