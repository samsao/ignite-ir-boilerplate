import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import styles from '@mobile/components/reusable/Styles/NotificationStyles';

export const NotificationStatus = {
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
  STATELESS: 'STATELESS',
};

type NotificationStatusEnum = NotificationStatus.FAILURE | NotificationStatus.SUCCESS | NotificationStatus.STATELESS;

type Props = {
  text: string,
  status: NotificationStatusEnum,
  display: boolean,
  textStyle: StyleSheet.Styles,
  viewStyle: StyleSheet.Styles,
  onPress: () => any,
};

export default class Notification extends React.Component {
  static defaultProps = {
    viewStyle: {},
    textStyle: {},
    onPress: null,
  };
  props: Props;

  getViewStyle() {
    if (this.props.status === NotificationStatus.SUCCESS) { return styles.successContainer; }
    if (this.props.status === NotificationStatus.FAILURE) { return styles.failureContainer; }
    if (this.props.status === NotificationStatus.STATELESS) { return styles.statelessContainer; }
    return undefined;
  }

  getTextStyle() {
    if (this.props.status === NotificationStatus.SUCCESS) { return styles.successText; }
    if (this.props.status === NotificationStatus.FAILURE) { return styles.failureText; }
    if (this.props.status === NotificationStatus.STATELESS) { return styles.statelessText; }
    return undefined;
  }

  render() {
    const { text, display, onPress } = this.props;
    if (!display) return null;

    const viewStyle = StyleSheet.flatten([
      this.getViewStyle(),
      this.props.viewStyle,
    ]);
    const textStyle = StyleSheet.flatten([
      this.getTextStyle(),
      this.props.textStyle,
    ]);

    const notification = (
      <View style={viewStyle}>
        <Text style={textStyle}>
          {text}
        </Text>
      </View>
    );
    if (!onPress) return notification;
    return (
      <TouchableHighlight onPress={onPress}>
        {notification}
      </TouchableHighlight>
    );
  }
}
