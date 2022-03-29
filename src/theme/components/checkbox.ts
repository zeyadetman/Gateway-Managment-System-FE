/* eslint-disable import/no-anonymous-default-export */

export default {
  baseStyle: ({ theme }: any) => ({
    icon: {
      display: "none",
    },

    control: {
      boxShadow: "none",
      border: "3px solid",
      borderRadius: "sm",
      borderColor: theme.colors.black,
      color: theme.colors.black,

      _focus: {
        boxShadow: "none",
      },

      _hover: {
        boxShadow: "none",
        borderColor: theme.colors.black,
        bg: theme.colors.gray["50"],
      },

      _checked: {
        color: theme.colors.black,
        borderColor: theme.colors.black,
        bg: theme.colors.green,
        boxShadow: "none",
        _hover: {
          boxShadow: "none",
          borderColor: theme.colors.black,
          bg: theme.colors.green,
        },
      },
    },
  }),
  defaultProps: {
    size: "md",
  },
};
