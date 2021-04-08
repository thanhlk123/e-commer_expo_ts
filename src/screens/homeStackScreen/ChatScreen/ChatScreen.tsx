import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  Linking,
} from "react-native";
import styled from "styled-components/native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  Avatar,
  Bubble,
  GiftedChat,
  IMessage,
  SystemMessage,
  Send,
} from "react-native-gifted-chat";
import { MaterialIcons } from "@expo/vector-icons";
import AccessoryBar from "./common/AccessoryBar";
import CustomActions from "./common/CustomActions";
import CustomView from "./common/CustomView";

import Loading from "./common/Loading";

const demoMessageData = [
  {
    _id: 9,
    text: "#awesome 3",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 8,
    text: "#awesome 2",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 7,
    text: "#awesome",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 6,
    text: "Paris",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/280px-Paris_-_Eiffelturm_und_Marsfeld2.jpg",
    sent: true,
    received: true,
  },
  {
    _id: 5,
    text: "Send me a picture!",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 4,
    text: "",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
    },
    sent: true,
    received: true,
    location: {
      latitude: 48.864601,
      longitude: 2.398704,
    },
  },
  {
    _id: 3,
    text: "Where are you?",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 2,
    text: "Yes, and I use #GiftedChat!",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
    },
    sent: true,
    received: true,
  },
  {
    _id: 1,
    text: "Are you building a chat app?",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: 10,
    text: "This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT",
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "😋 Yes",
          value: "yes",
        },
        {
          title:
            "📷 Yes, let me show you with a picture! Again let me show you with a picture!",
          value: "yes_picture",
        },
        {
          title: "😞 Nope. What?",
          value: "no",
        },
      ],
    },
    user: {
      _id: 2,
      name: "React Native",
    },
  },
  {
    _id: 20,
    text: "This is a quick reply. Do you love Gifted Chat? (checkbox)",
    createdAt: new Date(),
    quickReplies: {
      type: "checkbox", // or 'checkbox',
      values: [
        {
          title: "Yes",
          value: "yes",
        },
        {
          title: "Yes, let me show you with a picture!",
          value: "yes_picture",
        },
        {
          title: "Nope. What?",
          value: "no",
        },
      ],
    },
    user: {
      _id: 2,
      name: "React Native",
    },
  },
  {
    _id: 30,
    createdAt: new Date(),
    video: "https://media.giphy.com/media/3o6ZthZjk09Xx4ktZ6/giphy.mp4",
    user: {
      _id: 2,
      name: "React Native",
    },
  },
  {
    _id: 31,
    createdAt: new Date(),
    audio:
      "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3",
    user: {
      _id: 2,
      name: "React Native",
    },
  },
];

const demoEarlierMessageData = [
  {
    _id: Math.round(Math.random() * 1000000),
    text:
      "It uses the same design as React, letting you compose a rich mobile UI from declarative components https://facebook.github.io/react-native/",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text:
      "It uses the same design as React, letting you compose a rich mobile UI from declarative components https://facebook.github.io/react-native/",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text:
      "It uses the same design as React, letting you compose a rich mobile UI from declarative components https://facebook.github.io/react-native/",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text:
      "It uses the same design as React, letting you compose a rich mobile UI from declarative components https://facebook.github.io/react-native/",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "React Native lets you build mobile apps using only JavaScript",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer",
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "This is a system message.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    system: true,
  },
];

const user = {
  _id: 1,
  name: "Developer",
};

const otherUser = {
  _id: 2,
  name: "React Native",
  avatar: "https://facebook.github.io/react/img/logo_og.png",
};

