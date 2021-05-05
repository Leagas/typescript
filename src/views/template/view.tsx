import React, { Fragment } from "react"
import { TProps } from "./model";
import styled from "styled-components";
import { useStore } from "../../container";

const Template = (props: TProps) => {
  const { templateStore } = useStore()

  return (
    <Fragment>
      templateStore {templateStore.ready && "Ready"}
    </Fragment>
  );
}

export default Template

