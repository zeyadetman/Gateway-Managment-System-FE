/* eslint-disable import/no-anonymous-default-export */

export default {
  baseStyle: {
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    md: {
      border: "none",
      boxSizing: "border-box",
      borderColor: "black",
      padding: "12px 24px",
      fontSize: "lg",
    },
  },
  variants: {
    outline: ({ theme }: any) => ({
      border: "4px solid",
      borderColor: theme.colors.black,
      color: theme.colors.black,
      bg: theme.colors.white,
      _hover: {
        bg: theme.colors.gray["50"],
        color: theme.colors.black,
      },
      _active: {
        bg: theme.colors.gray["300"],
        color: theme.colors.black,
        borderColor: theme.colors.black,
      },
    }),
    solid: ({ theme }: any) => ({
      border: "4px solid",
      borderColor: theme.colors.black,
      color: theme.colors.white,
      bg: theme.colors.black,
      _hover: {
        bg: theme.colors.gray["900"],
        color: theme.colors.white,
      },
      _active: {
        bg: theme.colors.gray["300"],
        color: theme.colors.white,
        borderColor: theme.colors.black,
      },
    }),
    ghost: {
      _hover: {
        bg: "transparent",
      },
      _active: {
        bg: "transparent",
      },
      _focus: {
        bg: "transparent",
      },
    },
  },
};
