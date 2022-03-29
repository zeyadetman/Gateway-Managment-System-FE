/* eslint-disable import/no-anonymous-default-export */

export default {
  baseStyle: ({ theme }: any) => ({
    table: {
      overflowX: "scroll",
    },
    th: {
      borderBottom: "3px solid",
      borderColor: theme.colors.black,
    },
  }),
  variants: {
    striped: ({ theme }: any) => ({
      th: {
        borderBottom: "3px solid",
        borderColor: theme.colors.black,
        bg: theme.colors.black,
        color: theme.colors.white,
      },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: theme.colors.gray["50"],
            },
            td: {
              background: theme.colors.gray["50"],
            },
          },
        },
      },
    }),
  },
  defaultProps: {
    size: "md",
    variant: "striped",
  },
};
