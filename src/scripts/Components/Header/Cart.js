import { createElement } from "../../Functions/createElement.js";

export class Cart {
  _element = null;
  _subElements = null;
  _state = {
    totalInfo: {},
  };

  constructor(Icon, CartIcon, CartCalucate, CartPanel, CartItem, cartConfig) {
    this._Icon = Icon;
    this._CartIcon = CartIcon;
    this._CartCalculate = CartCalucate;
    this._CartPanel = CartPanel;
    this._CartItem = CartItem;
    this._cartConfig = cartConfig;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._subElements = this._getSubElements();
    this._render();
  }

  _getTemplate() {
    return `<div class="mini-cart-wrapper">
                <div class="mini-cart" data-element="miniCart"></div>
                <div class="cart-calc" data-element="calculate"></div>
            </div>`;
  }

  _setStateTotalInfo(state) {
    this._state.totalInfo = state;
  }

  _setStateTotalInfoHandler(state) {
    this._setStateTotalInfo(state);
    this._updateCalculate();
  }

  _cartOpenHandler() {
    this._updateUI();
  }

  _generateCartIcon() {
    const { icon } = this._cartConfig;

    return new this._CartIcon(icon, this._cartOpenHandler.bind(this)).element;
  }

  _generateCartCalculate() {
    const { totalPrice, totalCount } = this._state.totalInfo;

    return new this._CartCalculate(totalPrice, totalCount).element;
  }

  _generateCartPanel() {
    const { cartTitle, buttonTitle, iconDelete } = this._cartConfig;

    return new this._CartPanel(cartTitle, this._CartItem, buttonTitle, this._Icon, iconDelete, this._setStateTotalInfoHandler.bind(this));
  }

  _render() {
    this._subElements.miniCart.innerHTML = "";
    this._subElements.miniCart.append(this._generateCartIcon());
    this._subElements.calculate.append(this._generateCartCalculate());

    this._cartPanel = this._generateCartPanel();
    this._subElements.miniCart.append(this._cartPanel.element);
  }

  _updateUI() {
    this._cartPanel._element.classList.toggle("mini-cart-list-wrapper--active");
  }

  _updateCalculate() {
    this._subElements.calculate.innerHTML = "";
    this._subElements.calculate.append(this._generateCartCalculate());
  }

  _getSubElements() {
    return Array.from(this._element.querySelectorAll("[data-element]")).reduce((acc, el) => {
      return {
        ...acc,
        [el.getAttribute("data-element")]: el,
      };
    }, {});
  }

  get element() {
    return this._element;
  }
}
