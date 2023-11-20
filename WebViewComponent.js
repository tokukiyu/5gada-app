// WebViewComponent.js
import React from "react";
import { WebView } from "react-native-webview";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyWebView = () => {
  const navigation = useNavigation();
  const webViewRef = React.useRef(null);

  const customHeaders = {
    "User-Agent": "MyWebViewApp/1.0",
  };

  const handleBackButton = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    } else {
      // No previous page in the WebView, navigate back in your app
      navigation.goBack();
      return true;
    }
  };

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: "https://5gada.com" }}
      sharedCookiesEnabled={true}
      allowsInlineMediaPlayback={true}
      allowsFullscreenVideo={true}
      incognito={false}
      originWhitelist={["*"]}
    />
  );
};

export default MyWebView;
