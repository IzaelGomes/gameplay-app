import { View, Text, TextInput, Image, Button } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import Illustration from "../../../assets/images/illustration.png";
import { ButtonIcon } from "../components/buttonIcon/ButtonIcon";

export default function HomeScreen() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image source={Illustration} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`} e organize suas {`\n`} jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>
      <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
    </View>
  );
}
