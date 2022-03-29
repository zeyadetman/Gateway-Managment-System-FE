/* eslint-disable import/no-anonymous-default-export */

export default {
  variants: {
    /**
     * Input component will use "outline" styles by default.
     * Styles set here will override anything in { baseStyle } and { sizes }
     *
     * The styles below are what Chakra will use unless replaced.
     */
    outline: ({ theme }: any) => ({
      field: {
        padding: "14px 16px 14px 18",
        background: "intial",
        border: "3px solid",
        boxSizing: "border-box",
        fontSize: "md",
        borderColor: theme.colors.black,
        _placeholder: {
          color: theme.colors.black,
        },
        _hover: {
          borderColor: theme.colors.black,
        },
        _focus: {
          borderColor: theme.colors.black,
          boxShadow: "none",
          _placeholder: {
            color: theme.colors.black,
          },
        },
        _disabled: {
          borderColor: theme.colors.white,
          bgColor: theme.colors.gray["100"],
          color: theme.colors.black,
          opacity: 1,
        },
        _invalid: {
          opacity: 1,
          borderColor: theme.colors.red,
        },
      },
      addon: {
        color: theme.colors.red,
      },
    }),
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};
