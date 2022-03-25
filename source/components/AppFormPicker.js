import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({item, name, placeholder}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <AppPicker
        items={item}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[item]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
