import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
普通选择器

\`\`\`
type Select = React.ForwardRefExoticComponent<
  SelectProps<any> & React.RefAttributes<SelectRef>
>
\`\`\`

## SelectRef

继承 [PopoverRef](/ark-popover?doc=0002#popoverref) 全部属性

## SelectProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| popover | popover组件props | \`? PopoverProps\` |  |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| contentClassName | 类名 | \`? string\` |  |
| contentStyle | 样式 | \`? React.CSSProperties\` |  |
| value | 已选值 | \`? T\` |  |
| options | 选项 | \`? SelectOption<T>[]\` |  |
| disabled | 禁止修改 | \`? boolean\` |  |
| placeholder | 输入框提示 | \`? string\` |  |
| onChange | 改变已选值 | \`? SelectOnChange<T>\` |  |
| onClick | 点击项 | \`? SelectOnClick<T>\` |  |
| onClear | 清除 | \`? SelectOnClear\` |  |

> 其他类型：[PopoverProps](/ark-popover?doc=0002#popoverprops)

## SelectOption

选择器选项

\`\`\`
interface SelectOption<T> extends Record<string, any> {
  /** 选项展示信息 */
  label: React.ReactNode
  /** 选项值 */
  value: T
  /** 禁用项 */
  disabled?: boolean
}
\`\`\`

### SelectOnChange

修改选项事件的回调

\`\`\`
type SelectOnChange<T> = (
  value: T,                 // 选项值
  option: SelectOption<T>   // 选项
) => void
\`\`\`

### SelectOnClick

点击选项事件的回调

\`\`\`
type SelectOnClick<T> = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>, 
  value: T,                 // 选项值
  option: SelectOption<T>   // 选项
) => void
\`\`\`

## SelectOnClear

点击清空事件的回调

\`\`\`
type SelectOnClear = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void
\`\`\`
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
