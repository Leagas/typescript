import { observable, action } from "mobx"
import { TReady } from "./model"

class TemplateStore {
	constructor() {
		this.init()
	}

	@observable
	public ready: TReady = false

	@action
	private init = (): void => {
		this.ready = true
	}
}

export default TemplateStore