export const Button = {
  baseStyle: {
    fontWeight: "normal",
    borderRadius: "8px",
    _focus: { boxShadow: "none" },
    _active: {
      bg: "purple.800"
    }
  },
  sizes: {
    sm: {
      fontSize: "18px",
      color: "white"
    },
    md: {
      fontSize: "18px",
      color: "white"
    },
    lg: {
      fontSize: "18px",
      color: "white"
    }
  },
  variants: {
    outline2: {
      bg: "#230F5B"
    },
    rounded: {
      width: "40px",
      height: "40px",

      display: "flex",
      alignItems: "center",
      justify: "center",

      bg: "transparent",
      border: "3px solid",
      borderColor: "purple.800",
      borderRadius: "50%",

      fontSize: "16px",

      _hover: {
        color: "white",
        bg: "purple.800"
      }
    },
    solid: {
      bg: "#230F5B",
      boxShadown:
        "0 24px 34px 0 rgba(74, 58, 255, 0.05), 0 9px 24px 0 rgba(0, 0, 0, 0.45)",
      _hover: {
        bg: "purple.800"
      },
      borderRadius: "8px",
      fontSize: "18px",
      minW: "100px",
      flex: 1,
      minH: "40px",
      transition: "background ease-in-out 0.2s",
      _active: {
        bg: "purple.800"
      }
    }
  },
  defaultProps: {
    size: "sm",
    variant: "solid"
  }
};
