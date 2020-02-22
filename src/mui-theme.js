import {createMuiTheme} from "@material-ui/core/styles"
import amber from "@material-ui/core/colors/amber"
import grey from "@material-ui/core/colors/grey"
import orange from "@material-ui/core/colors/orange"

// nice yello to try #e89b33
export default createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: orange["500"],
            main: orange["700"],
            dark: orange["900"],
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
})
