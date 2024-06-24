import { logoConfig } from "../../Configurations/logoConfig.js";
import { createElement } from "../../Functions/createElement.js";

export class Header {
  _element = null;
  _subElements = null;
  _state = {
    activeMenu: "",
  };

  constructor(
    Icon,
    LogoText,
    logoConfig,
    MenuItem,
    menuConfig,
    Search,
    SearchButton,
    SearchForm,
    searchIcon,
    searchFormData,
    Cart,
    CartIcon,
    CartCalculate,
    CartPanel,
    CartItem,
    cartConfig
  ) {
    this._Icon = Icon;
    this._LogoText = LogoText;
    this._logoConfig = logoConfig;
    this._MenuItem = MenuItem;
    this._menuConfig = menuConfig;
    this._Search = Search;
    this._SearchButton = SearchButton;
    this._SearchForm = SearchForm;
    this._searchIcon = searchIcon;
    this._searchFormData = searchFormData;
    this._Cart = Cart;
    this._CartIcon = CartIcon;
    this._CartCalculate = CartCalculate;
    this._CartPanel = CartPanel;
    this._CartItem = CartItem;
    this._cartConfig = cartConfig;
    this._init();
  }

  _init() {
    this._setStateActiveMenu();
    this._element = createElement(this._getTemplate());
    this._subElemenets = this._getSubElements();
    this._render();
  }

  _getTemplate() {
    return `<header class="header">
                <a href="#" class="logo" data-element="logo"></a>
                <ul class="menu" data-element="menu"></ul>
                <div class="header__control" data-element="headerControl"></div>
            </header>`;
  }

  _setStateActiveMenu() {
    if (window.location.pathname.includes("index.html")) {
      this._state.activeMenu = "";
    }
  }

  _generateLogoIcon() {
    const { logoIcon } = logoConfig;

    return new this._Icon(logoIcon).element;
  }

  _generateLogoText() {
    const { logoText } = logoConfig;
    const { firstPart, secondPart } = logoText;

    return new this._LogoText(firstPart, secondPart).element;
  }

  _generateMenuItems() {
    return this._menuConfig.map(({ title, link }) => {
      return new this._MenuItem(title, link, this._state.activeMenu).element;
    });
  }

  _generateSearch() {
    return new this._Search(this._SearchButton, this._SearchForm, this._searchIcon, this._searchFormData).element;
  }

  _generateCart() {
    return new this._Cart(this._Icon, this._CartIcon, this._CartCalculate, this._CartPanel, this._CartItem, this._cartConfig).element;
  }

  _render() {
    this._subElemenets.logo.append(this._generateLogoIcon());
    this._subElemenets.logo.append(this._generateLogoText());
    this._subElemenets.menu.append(...this._generateMenuItems());
    this._subElemenets.headerControl.append(this._generateSearch());
    this._subElemenets.headerControl.append(this._generateCart());
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
