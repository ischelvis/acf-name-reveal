export default class Field {
  readonly field: HTMLElement;
  readonly fieldName: string | undefined;
  readonly fieldLabel: HTMLElement | null;
  readonly parentFieldNames: string[];
  readonly parentFieldsPath: string;
  readonly hasParentFields: boolean;
  readonly nameDisplayElement: HTMLParagraphElement;

  constructor(field: HTMLElement) {
    this.field = field;
    this.fieldName = this.field.dataset.name;
    this.fieldLabel = this.field.querySelector('.acf-label');
    this.parentFieldNames = this.extractParentFieldNames();
    this.parentFieldsPath = this.parentFieldNames.join('_');
    this.hasParentFields = this.parentFieldNames.length > 0;
    this.nameDisplayElement = this.buildNameDisplayElement();
  }

  private extractParentFieldNames(): string[] {
    const parentFieldNames: string[] = [];

    let currentElement = this.field.parentElement;
    let parentField: HTMLElement | null;

    while ((parentField = currentElement?.closest<HTMLElement>('.acf-field') ?? null)) {
      const parentFieldName = parentField.dataset.name;
      parentFieldName && parentFieldNames.unshift(parentFieldName);

      currentElement = parentField.parentElement;
    }

    return parentFieldNames;
  }

  private buildNameDisplayElement() {
    const nameDisplayElement = document.createElement('p');
    nameDisplayElement.className = 'acf-field-name-reveal';
    nameDisplayElement.style.fontStyle = 'italic';
    nameDisplayElement.style.wordBreak = 'break-word';

    const fieldNameElement = document.createElement('span');
    fieldNameElement.style.userSelect = 'all';
    if (!this.fieldName) fieldNameElement.style.color = 'red';
    fieldNameElement.textContent = this.fieldName || 'undefined';
    nameDisplayElement.appendChild(fieldNameElement);

    if (!this.hasParentFields) return nameDisplayElement;

    fieldNameElement.style.fontWeight = '500';

    const parentFieldsElement = document.createElement('span');
    parentFieldsElement.style.color = '#667085';
    parentFieldsElement.textContent = `${this.parentFieldsPath}_`;
    nameDisplayElement.prepend(parentFieldsElement);

    return nameDisplayElement;
  }

  public revealName() {
    if (this.fieldLabel) {
      this.fieldLabel.insertAdjacentElement('beforeend', this.nameDisplayElement);
      return;
    }

    this.field.insertAdjacentElement('afterbegin', this.nameDisplayElement);
  }
}