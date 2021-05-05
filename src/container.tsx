import React from "react"

import { Routes } from "./routes"
import TemplateStore from "./views/template/store"

const storeContext = React.createContext({
	templateStore: new TemplateStore(),
})

export const Container = () => <Routes />

export const useStore = () => React.useContext(storeContext)