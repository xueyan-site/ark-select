import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import cn from 'classnames'
import styles from './capsule-select.scss'

export interface CapsuleSelectOption<T> extends Record<string, any> {
  /** 选项展示信息 */
  label: React.ReactNode
  /** 选项值 */
  value: T
  /** 禁用项 */
  disabled?: boolean
}

export type CapsuleSelectOnChange<T> = (
  value: T, 
  option: CapsuleSelectOption<T>
) => void

export type CapsuleSelectOnClick<T> = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>, 
  value: T, 
  option: CapsuleSelectOption<T>
) => void

export type CapsuleSelectOnClear = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void

export interface CapsuleSelectProps<T> {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 已选值 */
  value?: T
  /** 选项 */
  options?: CapsuleSelectOption<T>[]
  /** 禁止修改 */
  disabled?: boolean
  /** 竖着放置 */
  vertical?: boolean
  /** 改变已选值 */
  onChange?: CapsuleSelectOnChange<T>
  /** 点击项 */
  onClick?: CapsuleSelectOnClick<T>
  /** 清除 */
  onClear?: CapsuleSelectOnClear
}

export interface CapsuleSelectRef {
  rootNode: HTMLDivElement | null
}

export const CapsuleSelect = forwardRef<CapsuleSelectRef, CapsuleSelectProps<any>>(({
  className,
  style,
  value,
  options,
  vertical,
  onChange,
  onClick,
  onClear,
  ...props
}, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const _options = options || []
  const _disabled = props.disabled || !_options.find(i => !i.disabled)

  useImperativeHandle(ref, () => ({
    rootNode: rootRef.current
  }), [rootRef.current])

  return (
    <div 
      ref={rootRef} 
      style={style}
      className={cn(
        className, 
        styles.xrcapsuleselect, 
        vertical ? styles.vertical : styles.horizontal
      )}
    >
      {_options.map((item, index) => {
        const active = item.value === value
        const disabled = _disabled || item.disabled
        return (
          <div 
            key={index} 
            className={cn(styles.item, {
              [styles.active]: active,
              [styles.disabled]: disabled
            })}
            onClick={event => {
              if (onClick) {
                onClick(event, item.value, item)
              }
              if (!disabled && active && onClear) {
                onClear(event)
              } else if (!disabled && onChange) {
                onChange(item.value, item)
              }
            }}
          >{item.label}</div>
        )
      })}
    </div>
  )
})
