import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '@mobile/Themes';

// Styles
import styles from '@mobile/Containers/Styles/LaunchScreenStyles';

export default () =>
  <View style={styles.mainContainer}>
    <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
    <ScrollView style={styles.container}>
      <View style={styles.centered}>
        <Image source={Images.launch} style={styles.logo} />
      </View>

      <View style={styles.section} >
        <Image source={Images.ready} />
        <Text style={styles.sectionText}>
          {"This probably isn't what your app is going to look like."}
        </Text>
      </View>

    </ScrollView>
  </View>;
