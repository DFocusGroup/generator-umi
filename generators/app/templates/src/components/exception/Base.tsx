import React, { useMemo } from 'react'
import { Typography } from 'antd'

import { isString } from '@/helpers'

import styles from './Base.less'

export interface IExceptionView {
  style?: React.CSSProperties
}

interface IBaseExceptionView extends IExceptionView {
  img: JSX.Element | string
  title: number | string
  description: string
  action: JSX.Element | string
}

export default function Base({ img, title, description, action, style }: IBaseExceptionView) {
  const imageArea = useMemo(() => {
    return isString(img) ? <img src={img} width="438" alt="desc" /> : img
  }, [img])

  const titleArea = useMemo(() => {
    if (isString(title)) {
      return <Typography.Title level={2}>{title}</Typography.Title>
    }
    return <Typography.Title>{title}</Typography.Title>
  }, [title])

  return (
    <div className={styles.container} style={style}>
      <div className={styles.content}>
        {imageArea}
        <div className={styles.title}>{titleArea}</div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.actionBar}>{action}</div>
      </div>
    </div>
  )
}
