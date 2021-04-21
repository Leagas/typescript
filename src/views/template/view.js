import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

import { useStore } from "../../container"

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const Admin = observer(() => {
	const { templateStore } = useStore()

	return (
		<Container>
			Template {templateStore.ready}
		</Container>
	)
})
