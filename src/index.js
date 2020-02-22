import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import CssBaseline from "@material-ui/core/CssBaseline"
import customTheme from "./mui-theme"
import {ThemeProvider} from "@material-ui/core/styles"

ReactDOM.render(
    <>
        <CssBaseline />
        <ThemeProvider theme={customTheme}>
            <App />
        </ThemeProvider>
    </>,
    document.getElementById("root"),
)

// Updates the app without refreshing the browser in development
if (process.env.NODE_ENV === "development") {
    module.hot.accept()
}
