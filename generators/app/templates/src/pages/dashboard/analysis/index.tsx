import React from 'react'
import { IPageComponent, IPageComponentProps } from '@/types'

const Analysis: IPageComponent = (props: IPageComponentProps) => {
  return <div>analysis</div>
}

Analysis.title = 'ANALYSIS_TITLE'
Analysis.layout = 'PRO_LAYOUT'
Analysis.requireSignin = true
Analysis.access = 'canReadDashboardAnalysis'

export default Analysis
