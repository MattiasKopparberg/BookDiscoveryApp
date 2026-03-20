// src/styles/global.ts
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

type Styles = {
  // Views
  mainContainer: ViewStyle;
  container: ViewStyle;
  row: ViewStyle;
  center: ViewStyle;
  card: ViewStyle;
  spacer: ViewStyle;
  gridRow: ViewStyle

  // Text
  text: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  error: TextStyle;
  loading: TextStyle;
  input: TextStyle;

  // Images
  cover: ImageStyle;
  coverPlaceholder: ViewStyle;
  coverPlaceholderText: TextStyle;

  // Buttons
  button: ViewStyle;
  buttonText: TextStyle;
};

export const globalStyles = StyleSheet.create<Styles>({
  // Views
input: {
  fontSize: 16,
  padding: 12,
  borderWidth: 1,
  borderColor: "#D1D5DB",
  color: "#111827",
  borderRadius: 8,
  marginTop: 12,
  backgroundColor: "#F9FAFB",
},

  mainContainer: {
    flex: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  spacer: {
    height: 16,
  },

  text: {
    fontSize: 14,
    color: "#111827",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
  error: {
    color: "#DC2626",
    fontSize: 14,
    textAlign: "center",
  },
  loading: {
    fontSize: 16,
    textAlign: "center",
  },

  cover: {
    width: 80,
    height: 128,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
  },
  coverPlaceholder: {
    width: 80,
    height: 128,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },
  coverPlaceholderText: {
    fontSize: 12,
    color: "#6B7280",
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#2563EB",
    borderRadius: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
gridRow: {
  justifyContent: "space-between",
  marginBottom: 12,
},
});