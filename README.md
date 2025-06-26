This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# KSproject

src/
├── app/
│ ├── layout.tsx ← 全体共通レイアウト（ヘッダー・フッターなど）
│ ├── page.tsx ← トップページ（製品紹介、ヒーローエリアなど）
│ ├── products/ ← 商品関連ページ
│ │ ├── page.tsx ← 商品一覧ページ
│ │ └── [id]/ ← 商品詳細（例: /products/iphone-15）
│ │ └── page.tsx
│ ├── cart/ ← カート画面
│ │ └── page.tsx
│ ├── checkout/ ← 購入手続き画面
│ │ └── page.tsx
│ └── account/ ← ユーザーアカウント関連
│ ├── login/ ← ログイン画面
│ │ └── page.tsx
│ ├── register/ ← 新規登録画面
│ │ └── page.tsx
│ └── profile/ ← アカウント情報画面
│ └── page.tsx
├── components/ ← 再利用可能な UI コンポーネント（例: Header, ProductCard）
├── features/ ← ドメインごとのロジック（例: cart, product などの Hooks や State）
├── lib/ ← API 通信・ユーティリティ
├── types/ ← 型定義（Product 型など）
└── styles/ ← グローバル CSS, Tailwind 設定など

Prettier - Code formatter

Live Server

Auto Rename Tag

Es7+ React のスニペット(ショートカット)を使えるようにする
