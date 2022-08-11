import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
胶囊式选择器

\`\`\`
type CapsuleSelect = React.ForwardRefExoticComponent<
  CapsuleSelectProps<any> & React.RefAttributes<CapsuleSelectRef>
>
\`\`\`

## CapsuleSelectRef

\`\`\`
interface CapsuleSelectRef {
  /** 根节点 */
  rootNode: HTMLDivElement | null
}
\`\`\`

## CapsuleSelectProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| value | 已选值 | \`? T\` |  |
| options | 选项 | \`? CapsuleSelectOption<T>[]\` |  |
| disabled | 禁止修改 | \`? boolean\` |  |
| vertical | 竖着放置 | \`? boolean\` |  |
| onChange | 改变已选值 | \`? CapsuleSelectOnChange<T>\` |  |
| onClick | 点击项 | \`? CapsuleSelectOnClick<T>\` |  |
| onClear | 清除 | \`? CapsuleSelectOnClear\` |  |

## CapsuleSelectOption

选择器选项

\`\`\`
interface CapsuleSelectOption<T> extends Record<string, any> {
  /** 选项展示信息 */
  label: React.ReactNode
  /** 选项值 */
  value: T
  /** 禁用项 */
  disabled?: boolean
}
\`\`\`

### CapsuleSelectOnChange

修改选项事件的回调

\`\`\`
type CapsuleSelectOnChange<T> = (
  value: T,                        // 选项值
  option: CapsuleSelectOption<T>   // 选项
) => void
\`\`\`

### CapsuleSelectOnClick

点击选项事件的回调

\`\`\`
type CapsuleSelectOnClick<T> = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>, 
  value: T,                        // 选项值
  option: CapsuleSelectOption<T>   // 选项
) => void
\`\`\`

## CapsuleSelectOnClear

点击清空事件的回调

\`\`\`
type CapsuleSelectOnClear = (
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
