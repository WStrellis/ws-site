import {createMuiTheme} from "@material-ui/core/styles"
import amber from "@material-ui/core/colors/amber"
import grey from "@material-ui/core/colors/grey"
import orange from "@material-ui/core/colors/orange"
/* 
                light: orange["500"],
                main: orange["700"],
                dark: orange["900"],
                c ontrastText: grey["50"],
                */

// mint green
// const PRIMARY_LIGHT = "hsl(104deg, 41%, 80%)"
// const PRIMARY = "hsl(104deg, 41%, 65%)"
// const PRIMARY_DARK = "hsl(104deg, 41%, 50%)"
//light yellow
// const PRIMARY_LIGHT = "hsl(49deg, 59%, 80%)"
// const PRIMARY = "hsl(49deg, 59%, 65%)"
// const PRIMARY_DARK = "hsl(49deg, 59%, 50%)"

const PRIMARY_LIGHT = "hsl(219deg, 10%, 40%)"
const PRIMARY = "hsl(219deg, 10%, 25%)"
const PRIMARY_DARK = "hsl(219deg, 10%, 10%)"

export default createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: PRIMARY_LIGHT,
            main: PRIMARY,
            dark: PRIMARY_DARK,
            contrastText: grey["50"],
        },
        secondary: {
            light: amber["400"],
            main: amber["800"],
            dark: amber["900"],
            contrastText: grey["900"],
        },
    },
    shape: {
        borderRadiusLg: "8px",
    },
    overrides: {
        MuiButton: {
            contained: {
                boxShadow: `inset 2px 2px 5px ${PRIMARY_DARK}, 
             inset -2px -2px 5px ${PRIMARY_LIGHT}`,
                "&:hover": {
                    boxShadow: `0 0 #00000000, 
             0 0 #00000000`,
                },
            },
            containedPrimary: {
                "&:hover": {
                    backgroundColor: grey["50"],
                    color: PRIMARY,
                },
            },
        },
    },
})
