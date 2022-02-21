class MainClass {
  constructor(data) {
    this.html = `
      <div class="carousel__section--main">
        <img src=${data.img} alt="main-class-img" class="main-carousel__img">
        <p class="main-carousel__text--description">
        ${data.description}<a href=${data.link}></a>
      </p>
      </div>
      `
  }

}