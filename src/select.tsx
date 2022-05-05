import React, { forwardRef, useState } from 'react'
import cn from 'classnames'
import { DirectionIcon, CloseIcon } from 'xueyan-react-icon'
import { Popover } from 'xueyan-react-popover'
import styles from './select.scss'
import { BoxSelect } from './box-select'
import type { PopoverRef, PopoverProps } from 'xueyan-react-popover'

export interface SelectOption<T> extends Record<string, any> {
  /** 选项展示信息 */
  label: React.ReactNode
  /** 选项值 */
  value: T
  /** 禁用项 */
  disabled?: boolean
}

export type SelectOnChange<T> = (
  value: T, 
  option: SelectOption<T>
) => void

export type SelectOnClick<T> = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>, 
  value: T, 
  option: SelectOption<T>
) => void

export type SelectOnClear = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
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
  /** 改变已选值 */
  onChange?: SelectOnChange<T>
  /** 点击项 */
  onClick?: SelectOnClick<T>
  /** 清除 */
  onClear?: SelectOnClear
}

export interface SelectRef extends PopoverRef {}

export const Select = forwardRef<SelectRef, SelectProps<any>>(({
  popover,
  className,
  style,
  contentClassName,
  contentStyle,
  value,
  options,
  placeholder,
  onChange,
  onClick,
  onClear,
  ...props
}, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const _options = options || []
  const _option = _options.find(i => i.value === value)
  const _disabled = props.disabled || !_options.find(i => !i.disabled)
  const _noOptions = (_options.length - (_option ? 1 : 0)) <= 0

  return (
    <Popover
      keepStyle={1}
      {...popover}
      ref={ref}
      placement='y'
      value={visible}
      disabled={_disabled || _noOptions}
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
          onClear={onClear}
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
          [styles.disabled]: _disabled,
          [styles.allowclear]: !_disabled && _option && onClear
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
        {!_disabled && _option && onClear && (
          <div 
            className={cn(styles.block, styles.icon, styles.clear)}
            onClick={event => {
              event.stopPropagation()
              setVisible(false)
              onClear(event)
            }}
          >
            <CloseIcon />
          </div>
        )}
        {!_noOptions && (
          <div className={cn(styles.block, styles.icon, styles.arrow)}>
            <DirectionIcon direction={visible ? 'bottom' : 'top'} />
          </div>
        )}
      </div>
    </Popover>
  )
})
