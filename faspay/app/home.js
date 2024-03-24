import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ImageGallery = () => {
    // Array of image URLs
    const images = [
	'https://i.postimg.cc/4yvqCt6c/faspay3.png',
        'https://i.postimg.cc/8cg9nw6D/faspay4.png',
        'https://i.postimg.cc/hGwHVK4X/faspay5.png',
        'https://i.postimg.cc/DZXRgRmB/faspay6.png',
        // Add more image URLs here
    ];

    // State to keep track of the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };
    var pic = images[currentImageIndex]

    return (
        <View style={styles.container}>
            <Image source={{ uri: pic }} style={styles.image} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={prevImage} style={styles.button}>
                    <Text>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={nextImage} style={styles.button}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 320,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
	color: '#0040FF',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10,
    },
});

export default ImageGallery;
