import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import cn from 'classnames'
import styles from './box-select.scss'

export interface BoxSelectOption<T> extends Record<string, any> {
  /** 选项展示信息 */
  label: React.ReactNode
  /** 选项值 */
  value: T
  /** 禁用项 */
  disabled?: boolean
}

export interface BoxSelectProps<T> {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 选项 */
  options?: BoxSelectOption<T>[]
  /** 已选值 */
  value?: T
  /** 改变已选值 */
  onChange?: (value?: T, option?: BoxSelectOption<T>) => void
  /** 点击项 */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: T, option: BoxSelectOption<T>) => void
  /** 禁止修改 */
  disabled?: boolean
  /** 竖着放置 */
  vertical?: boolean
}

export interface BoxSelectRef {
  rootNode: HTMLDivElement | null
}

export const BoxSelect = forwardRef<BoxSelectRef, BoxSelectProps<any>>(({
  className,
  style,
  options,
  value,
  onChange,
  onClick,
  disabled,
  vertical,
}, ref) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const _options = options || []

  useImperativeHandle(ref, () => ({
    rootNode: rootRef.current
  }), [rootRef.current])

  return (
    <div 
      ref={rootRef} 
      style={style}
      className={cn(
        className, 
        styles.xrboxselect, 
        vertical ? styles.vertical : styles.horizontal,
        disabled ? styles.disabled : undefined
      )}
    >
      {_options.map((item, index) => (
        <div 
          key={index} 
          className={cn(styles.item, {
            [styles.active]: item.value === value,
            [styles.disabled]: disabled || item.disabled
          })}
          onClick={event => {
            if (onClick) {
              onClick(event, item.value, item)
            }
            if (!disabled && !item.disabled && onChange) {
              onChange(item.value, item)
            }
          }}
        >{item.label}</div>
      ))}
    </div>
  )
})
