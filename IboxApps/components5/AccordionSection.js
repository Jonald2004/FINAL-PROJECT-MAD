import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AccordionItem = ({title, children}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <Text style={styles.title}>{title}</Text>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="#000"
        />
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
      <View style={styles.separator} />
    </View>
  );
};

const AccordionSection = () => {
  return (
    <View style={styles.container}>
      <AccordionItem title="Belanja" />
      <AccordionItem title="Layanan" />
      <AccordionItem title="Tentang iBox" />
      <AccordionItem title="Kebijakan" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  content: {
    paddingVertical: 8,
  },
});

export default AccordionSection;
