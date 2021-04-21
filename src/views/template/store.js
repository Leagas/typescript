import { observable, action } from "mobx"

class TemplateStore {
	constructor() {
		this.init()
	}

	@observable
	ready = false

	@action
	init = () => {
		this.ready = true
	}
}

export default TemplateStore