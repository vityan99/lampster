import { createElement } from "../../Functions/createElement.js";

export class Search {
  _element = null;
  _subElements = null;

  constructor(SearchButton, SearchForm, searchIcon, searchFormData) {
    this._SearchButton = SearchButton;
    this._SearchForm = SearchForm;
    this._searchIcon = searchIcon;
    this._searchFormData = searchFormData;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._subElements = this._getSubElements();
    this._render();
  }

  _getTemplate() {
    return `<div class="mini-search-wrapper" data-mini-search-wrapper>
                <div class="mini-search" data-element="miniSearch"></div>
            </div>`;
  }

  _searchOpenHandler() {
    this._updateUI();
  }

  _generateSearchButton() {
    const { icon } = this._searchIcon;

    return new this._SearchButton(icon, this._searchOpenHandler.bind(this)).element;
  }

  _generateSearchForm() {
    const { placeholder } = this._searchFormData;

    this._searchForm = new this._SearchForm(placeholder);
    return this._searchForm.element;
  }

  _render() {
    this._subElements.miniSearch.innerHTML = "";
    this._subElements.miniSearch.append(this._generateSearchButton());
    this._subElements.miniSearch.append(this._generateSearchForm());
  }

  _updateUI() {
    this._searchForm._element.classList.toggle("mini-search__form-wrapper--active");
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
