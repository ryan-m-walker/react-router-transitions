import React from 'react'

import { Body, H3 } from './shared/styles'
 

const SubPage = ({data}) => (
  <div>
    <H3>{ data.title }</H3>
    <Body>
      { data.text }
    </Body>
  </div>
)


export default SubPage
