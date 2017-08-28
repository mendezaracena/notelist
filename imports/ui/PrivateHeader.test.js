import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { PrivateHeader } from './PrivateHeader';

if (Meteor.isClient) {
  describe('PrivateHeader', function () {
    it('should set button log out', function () {
      const wrapper = mount( <PrivateHeader title="test title" handleLogout={() => {}}/> );
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });

    it('should use title prop as h1 text', function () {
      const title = 'test title here';
      const wrapper = mount( <PrivateHeader title={title} handleLogout={() => {}}/>);
      const h1Text = wrapper.find('h1').text();

      expect(h1Text).toBe(title);
    });

    it('should call the function', function () {
      const spy = expect.createSpy();
      spy();
      expect(spy).toHaveBeenCalled();
    });

    it('should call handleLogout on click', function () {
      const spy = expect.createSpy();
      const wrapper = mount( <PrivateHeader title='title' handleLogout={spy} />);

      wrapper.find('button').simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });
}
