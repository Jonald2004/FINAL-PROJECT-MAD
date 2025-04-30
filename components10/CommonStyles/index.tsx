import { StyleSheet } from "react-native";

export const colors = {
  primary: "#0071E3",
  white: "#FFFFFF",
  black: "#1E1E1E",
  gray: "#6E6E73",
  lightGray: "#C6C5C5",
  errorRed: "#E04327",
  errorBg: "#FEF6F6",
};

export const typography = {
  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.black,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "700",
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
  },
  small: {
    fontSize: 12,
    fontWeight: "400",
  },
};

export const spacing = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
};

export const commonStyles = StyleSheet.create({
  container: {
    maxWidth: 440,
    width: "100%",
    fontFamily: "Public Sans",
  },
  button: {
    width: "100%",
    maxWidth: 382,
    height: 64,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
});
