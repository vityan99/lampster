import { createElement } from "../../Functions/createElement.js";

export class Filter {
  _element = null;

  constructor(FilterGroup, FieldGroup, OptionGroup, Option, filterCategories) {
    this._FilterGroup = FilterGroup;
    this._FieldGroup = FieldGroup;
    this._OptionGroup = OptionGroup;
    this._Option = Option;
    this._filterCategories = filterCategories;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._render();
  }

  _getTemplate() {
    return `<form class="filter" action="#" data-element="form"></form>`;
  }

  _generateFilterGroup() {
    return this._filterCategories.map((categorie) => {
      const { key, text, unit, groupType, options } = categorie;

      return new this._FilterGroup(this._FieldGroup, this._OptionGroup, this._Option, key, text, unit, groupType, options).element;
    });
  }

  _render() {
    this._element.append(...this._generateFilterGroup());
  }

  get element() {
    return this._element;
  }
}
