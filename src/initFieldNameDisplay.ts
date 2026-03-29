import Field from './Field';

const handleNewField = (acfField: any) => {
  const fieldElement = acfField?.$el?.[0];
  if (!(fieldElement instanceof HTMLElement)) return;

  new Field(fieldElement).revealName();
}

const initFieldNameDisplay = () => {
  const acf = (window as any).acf;
  const isAcfFieldGroupEditor = acf?.get('screen') === 'field_group';

  if (isAcfFieldGroupEditor) return;
  if (!acf?.addAction) return;

  acf.addAction("new_field", (acfField: any) => {
    handleNewField(acfField);
  });

  acf.getFields().forEach((acfField: any) => {
    handleNewField(acfField);
  });
}

initFieldNameDisplay();