import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    PanResponder,
    Animated,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';

import Images from '../../assets/index';

const DragButton = props => {
    const [position, setPosition] = useState(new Animated.Value(0));
    const animeStyle = StyleSheet.create({
        anime: {
            transform: [
                {
                    translateX: position,
                },
            ],
        },
    });
    const _panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
            if (gestureState.vx > 0 && gestureState.dx < 30) {
                position.setValue(gestureState.dx);
                if (typeof onComplete === 'function') props.onComplete(true);
            }
        },
        onPanResponderRelease: (evt, gestureState) => {
            Animated.spring(position, {
                toValue: 0,
                tension: -2,
                friction: 5,
                useNativeDriver: true,
            }).start();
        },
    });


    return (
        <Animated.View
            {..._panResponder.panHandlers}
            style={[animeStyle.anime, styles.container]}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>{props.text}</Text>
                <Image tintColor="white" style={styles.image} source={Images.forward} />
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '35%',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        left: -30,
        overflow: 'hidden',
        flexDirection: 'row',
        marginTop: 5
    },
    text: {
        color: 'white',
        fontSize: 20,
        height: '100%',
        marginStart: 50,
        paddingEnd: '5%',
        textAlignVertical: 'center',
        textAlign: 'right',
    },
    image: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        marginEnd: '2%',
    },
});

DragButton.propsTypes = {
    text: PropTypes.number,
    backgroundColor: PropTypes.string,
    onComplete: PropTypes.func,
};

DragButton.defaultProps = {
    text: 'Swipe',
    backgroundColor: 'red',
    onComplete: null,
};

export default DragButton;
