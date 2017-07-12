import React from "react";
import { Text, View, StyleSheet } from "react-native";
import styles from "@mobile/components/reusable/Styles/NotificationStyles";

export const NotificationStatus = {
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
  STATELESS: 'STATELESS',
};

type Props = {
  text: string,
  status: NotificationStatus,
  display: boolean,
  viewStyle: ?View.props.style,
};

export default class Notification extends React.Component {
  static defaultProps = {
    viewStyle: null,
  };
  props: Props;
  
  getViewStyle() {
    if (this.props.status === NotificationStatus.SUCCESS)
      return styles.successContainer;
    if (this.props.status === NotificationStatus.FAILURE)
      return styles.failureContainer;
    if (this.props.status === NotificationStatus.STATELESS)
      return styles.statelessContainer;
    return undefined;
  }

  getTextStyle() {
    if (this.props.status === NotificationStatus.SUCCESS)
      return styles.successText;
    if (this.props.status === NotificationStatus.FAILURE)
      return styles.failureText;
    if (this.props.status === NotificationStatus.STATELESS)
      return styles.statelessText;
    return undefined;
  }

  render() {
    const { text, display } = this.props;
    if (!display) return null;

    const viewStyle = StyleSheet.flatten([
      this.getViewStyle(),
      this.props.viewStyle
    ]);

    return (
      <View style={viewStyle}>
        <Text style={this.getTextStyle()}>
          {text}
        </Text>
      </View>
    );
  }
}
