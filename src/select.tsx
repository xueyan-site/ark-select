import React, { forwardRef, useState } from 'react'
import cn from 'classnames'
import { DirectionIcon, CloseIcon } from 'xueyan-react-icon'
import { BubblePopover, PopoverRef } from 'xueyan-react-popover'
import styles from './select.scss'
import type { BubblePopoverProps } from 'xueyan-react-popover'

export interface SelectOption<T> extends Record<string, any> {
  /** 选项展示信息 */
  label: React.ReactNode
  /** 选项值 */
  value: T
  /** 禁用项 */
  disabled?: boolean
}

export interface SelectProps<T> {
  /** popover组件props */
  popover?: BubblePopoverProps
  /** 类名 */
  className?: string
  /** 样式 */
  style?: React.CSSProperties
  /** 选项 */
  options?: SelectOption<T>[]
  /** 输入框提示 */
  placeholder?: string
  /** 已选值 */
  value?: T
  /** 改变已选值 */
  onChange?: (value?: T, option?: SelectOption<T>) => void
  /** 允许清除 */
  clear?: boolean
  /** 禁止修改 */
  disabled?: boolean
}

export interface SelectRef extends PopoverRef {}

export const Select = forwardRef<SelectRef, SelectProps<any>>(({
  popover,
  className,
  style,
  options,
  placeholder,
  value,
  onChange,
  clear,
  disabled
}, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const _options = options || []
  const _option = _options.find(i => i.value === value)

  return (
    <BubblePopover
      keepStyle={1}
      {...popover}
      ref={ref}
      placement='y'
      hiddenArrow={true}
      value={visible}
      disabled={disabled || _options.length <= 0}
      onChange={setVisible}
      className={className}
      style={style}
      contentStyle={{
        padding: 0,
        borderRadius: 0,
        ...(popover?.contentStyle)
      }}
      content={(
        <div className={styles.options}>
          {_options.map((item, index) => (
            <div 
              key={index} 
              className={cn(styles.option, {
                [styles.active]: item.value === value,
                [styles.disabled]: item.disabled
              })}
              onClick={event => {
                event.stopPropagation()
                if (!item.disabled && onChange) {
                  onChange(item.value, item)
                  setVisible(false)
                }
              }}
            >{item.label}</div>
          ))}
        </div>
      )}
    >
      <div
        className={cn(styles.select, {
          [styles.active]: visible,
          [styles.disabled]: disabled
        })}
      >
        <div className={cn(styles.block, styles.label)}>
          {_option ? (
            <div className={styles.labelText}>
              {_option.label}
            </div>
          ) : (
            <div className={cn(styles.labelText, styles.placeholder)}>
              {placeholder || '请选择'}
            </div>
          )}
        </div>
        {clear && !disabled && _option && (
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
    </BubblePopover>
  )
})
