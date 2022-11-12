import DefaultLayout from '@root/src/components/layout/DefaultLayout/DefaultLayout';
import AddListingComponent from '@root/src/components/pages/AddListing/AddListing';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AddListing = () => {
  const { t: translate } = useTranslation('common');

  return (
    <DefaultLayout t={translate}>
      <AddListingComponent />
    </DefaultLayout>
  );
};

export default AddListing;
