# shadcn-plus ⚡️

🚀 Extension library based on [shadcn/ui](https://ui.shadcn.com/). Made to help you develop faster by removing the setup hassle, letting you focus on building features.

✨ Includes practical extended props and reusable components for everyday development needs.

🛠 `This project is currently under active development`, with features being added and improved continuously. If you're interested, feel free to ⭐️ star the repo — updates are coming fast!

📖 [English Docs](https://github.com/linyana/shadcn-plus/blob/main/README.md) | [📖 中文文档](https://github.com/linyana/shadcn-plus/blob/main/doc/cn/README.md)

## 🔥 Features

- 📦 **Built on shadcn/ui** – Enhances usability with a streamlined API
- 🎛️ **Configurable** – Customize components effortlessly with `options`
- 🌙 **Theming support** – Comes with a default theme and supports custom theming
- 💎 **Highly extendable** – Easily build upon `shadcn/ui` components
- 📖 **Well-documented** – Clear and concise usage instructions

## 🔧 How to use

### Install

```sh
yarn add shadcn-plus
# or
npm install shadcn-plus
```

### Import Style

```typescript
import 'shadcn-plus/dist/style.css'
```

### Use it in your projects

Import Components:

```typescript
import { Button } from 'shadcn-plus'

export default function App() {
  return (
    <Button>Button</Button>
  )
}
```

<img src="https://s2.loli.net/2025/04/12/9gcGdjsmy7Xnf3C.png" width="300px" />

Import [Lucide icons](https://lucide.dev/icons): 

```typescript
import { Store } from'shadcn-plus/icons'
export default function App() {
  return (
    <Store />
  )
}
```

<img src="https://s2.loli.net/2025/04/12/5WOqrgunhH7TKo2.png" width="300px" />