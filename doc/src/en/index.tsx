import React from 'react'
import Doc from 'com/doc'
import type { PageProps } from 'xueyan-react'
import type { ArticleMeta } from 'xueyan-react-doc'

const CONTENTS: ArticleMeta[] = [
  {
    id: 'select',
    label: 'select',
    content: () => import('./select')
  },
  {
    id: 'box-select',
    label: 'box-select',
    content: () => import('./box-select')
  },
  {
    id: 'capsule-select',
    label: 'capsule-select',
    content: () => import('./capsule-select')
  }
]

export default function Index(props: PageProps) {
  return <Doc {...props} language="English" contents={CONTENTS} />
}
