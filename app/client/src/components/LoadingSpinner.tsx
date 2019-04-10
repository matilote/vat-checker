import React from 'react';
import {Loader} from 'semantic-ui-react'

const LoadingSpinner = (): JSX.Element => (
    <Loader active inline='centered'>Loading data</Loader>
);

export default LoadingSpinner;