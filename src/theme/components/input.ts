/* eslint-disable import/no-anonymous-default-export */

export default {
  baseStyle: {},
  sizes: {
    md: {
      field: {
        borderRadius: "8px",
        fontSize: "md",
        height: "48px",
        padding: "12px 14px",
      },
    },
  },
  variants: {
    outline: ({ theme }: any) => ({
      field: {
        background: "intial",
        border: "3px solid",
        boxSizing: "border-box",
        fontSize: "md",
        borderColor: theme.colors.black,
        _placeholder: {
          color: theme.colors.gray["300"],
        },
        _hover: {
          borderColor: theme.colors.black,
        },
        _focus: {
          borderColor: theme.colors.black,
          boxShadow: "none",
          boxSizing: "border-box",
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
