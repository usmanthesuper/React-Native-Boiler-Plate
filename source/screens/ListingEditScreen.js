import React, {useState} from 'react';
import * as Yup from 'yup';

import AppForm from '../components/AppForm';
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(1000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {lable: 'Furniture', value: 1},
  {lable: 'Decoration', value: 2},
  {lable: 'Clothing', value: 3},
];

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField maxLength={225} name="title" placeholder="Title" />
        <AppFormField
          keyboardType={'numeric'}
          maxLength={18}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          item={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
