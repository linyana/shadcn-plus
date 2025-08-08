# shadcn-plus ⚡️

🌐 **文档**: 👉 [Shadcn Plus 文档](https://linyana.github.io/shadcn-plus)
  


🚀 一个基于 [shadcn/ui](https://ui.shadcn.com/) 的封装库，无需繁琐配置，开箱即用，专注提升开发效率。

✨ 内置更丰富的常用属性和组件，覆盖日常开发中的高频需求，真正省时省力。

🛠 `当前项目仍处于开发阶段`，功能持续完善中。如果你对这个项目感兴趣，欢迎点击 ⭐️ 关注，我们将持续更新并积极修复问题！

📖 [English Docs](https://github.com/linyana/shadcn-plus/blob/main/README.md) | [📖 中文文档](https://github.com/linyana/shadcn-plus/blob/main/doc/cn/README.md)

## 🔥 特性

- 📦 **基于 shadcn/ui**：提供更简洁的 API，减少重复配置
- 🎛️ **可配置化**：通过 `options` 轻松调整组件风格和行为
- 🌙 **主题支持**：提供默认主题，也可选择自定义主题
- 💎 **更易扩展**：可基于 `shadcn/ui` 组件轻松扩展
- 📖 **良好文档**：简单易懂的使用方式

## 🔧 How to use

### 安装

```sh
yarn add shadcn-plus
# 或者
npm install shadcn-plus
```

### 导入样式

```typescript
import 'shadcn-plus/style.css'
import 'shadcn-plus/tailwind.css'
```

或者使用`shadcn-plus`的扩展样式和你项目中的`tailwindcss`:
```typescript
import 'shadcn-plus/style.css'
```

### 开始使用

导入组件:

```typescript
import { Button } from 'shadcn-plus'

export default function App() {
  return (
    <Button>Button</Button>
  )
}
```

<img src="https://s2.loli.net/2025/04/12/9gcGdjsmy7Xnf3C.png" width="300px" />

导入 [Lucide 图标](https://lucide.dev/icons): 

```typescript
import { Store } from'shadcn-plus/icons'
export default function App() {
  return (
    <Store />
  )
}
```

<img src="https://s2.loli.net/2025/04/12/5WOqrgunhH7TKo2.png" width="300px" />