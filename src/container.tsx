import React from "react"

import { Routes } from "./routes"

const storeContext = React.createContext({
	// store: new Store(),
})

export const Container = () => <Routes />

export const useStore = () => React.useContext(storeContext)
