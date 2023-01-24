import { StyleSheet } from "react-native"

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const ColorsBG = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export const COLORS = {
    WHITE: '#FFFFFF',
    WHITE_OFF: '#E5E5E5',
    BLUE: '#003BA0',
    BLUE_LIGHT: '#0074FF',
    BLUE_DARK: '#000B41',
    PLACEHOLDER: '#BBBBBB',
    BLACK: '#000',
    BLACK_LIGTH: '#171717',
    GRAY: '#C4C4C4',
    GREEN: '#288E8D',
    YELLOW: '#E99C3E',
    GREEN_DARK: '#385723',
    SUCCESS: '#9AEBA3',
    GRAY_LIGHT: '#E7E7E7',
    GRAY_LIGHT_1: '#8A8A8A',
    GRAY_LIGHT_2: '#F5F5F5',
    GRAY_DARK: '#E8E8E8',
    ORANGE: '#DA8A2E',
    RED_LIGHT: '#FF4858',
}

export const StylesSheet = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.21,
        shadowRadius: 2.65,
        elevation: 7
    },
    shadow1: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.21,
        shadowRadius: 2.65,
        elevation: 7
    },
    shadowModal: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 4,
            height: 6,
        },
        shadowOpacity: 0.21,
        shadowRadius: 2.65,
        elevation: 10
    }
})