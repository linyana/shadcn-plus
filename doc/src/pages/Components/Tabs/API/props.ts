export const TabsProps = [
  {
    property: 'items',
    type: 'ITabItemType[]',
    default: '-',
    description: '标签页配置数组，每个项目包含 key、label 和 content',
  },
  {
    property: 'defaultValue',
    type: 'string',
    default: '第一个标签页的 key',
    description: '默认激活的标签页',
  },
  {
    property: 'value',
    type: 'string',
    default: '-',
    description: '受控模式下当前激活的标签页',
  },
  {
    property: 'onValueChange',
    type: '(value: string) => void',
    default: '-',
    description: '标签页切换时的回调函数',
  },
  {
    property: 'className',
    type: 'string',
    default: '-',
    description: '自定义 CSS 类名',
  },
];

export const TabItemProps = [
  {
    property: 'key',
    type: 'string',
    default: '自动生成',
    description: '标签页的唯一标识符',
  },
  {
    property: 'label',
    type: 'React.ReactNode',
    default: '-',
    description: '标签页的标题内容，支持文本、图标等',
  },
  {
    property: 'content',
    type: 'React.ReactNode',
    default: '-',
    description: '标签页的内容区域',
  },
];