import { createElement } from "./Functions/createElement.js";

import { Header } from "./Components/Header/Header.js";
import { Icon } from "./Components/Header/Icon.js";
import { LogoText } from "./Components/Header/LogoText.js";
import { logoConfig } from "./Configurations/logoConfig.js";
import { MenuItem } from "./Components/Header/MenuItem.js";
import { menuConfig } from "./Configurations/menuConfig.js";
import { Search } from "./Components/Header/Search.js";
import { SearchButton } from "./Components/Header/SearchButton.js";
import { SearchForm } from "./Components/Header/SeachForm.js";
import { searchIcon, searchFormData } from "./Configurations/seachConfig.js";
import { Cart } from "./Components/Header/Cart.js";
import { CartIcon } from "./Components/Header/CartIcon.js";
import { CartCalculate } from "./Components/Header/CartCalculate.js";
import { CartPanel } from "./Components/Header/CartPanel.js";
import { CartItem } from "./Components/Header/CartItem.js";
import { cartConfig } from "./Configurations/cartConfig.js";

import { Filter } from "./Components/Filter/Filter.js";
import { FilterGroup } from "./Components/Filter/FilterGroup.js";
import { FiledGroup } from "./Components/Filter/FieldGroup.js";
import { OptionGroup } from "./Components/Filter/OptionGroup.js";
import { Option } from "./Components/Filter/Option.js";
import { filterCategories } from "./Configurations/filterConfig.js";

import { ProductList } from "./Components/Products/ProductList.js";
import { Product } from "./Components/Products/Product.js";
import { IconMore } from "./Components/Products/IconMore.js";
import { IconFavorite } from "./Components/Products/IconFavorite.js";
import { ProductImg } from "./Components/Products/ProductImg.js";
import { ProductChoice } from "./Components/Products/ProductChoice.js";
import { Choice } from "./Components/Products/Choice.js";
import { ProductButton } from "./Components/Products/ProductButton.js";
import { products } from "./Configurations/productConfig.js";

import { Popup } from "./Components/Products/Popup.js";
import { PopupInfo } from "./Components/Products/PopupInfo.js";

document.body.addEventListener("popupImg", (e) => {
  popup.openImg(e.detail);
});

document.body.addEventListener("popupInfo", (e) => {
  popup.openInfo(e.detail);
});

document.body.addEventListener("addToCart", (e) => {});

class App {
  _element = null;

  constructor(
    Header,
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
    cartConfig,
    Filter,
    FilterGroup,
    FiledGroup,
    OptionGroup,
    Option,
    filterCategories,
    ProductList,
    Product,
    IconMore,
    IconFavorite,
    ProductImg,
    ProductChoice,
    Choice,
    ProductButton,
    products
  ) {
    this._Header = Header;
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
    this._Filter = Filter;
    this._FilterGroup = FilterGroup;
    this._FiledGroup = FiledGroup;
    this._OptionGroup = OptionGroup;
    this._Option = Option;
    this._filterCategories = filterCategories;
    this._ProductList = ProductList;
    this._Product = Product;
    this._IconMore = IconMore;
    this._IconFavorite = IconFavorite;
    this._ProductImg = ProductImg;
    this._ProductChoice = ProductChoice;
    this._Choice = Choice;
    this._ProductButton = ProductButton;
    this._products = products;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._render();
  }

  _getTemplate() {
    return `<div class="container"></div>`;
  }

  _generateHeader() {
    return new this._Header(
      this._Icon,
      this._LogoText,
      this._logoConfig,
      this._MenuItem,
      this._menuConfig,
      this._Search,
      this._SearchButton,
      this._SearchForm,
      this._searchIcon,
      this._searchFormData,
      this._Cart,
      this._CartIcon,
      this._CartCalculate,
      this._CartPanel,
      this._CartItem,
      this._cartConfig
    ).element;
  }

  _generateFilter() {
    return new this._Filter(this._FilterGroup, this._FiledGroup, this._OptionGroup, this._Option, this._filterCategories).element;
  }

  _generateProductList() {
    return new this._ProductList(
      this._Product,
      this._IconMore,
      this._IconFavorite,
      this._ProductImg,
      this._ProductChoice,
      this._Choice,
      this._ProductButton,
      this._products
    ).element;
  }

  _render() {
    this._element.append(this._generateHeader());
    this._element.append(this._generateFilter());
    this._element.append(this._generateProductList());
  }

  get element() {
    return this._element;
  }
}

const root = document.querySelector(".root");
const app = new App(
  Header,
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
  cartConfig,
  Filter,
  FilterGroup,
  FiledGroup,
  OptionGroup,
  Option,
  filterCategories,
  ProductList,
  Product,
  IconMore,
  IconFavorite,
  ProductImg,
  ProductChoice,
  Choice,
  ProductButton,
  products
);
const popup = new Popup(PopupInfo, IconMore);

root.insertAdjacentElement("beforeend", app.element);
root.insertAdjacentElement("beforeend", popup.element);
