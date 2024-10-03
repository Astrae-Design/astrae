import { useEffect, forwardRef, ForwardedRef } from "react";

interface ChatwootSettings {
  hideMessageBubble: boolean;
  position: "left" | "right";
  locale: string;
  type: "standard" | "expanded_bubble";
}

interface ChatwootSDKSettings {
  websiteToken: string;
  baseUrl: string;
}

declare global {
  interface Window {
    chatwootSettings: ChatwootSettings;
    chatwootSDK: {
      run: (settings: ChatwootSDKSettings) => void;
    };
  }
}

const ChatwootWidget = forwardRef<HTMLDivElement, unknown>(
  (_props, _ref: ForwardedRef<HTMLDivElement>) => {
    useEffect(() => {
      window.chatwootSettings = {
        hideMessageBubble: false,
        position: "right",
        locale: "en",
        type: "standard",
      };

      console.log(_props);
      console.log(_ref);

      (function (d: Document, t: string) {
        const BASE_URL = "https://app.chatwoot.com";
        const g = d.createElement(t) as HTMLScriptElement;
        const s = d.getElementsByTagName(t)[0];
        g.src = BASE_URL + "/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode!.insertBefore(g, s);

        g.onload = function () {
          window.chatwootSDK.run({
            websiteToken: "SCsC5jYCzCzYsseD62rkGh8H",
            baseUrl: BASE_URL,
          } as ChatwootSDKSettings);

          // Override z-index here
          const widgetBubble = document.querySelector(
            ".woot-widget-bubble"
          ) as HTMLElement;
          if (widgetBubble) {
            widgetBubble.setAttribute("style", "z-index: 10 !important");
          }
        };
      })(document, "script");
    });

    return null;
  }
);

ChatwootWidget.displayName = "ChatwootWidget";

export default ChatwootWidget;
