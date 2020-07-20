import React, { useMemo, useEffect } from 'react'
import classnames from 'classnames'

import { Dropdown, Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import { useLocalStorageState } from 'ahooks'

import styles from './index.less'

interface IThemeSwitchProps {
  className?: string
}

enum Theme {
  DEFAULT = 'default',
  DUST = 'dust',
  CYAN = 'cyan'
}

function changeTheme(nextTheme: Theme) {
  let styleLink = document.getElementById('theme-style') as HTMLLinkElement
  const body = document.getElementsByTagName('body')[0]

  if (nextTheme === Theme.DEFAULT && styleLink) {
    styleLink.remove()
    const lastTheme = Array.from(document.body.classList).find(s => s.startsWith('body-wrap-'))
    if (lastTheme) {
      body.classList.remove(lastTheme)
    }
    return
  }
  if (styleLink) {
    styleLink.href = `/theme/${nextTheme}.css` // 切换 antd 组件主题
    body.className = `body-wrap-${nextTheme}` // 切换 app-level 的主题
    return
  }
  styleLink = document.createElement('link')
  styleLink.type = 'text/css'
  styleLink.rel = 'stylesheet'
  styleLink.id = 'theme-style'
  styleLink.href = `/theme/${nextTheme}.css`
  body.className = `body-wrap-${nextTheme}`
  document.body.append(styleLink)
}

export default function ThemeSwitch({ className }: IThemeSwitchProps) {
  const [theme, setTheme] = useLocalStorageState('umi-app-theme', Theme.DEFAULT)

  const menu = useMemo(
    () => (
      <Menu
        style={{ width: 150 }}
        selectedKeys={[theme]}
        onClick={e => {
          setTheme(e.key as Theme)
          changeTheme(e.key as Theme)
        }}
      >
        <Menu.Item key={Theme.DEFAULT}>
          <div className={classnames(styles.themeItem, styles.defaultFont)}>
            <span role="img" className={classnames(styles.img, styles.defaultBg)} />
            Default
          </div>
        </Menu.Item>
        <Menu.Item key={Theme.DUST}>
          <div className={classnames(styles.themeItem, styles.dustFont)}>
            <span role="img" className={classnames(styles.img, styles.dustBg)} />
            Dust
          </div>
        </Menu.Item>
        <Menu.Item key={Theme.CYAN}>
          <div className={classnames(styles.themeItem, styles.cyanFont)}>
            <span role="img" className={classnames(styles.img, styles.cyanBg)} />
            Cyan
          </div>
        </Menu.Item>
      </Menu>
    ),
    [setTheme, theme]
  )

  useEffect(() => {
    if (theme !== Theme.DEFAULT) {
      changeTheme(theme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Dropdown overlay={menu} className={classnames(styles.size, className)}>
      <div>
        <AppstoreOutlined style={{ cursor: 'pointer' }} />
      </div>
    </Dropdown>
  )
}
