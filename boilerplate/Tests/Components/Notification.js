import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Notification } from '@mobile/Components/reusable';

test('Notification component renders correctly if showing failure', () => {
  const tree = renderer.create(
    <Notification
      text='Oops, something went wrong'
      status='FAILURE'
      display={true}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Notification component renders correctly if showing success', () => {
  const tree = renderer.create(
    <Notification
      text='Great! Everything worked'
      status='SUCCESS'
      display={true}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Notification component renders correctly if showing stateless', () => {
  const tree = renderer.create(
    <Notification
      text='This is just an info message'
      status='STATELESS'
      display={true}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Notification component does not render when display is false', () => {
  const tree = renderer.create(
    <Notification
      text='This should not display'
      status='STATELESS'
      display={false}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Notification component renders correctly when passing a view style', () => {
  const tree = renderer.create(
    <Notification
      text='This is just an info message'
      status='STATELESS'
      display={true}
      // eslint-disable-next-line
      viewStyle={{ backgroundColor: 'red' }}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Notification component renders correctly when passing a text style', () => {
  const tree = renderer.create(
    <Notification
      text='This is just an info message'
      status='STATELESS'
      display={true}
      // eslint-disable-next-line
      viewStyle={{ textColor: 'blue' }}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('onPress', () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  // eslint-disable-next-line no-plusplus
  const onPress = () => i++;
  const wrapperPress = shallow(
    <Notification
      text='This is just an info message'
      status='STATELESS'
      display={true}
      onPress={onPress}
    />);

  expect(wrapperPress.prop('onPress')).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate('press');
  expect(i).toBe(1);
});
