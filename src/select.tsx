import React, { forwardRef, useState } from 'react'
import cn from 'classnames'
import { DirectionIcon, CloseIcon } from 'xueyan-react-icon'
import { Popover, PopoverRef } from 'xueyan-react-popover'
import styles from './select.scss'
import { BoxSelect } from './box-select'
import type { PopoverProps } from 'xueyan-react-popover'

export interface SelectOption<T> extends Record<string, any> {
  /** 选项展示信息 */
  label: React.ReactNode
  /** 选项值 */
  value: T
  /** 禁用项 */
  disabled?: boolean
}

export type SelectOnChange<T> = (
  value?: T, 
  option?: SelectOption<T>
) => void

export type SelectOnClick<T> = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>, 
  value: T, 
  option: SelectOption<T>
) => void

export interface SelectProps<T> {
  /** popover组件props */
  popover?: PopoverProps
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 类名 */
  contentClassName?: string
  /** 样式 */
  contentStyle?: React.CSSProperties
  /** 已选值 */
  value?: T
  /** 选项 */
  options?: SelectOption<T>[]
  /** 禁止修改 */
  disabled?: boolean
  /** 输入框提示 */
  placeholder?: string
  /** 允许清除 */
  allowClear?: boolean
  /** 改变已选值 */
  onChange?: SelectOnChange<T>
  /** 点击项 */
  onClick?: SelectOnClick<T>
}

export interface SelectRef extends PopoverRef {}

export const Select = forwardRef<SelectRef, SelectProps<any>>(({
  popover,
  className,
  style,
  contentClassName,
  contentStyle,
  options,
  placeholder,
  value,
  onChange,
  onClick,
  allowClear,
  disabled
}, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const _options = options || []
  const _option = _options.find(i => i.value === value)

  return (
    <Popover
      keepStyle={1}
      {...popover}
      ref={ref}
      placement='y'
      value={visible}
      disabled={disabled || _options.length <= 0}
      onChange={setVisible}
      className={className}
      style={style}
      content={(
        <BoxSelect 
          value={value}
          options={options}
          vertical={true}
          style={contentStyle}
          className={cn(contentClassName, styles.xrselectcontent)}
          onClick={(event, value, option) => {
            event.stopPropagation()
            if (onClick) {
              onClick(event, value, option)
            }
          }}
          onChange={(value, option) => {
            if (onChange) {
              setVisible(false)
              onChange(value, option)
            }
          }}
        />
      )}
    >
      <div
        className={cn(styles.xrselect, {
          [styles.active]: visible,
          [styles.disabled]: disabled,
          [styles.allowclear]: allowClear && !disabled && _option
        })}
      >
        <div className={cn(styles.block, styles.label)}>
          {_option ? (
            <div className={styles.labeltext}>
              {_option.label}
            </div>
          ) : (
            <div className={cn(styles.labeltext, styles.placeholder)}>
              {placeholder || '请选择'}
            </div>
          )}
        </div>
        {allowClear && !disabled && _option && (
          <div 
            className={cn(styles.block, styles.icon, styles.clear)}
            onClick={event => {
              event.stopPropagation()
              if (onChange) {
                onChange()
                setVisible(false)
              }
            }}
          >
            <CloseIcon />
          </div>
        )}
        {_options.length > 0 && (
          <div className={cn(styles.block, styles.icon, styles.arrow)}>
            <DirectionIcon direction={visible ? 'bottom' : 'top'} />
          </div>
        )}
      </div>
    </Popover>
  )
})
