import React from 'react'
import { Article, Segment } from 'ark-markdown'

const MARK1 = `
盒子式选择器

\`\`\`
type BoxSelect = React.ForwardRefExoticComponent<
  BoxSelectProps<any> & React.RefAttributes<BoxSelectRef>
>
\`\`\`

## BoxSelectRef

\`\`\`
interface BoxSelectRef {
  /** 根节点 */
  rootNode: HTMLDivElement | null
}
\`\`\`

## BoxSelectProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| className | 类名 | \`? string\` |  |
| style | 样式 | \`? React.CSSProperties\` |  |
| value | 已选值 | \`? T\` |  |
| options | 选项 | \`? BoxSelectOption<T>[]\` |  |
| disabled | 禁止修改 | \`? boolean\` |  |
| vertical | 竖着放置 | \`? boolean\` |  |
| onChange | 改变已选值 | \`? BoxSelectOnChange<T>\` |  |
| onClick | 点击项 | \`? BoxSelectOnClick<T>\` |  |
| onClear | 清除 | \`? BoxSelectOnClear\` |  |

## BoxSelectOption

选择器选项

\`\`\`
interface BoxSelectOption<T> extends Record<string, any> {
  /** 选项展示信息 */
  label: React.ReactNode
  /** 选项值 */
  value: T
  /** 禁用项 */
  disabled?: boolean
}
\`\`\`

### BoxSelectOnChange

修改选项事件的回调

\`\`\`
type BoxSelectOnChange<T> = (
  value: T,                    // 选项值
  option: BoxSelectOption<T>   // 选项
) => void
\`\`\`

### BoxSelectOnClick

点击选项事件的回调

\`\`\`
type BoxSelectOnClick<T> = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>, 
  value: T,                    // 选项值
  option: BoxSelectOption<T>   // 选项
) => void
\`\`\`

## BoxSelectOnClear

点击清空事件的回调

\`\`\`
type BoxSelectOnClear = (
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
