// import "./slider.scss";

class Slider {
  constructor(sliderElement) {
    this.sliderElement = sliderElement;
    this.slides = this.sliderElement.querySelectorAll(".slide");
    this.nextBtn = this.sliderElement.querySelector(".btn-next");
    this.prevBtn = this.sliderElement.querySelector(".btn-prev");
    this.curSlide = 0;
    this.maxSlide = this.slides.length - 1;

    this.init();
  }

  init() {
    this.slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });

    this.nextBtn.addEventListener("click", this.next.bind(this));
    this.prevBtn.addEventListener("click", this.prev.bind(this));
  }

  goToSlide(slide) {
    this.slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  next() {
    if (this.curSlide === this.maxSlide) {
      this.curSlide = 0;
    } else {
      this.curSlide++;
    }
    this.goToSlide(this.curSlide);
  }

  prev() {
    if (this.curSlide === 0) {
      this.curSlide = this.maxSlide;
    } else {
      this.curSlide--;
    }
    this.goToSlide(this.curSlide);
  }
}

const slider = document.querySelector(".slider");
if (slider) {
  new Slider(slider);
}