const ChatScreen = () => {
  const navigation = useNavigation();
  const route: any = useRoute();

  const { channel } = route.params;

  const [messages, setMessages] = useState<any>(demoMessageData);
  const [loadEarlier, setLoadEarlier] = useState(true);
  const [typingText, setTypingText] = useState(null);
  const [isLoadingEarlier, setLoadingEarlier] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const onLoadEarlier = () => {
    setLoadingEarlier(true);

    setTimeout(() => {
      setMessages([...messages, ...demoEarlierMessageData]);
      setLoadEarlier(true);
      setLoadingEarlier(false);
    }, 1500); // simulating network
  };

  const onSend = (messagesss: any = []) => {
    const sentMessages = [{ ...messagesss[0], sent: true, received: true }];
    console.log("send message", sentMessages);
    let newMessage = GiftedChat.append(
      messages,
      sentMessages,
      Platform.OS !== "web"
    );
    console.log("new message", newMessage);
    setMessages(newMessage);
  };

  const parsePatterns = (_linkStyle: any) => {
    return [
      {
        pattern: /#(\w+)/,
        style: { textDecorationLine: "underline", color: "darkorange" },
        onPress: () => Linking.openURL("http://gifted.chat"),
      },
    ];
  };

  const onQuickReply = (replies) => {
    const createdAt = new Date();
    if (replies.length === 1) {
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies[0].title,
          user,
        },
      ]);
    } else if (replies.length > 1) {
      onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: replies.map((reply) => reply.title).join(", "),
          user,
        },
      ]);
    } else {
      console.warn("replies param is not set correctly");
    }
  };

  const onSendFromUser = (messages: IMessage[] = []) => {
    const createdAt = new Date();
    const messagesToUpload = messages.map((message) => ({
      ...message,
      user,
      createdAt,
      _id: Math.round(Math.random() * 1000000),
    }));
    onSend(messagesToUpload);
  };

  const renderBubble = (props: any) => {
    return <Bubble {...props} />;
  };

  const renderAccessory = () => (
    <AccessoryBar
      onSend={onSendFromUser}
      isTyping={() => setIsTyping(!isTyping)}
    />
  );

  const renderCustomActions = (props) =>
    Platform.OS === "web" ? null : (
      <CustomActions {...props} onSend={onSendFromUser} />
    );

  const renderSystemMessage = (props) => {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  };

  const renderCustomView = (props) => {
    return <CustomView {...props} />;
  };

  const renderQuickReplySend = () => <Text>{" custom send =>"}</Text>;

  const renderSend = (props: Send["props"]) => (
     <Send {...props} containerStyle={{ justifyContent: "center" }}>
       <MaterialIcons size={30} color={"tomato"} name={"send"} />
     </Send>
   );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3b5f8a" }}>
      <Container>
        <HeaderContainer>
          <TouchableOpacity
            style={{ paddingHorizontal: 10, paddingVertical: 5 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <HeaderTitle>Chat</HeaderTitle>
        </HeaderContainer>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          loadEarlier={loadEarlier}
          onLoadEarlier={onLoadEarlier}
          isLoadingEarlier={isLoadingEarlier}
          parsePatterns={parsePatterns}
          user={user}
          scrollToBottom
          onLongPressAvatar={(user) => alert(JSON.stringify(user))}
          onPressAvatar={() => alert("short press")}
          onQuickReply={onQuickReply}
          keyboardShouldPersistTaps="never"
          renderAccessory={renderAccessory}
          renderActions={renderCustomActions}
          renderBubble={renderBubble}
          renderSystemMessage={renderSystemMessage}
          renderCustomView={renderCustomView}
          renderSend={renderSend}
          quickReplyStyle={{ borderRadius: 2 }}
          renderQuickReplySend={renderQuickReplySend}
          inverted={Platform.OS !== "web"}
          timeTextStyle={{ left: { color: "red" }, right: { color: "yellow" } }}
          isTyping={isTyping}
          infiniteScroll
        />
      </Container>
    </SafeAreaView>
  );
};
type StyledProps = {
  color?: string;
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const HeaderContainer = styled.View<StyledProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  padding-left: 10px;
  background-color: #3b5f8a;
`;

const HeaderTitle = styled.Text<StyledProps>`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
`;

const styles = StyleSheet.create({
  footer: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
  },
});
export default ChatScreen;
