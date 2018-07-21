import React from 'react';
import {shallow} from 'enzyme';
import HomePage from '../../components/HomePage';

test('HomePage should render', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});
