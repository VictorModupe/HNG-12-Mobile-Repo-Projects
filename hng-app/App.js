import React from 'react';
import { View, Text, Button, Linking, StyleSheet } from 'react-native';

const HNGHireLinks = [
    { title: 'Flutter Developers', url: 'https://hng.tech/hire/flutter' },
    { title: 'React Native Developers', url: 'https://hng.tech/hire/react-native' },
    { title: 'Kotlin Developers', url: 'https://hng.tech/hire/kotlin' },
    { title: 'Mobile Developers', url: 'https://hng.tech/hire/mobile' },
    { title: 'Android Developers', url: 'https://hng.tech/hire/android' },
    { title: 'iOS Developers', url: 'https://hng.tech/hire/ios' },
];

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>HNG Hire & Project Links</Text>
            <Button title="View GitHub Repo" onPress={() => Linking.openURL('https://github.com/yourrepo')} />
            <Text style={styles.subHeader}>HNG Hire Pages:</Text>
            {HNGHireLinks.map((link, index) => (
                <Button key={index} title={link.title} onPress={() => Linking.openURL(link.url)} />
            ))}
            <Text style={styles.subHeader}>More Links:</Text>
            <Button title="Telex" onPress={() => Linking.openURL('https://telex.ai')} />
            <Button title="Delve" onPress={() => Linking.openURL('https://delve.ai')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
    },
});

export default App;
