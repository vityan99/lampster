import { createElement } from "../../Functions/createElement.js";

export class ProductButton {
  _element = null;

  constructor(
    buttonTitle,
    id,

    img,
    title,
    price,
    wattsId,
    colorId
  ) {
    this._buttonTitle = buttonTitle;
    this._id = id;
    this._img = img;
    this._title = title;
    this._price = price;
    this._wattsId = wattsId;
    this._colorId = colorId;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._addListeners();
  }

  _getTemplate() {
    return `<button class="btn btn--buy">${this._buttonTitle}</button>`;
  }

  _addListeners() {
    this._element.addEventListener("click", () => {
      this._element.dispatchEvent(
        new CustomEvent("addToCart", {
          bubbles: true,
          detail: {
            productId: this._id,
            img: this._img,
            title: this._title,
            price: this._price,
            wattsId: this._wattsId,
            colorId: this._colorId,
          },
        })
      );
    });
  }

  get element() {
    return this._element;
  }
}
