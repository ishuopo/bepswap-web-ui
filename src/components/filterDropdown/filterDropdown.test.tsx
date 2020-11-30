import React from 'react';

import { create } from 'react-test-renderer';

import { mount } from 'enzyme';

import { TxDetailsTypeEnum } from 'types/generated/midgard';

import FilterDropdown, { FilterValue } from './filterDropdown';

describe('FilterDropdown', () => {
  const props: {
    onClick: () => void;
    value: FilterValue;
  } = {
    onClick: jest.fn(),
    value: TxDetailsTypeEnum.Swap,
  };
  const component = mount(<FilterDropdown {...props} />);

  it('Matches the snapshot', () => {
    const snapshot = create(<FilterDropdown {...props} />);
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  it('has wrapper div', () => {
    expect(component.find('.dropdown-wrapper')).toHaveLength(1);
  });
  it('has 2 buttons for desktop and mobile', () => {
    expect(component.find('button')).toHaveLength(2);
  });
  it('has 2 icons for desktop and mobile', () => {
    expect(component.find('svg')).toHaveLength(2);
  });
});
