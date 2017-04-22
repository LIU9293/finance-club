import React from 'react';
import { shallow } from 'enzyme';
import RoundButton from '../index';

describe('<RoundButton />', () => {

  it('Round Button will render a <button> tag', () => {
    const renderedComponent = shallow(<RoundButton />);
    expect(renderedComponent.is('button')).toBe(true);
  });

  it('has a default color prop', () => {
    const renderedComponent = shallow(<RoundButton />);
    expect(renderedComponent.props().color).toBe('rgb(92, 124, 250)');
  });

});
