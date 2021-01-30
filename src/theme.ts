import { createMuiTheme, fade, darken } from "@material-ui/core/styles";
import { SimplePaletteColorOptions, Theme as DefaultTheme } from "@material-ui/core";
import { CommonColors, PaletteOptions } from "@material-ui/core/styles/createPalette";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

type Theme = Omit<DefaultTheme, "palette" | "typography"> & {
    palette: PaletteOptions & {
        common: Partial<CommonColors> & {
            black10: string;
            black20: string;
            black50: string;
            black60: string;
            black80: string;
        };
        primary: SimplePaletteColorOptions & {
            opacity10: string;
            opacity15: string;
            opacity30: string;
            dark20: string;
        };
        secondary: SimplePaletteColorOptions & {
            opacity10: string;
        };
        warning: SimplePaletteColorOptions & {
            opacity15: string;
        };
        tertiary: SimplePaletteColorOptions & {
            main: string;
            opacity40: string;
            dark: string;
        };
        medium: SimplePaletteColorOptions & {
            main: string;
            opacity50: string;
            opacity30: string;
            opacity10: string;
        };
        active: SimplePaletteColorOptions & {
            main: string;
            dark: string;
        };
    };
    typography: TypographyOptions & {
        customFonts: {
            lato12: {
                fontFamily: string;
                fontSize: string;
            };
            lato14: {
                fontFamily: string;
                fontSize: string;
            };
            lato16: {
                fontFamily: string;
                fontSize: string;
            };
            lato18: {
                fontFamily: string;
                fontSize: string;
            };
            rflex14: {
                fontFamily: string;
                fontSize: string;
            };
            rflex16: {
                fontFamily: string;
                fontSize: string;
            };
            rflex18: {
                fontFamily: string;
                fontSize: string;
            };
            rflex20: {
                fontFamily: string;
                fontSize: string;
            };
            rflex32: {
                fontFamily: string;
                fontSize: string;
            };
            rflex50: {
                fontFamily: string;
                fontSize: string;
            };
        };
        htmlFontSize: number;
    };
};

const theme: Partial<Theme> = {
    palette: {
        common: {
            black10: fade("#000", 0.1),
            black20: fade("#000", 0.2),
            black50: fade("#000", 0.5),
            black60: fade("#000", 0.6),
            black80: fade("#000", 0.8),
        },
        primary: {
            main: "#5791F3",
            opacity10: fade("#5791F3", 0.1),
            opacity15: fade("#5791F3", 0.15),
            opacity30: fade("#5791F3", 0.3),
            dark: darken("#5791F3", 0.1),
            dark20: darken("#5791F3", 0.2),
        },
        secondary: {
            main: "#F06060",
            opacity10: fade("#f06060", 0.1),
            dark: darken("#F06060", 0.1),
        },
        tertiary: {
            main: "#11344C",
            opacity40: fade("#11344C", 0.4),
            dark: darken("#11344C", 0.1),
        },
        medium: {
            main: "#8492a6",
            opacity50: fade("#8492A6", 0.5),
            opacity30: fade("#8492A6", 0.3),
            opacity10: fade("#8492A6", 0.1),
        },
        info: {
            main: "#11344c",
        },
        success: {
            main: "#00C693",
            dark: darken("#00C693", 0.1),
        },
        active: {
            main: "#0856D9",
            dark: darken("#0856D9", 0.1),
        },
        warning: {
            main: "#f7b348",
            opacity15: fade("#f7b348", 0.15),
        },
        error: {
            main: "#d74747",
        },
    },
    typography: {
        customFonts: {
            lato12: {
                fontFamily: '"Lato", sans-serif',
                fontSize: "12px",
            },
            lato14: {
                fontFamily: '"Lato", sans-serif',
                fontSize: "14px",
            },
            lato16: {
                fontFamily: '"Lato", sans-serif',
                fontSize: "16px",
            },
            lato18: {
                fontFamily: '"Lato", sans-serif',
                fontSize: "18px",
            },
            rflex14: {
                fontFamily: '"Poppins", sans-serif',
                fontSize: "14px",
            },
            rflex16: {
                fontFamily: '"Poppins", sans-serif',
                fontSize: "16px",
            },
            rflex18: {
                fontFamily: '"Poppins", sans-serif',
                fontSize: "18px",
            },
            rflex20: {
                fontFamily: '"Poppins", sans-serif',
                fontSize: "20px",
            },
            rflex32: {
                fontFamily: '"Poppins", sans-serif',
                fontSize: "32px",
            },
            rflex50: {
                fontFamily: '"Poppins", sans-serif',
                fontSize: "50px",
            },
        },
        htmlFontSize: 16,
        fontFamily: '"Lato", sans-serif',
    },
    props: {
        // // 17/11/2020 update with Gali to return the ripple for more visual looking on focus.
        // // maybe will be replace with other looking
        // MuiButtonBase: {
        //     disableRipple: true // No more ripple, on the whole application!!
        // }
        // MuiInputBase: {
        //     autoComplete: 'new-password'
        // }
    },
    overrides: {
        MuiList: {
            root: {
                padding: 0,
            },
        },
        MuiSvgIcon: {
            root: {
                width: "20px",
                height: "20px",
            },
        },
        MuiFormControl: {
            root: {
                minHeight: "70px",
            },
        },
        MuiSlider: {
            thumb: {
                height: 16,
                width: 16,
                backgroundColor: "#fff",
                border: "1px solid currentColor",
                "&:focus, &:hover, &$active": {
                    boxShadow: "inherit",
                },
                marginTop: "-7px",
            },
            rail: {
                color: "gray",
                height: 0.5,
            },
        },
        MuiButton: {
            root: {
                boxShadow: "none !important",
                textTransform: "capitalize",
                height: "40px",
                padding: "8px 30px",
            },
            sizeSmall: {
                height: "30px",
            },
            sizeLarge: {
                height: "50px",
            },
        },
        MuiCheckbox: {
            root: {
                "&.Mui-focusVisible": {
                    boxShadow: "0 0 5px 0 #ddd !important",
                },
            },
        },
    },
};

export default createMuiTheme(theme);

export type { Theme };
