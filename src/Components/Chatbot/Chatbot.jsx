import { useEffect } from "react";

const ChatbaseChatbot = () => {
  useEffect(() => {
    // Only add the script if it hasn't been added yet
    if (!document.getElementById("JoiBLI42GOgwSC4LaU35I")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "JoiBLI42GOgwSC4LaU35I";
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    }
  }, []);

  return null; // This component does not render any visible JSX
};

export default ChatbaseChatbot;