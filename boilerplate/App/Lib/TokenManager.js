import { AsyncStorage } from "react-native";
import Keys from "@mobile/Lib/keys";

export default class TokenManager {
  async getRefreshToken() {
    return AsyncStorage.getItem(Keys.REFRESH_TOKEN);
  }

  async getAccessToken() {
    return AsyncStorage.getItem(Keys.AUTH_TOKEN);
  }

  async setTokens(accessToken, refreshToken) {
    await AsyncStorage.setItem(Keys.AUTH_TOKEN, accessToken);
    await AsyncStorage.setItem(Keys.REFRESH_TOKEN, refreshToken);
  }
}
