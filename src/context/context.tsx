// import React, { createContext, useReducer } from "react"
// import { useMediaQuery } from "react-responsive"
// import { productReducer, shoppingCartReducer } from "./reducers"

// type ProductType = {
//     id: number
//     name: string
//     price: number
// }

// type InitialStateType = {
//     products: ProductType[]
//     shoppingCart: number
// }

// const initialState = {
//     products: [],
//     shoppingCart: 0,
// }

// const isDesktopOrLaptop = useMediaQuery({
//     query: "(min-width: 1224px)",
// })
// const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" })
// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })

// const isDeviceWidth295_359 = useMediaQuery({
//     query: "(min-device-width:295) and (max-device-width:359)",
// })
// const isDeviceWidth375_811 = useMediaQuery({
//     query: "(min-device-width:375) and (max-device-height:811)",
// })
// const isDeviceWidth360_374 = useMediaQuery({
//     query: "(min-device-width:360) and (max-device-width:374)",
// })
// const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
// const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })

// console.log(" ")
// console.log("isDesktopOrLaptop", isDesktopOrLaptop)
// console.log("isBigScreen", isBigScreen)
// console.log("isTabletOrMobile", isTabletOrMobile)
// console.log("isDeviceWidth295_359", isDeviceWidth295_359)
// console.log("isDeviceWidth360_374", isDeviceWidth360_374)
// console.log("isDeviceWidth375_811", isDeviceWidth375_811)
// console.log("isPortrait", isPortrait)
// console.log("isRetina", isRetina)

// const AppContext = createContext<{
//     state: InitialStateType
//     dispatch: React.Dispatch<any>
// }>({
//     state: initialState,
//     dispatch: () => null,
// })

// const mainReducer = ({ products, shoppingCart }, action) => ({
//     products: productReducer(products, action),
//     shoppingCart: shoppingCartReducer(shoppingCart, action),
// })

// const AppProvider: React.FC = ({ children }) => {
//     const [state, dispatch] = useReducer(mainReducer, initialState)

//     return (
//         <AppContext.Provider value={{ state, dispatch }}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export { AppContext, AppProvider }
