---
title: 'Next.js 15 Featured-based Folder Structure'
excerpt: '分享近期針對 Next.js 專案所設計的 Feature-based 資料夾結構，這個架構可以幫助提升模組化、可維護性，與擴展性，覺得相當不錯。'
tags: ['nextjs', 'approuter']
date: 2024-12-11
author: 'Sean Huang'
image: 'nextjs.png'
slug: 2024-12-11-nextjs-featured-based-folder-structure
---

## 🌲 專案結構

```plaintext
.
├── .husky/             # Git Hooks 配置
├── .vscode/            # VS Code 編輯器設定
├── e2e/                # E2E 測試檔案
├── public/             # 靜態資源
└── src/                # 主要目錄
    ├── app/            # Next.js App Router 路由配置
    ├── components/     # 共用元件
    ├── features/       # 功能模組
    ├── lib/            # 通用工具和配置
    ├── test/           # 單元測試配置
    └── middleware.ts   # 路由中介
```

## 📁 主要目錄說明

### `src/app/`

根據 Next.js 的 App Router 結構，這裡只負責處理與路由相關的事情：

- `api/` - API Routes
- `page.tsx` - 各頁面組件
- `layout.tsx` - 頁面布局
- `globals.css` - 全域基礎樣式

### `/src/components`

擺放整個專案都共用的元件，例如：

- `layouts/` - 頁面布局相關的元件
- `theme/` - 與主題設置相關的元件

### `/src/features`

各功能模組，採用 Feature-based 的架構，該功能相關的元件、Redux、APIs 都放在這裡：

- `auth/` - 認證相關
- `snackbar/` - 通知提示

### `/src/lib`

通用的工具和配置檔案：

- `api.ts` - API 請求的配置
- `hooks.ts` - 為了更好的型別推導，先定義好具有型別的 hooks
- `store.ts` - Redux store 配置
- `utils.ts` - 通用的工具函式，例如 Tailwind CSS 的 clsx 功能

## ⚙️ 其他配置文件

- `.editorconfig` - 編輯器基礎配置
- `.nvmrc` - 專案使用的 Node.js 版本
- `.prettierrc` - Prettier 格式化規則
- `commitlint.config.js` - 配置 Git Commit Message 規則
- `eslint.config.mjs` - ESLint 規則
- `next.config.ts` - Next.js 配置
- `playwright.config.ts` - E2E 測試配置
- `tailwind.config.ts` - Tailwind CSS 配置
- `vitest.config.mts` - Vitest 測試配置

## 💡 為什麼選擇 Feature-based 架構

1. 更好的模組化
   - 相關的程式碼都集中在同一個目錄下
   - 每個功能模組都是獨立的，包含自己的 API、組件、狀態管理等
2. 更容易維護
   - 當需要修改某個功能時，所有相關檔案都在同一個地方
   - 降低不同功能之間的耦合度
3. 更好的可擴展性
   - 新增功能時只需要新增一個新的資料夾在 `features/` 底下
   - 每個功能模組都可以獨立開發和測試
4. 更清晰的依賴關係
   - 每個功能模組的依賴關係都很明確
   - 避免循環依賴的問題
5. 更容易協作
   - 團隊成員可以專注於特定的功能模組
   - 減少代碼衝突的可能性

例如：要開發一個 auth 功能，可以在 `features/auth/` 下開發這個功能模組：

```plaintext
features/auth/
├── api.ts             # API 請求
├── types.ts           # 類型定義
├── components/        # 相關組件
└── store/             # 狀態管理
```

這種結構讓相關的程式碼都集中在一起，使得開發和維護更加容易。
