const { createContext, useState } = require("react");


export const theme = createContext("asf")

export function ThemeProvider ({children}){
    console.log(children)
        const [data, setdata] = useState(
          JSON.parse(localStorage.getItem('theme'))
        );

        return <theme.Provider value={[data,setdata]}>
{children}
           
        </theme.Provider>

}