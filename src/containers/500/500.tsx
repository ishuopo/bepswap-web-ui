/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';

import Helmet from 'components/helmet';
import Label from 'components/uielements/label';
import Logo from 'components/uielements/logo';

import { AppLayout } from './style';

class Page500 extends Component {
  render() {
    return (
      <AppLayout>
        <Helmet title="500" content="Under Maintenance" />
        <Logo name="bepswap" type="long" />
        <Label size="large">Thanks for trying out BEPSwap.</Label>
        <Label size="big">Temporarily down for maintenance.</Label>
      </AppLayout>
    );
  }
}

export default Page500;
