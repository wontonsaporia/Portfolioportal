# Portfolio Portal

制作・教育・研究・開発を横断的にまとめるポートフォリオ／ポータルサイト。
React + Vite 製、GitHub Pages で公開する前提の静的サイトです。

要件定義 v0.1 の **Step 1〜4**（雛形 / 4ページ / 配列データ駆動 / ミニマルデザイン）を実装済み。Step 5（デプロイ）は下記の手順で行えます。

---

## 1. ローカルで動かす

```bash
npm install
npm run dev      # http://localhost:5173 が開く
```

ビルドと確認:

```bash
npm run build    # dist/ を生成
npm run preview  # 本番ビルドをローカル確認
```

---

## 2. 中身を編集する

コードを触らずに、データ配列を編集するだけで増やせる構造です。

| 編集したいもの | ファイル |
| --- | --- |
| 完成した作品（Works） | `src/data/works.ts` |
| 進行中・研究（Projects） | `src/data/projects.ts` |
| 名前・ステートメント・連絡先・About | `src/data/profile.ts` |
| 色・タイポgrafィ・余白などの見た目 | `src/styles/global.css`（上部の `:root` トークン） |

### 作品を1件追加する例

`src/data/works.ts` の配列に追記するだけ:

```ts
{
  id: "new-work",            // 一意なID（半角英数）
  title: "新しい作品",
  year: "2026",
  category: "Art",           // Art / Game / 3DCG / ZINE / Workshop / Web/Tool / Research
  status: "completed",       // completed / ongoing / prototype / archived
  description: "短い説明。",
  thumbnail: "new-work.jpg", // public/ に置いた画像名。省略すると自動マークを表示
  tags: ["tag1", "tag2"],
  links: [{ label: "詳細", url: "https://…" }], // 任意
  featured: true,            // Home の Selected に出すなら true
}
```

### サムネイル画像

`public/` フォルダに画像を置き、`thumbnail: "ファイル名.jpg"` と書くだけ。
未設定なら、タイトル頭文字＋カテゴリの「マーク」が自動表示されます（画像が割れません）。

---

## 3. GitHub Pages に公開する（Step 5）

このプロジェクトは **base を相対パス（`./`）+ HashRouter** にしてあるので、
ユーザーページでもプロジェクトページでも、リポジトリ名の設定なしで動きます。

### 手順

1. GitHub で新しいリポジトリを作成し、push する。

   ```bash
   git init
   git add .
   git commit -m "init portfolio"
   git branch -M main
   git remote add origin https://github.com/<あなた>/<リポジトリ名>.git
   git push -u origin main
   ```

2. リポジトリの **Settings → Pages → Build and deployment → Source** を
   **「GitHub Actions」** に設定する。

3. `main` に push すると `.github/workflows/deploy.yml` が自動でビルド＆デプロイ。
   数分後に `https://<あなた>.github.io/<リポジトリ名>/` で公開されます。

> 手動デプロイ派の場合は `npm run build` 後の `dist/` を `gh-pages` ブランチに上げてもOK。
> その場合も相対パス設定なので追加の設定は不要です。

---

## 4. 今後の拡張（MVP では後回し）

要件定義に沿って、次の段階で足せるもの:

- Notes（Markdown 記事）／ Teaching ページの中身
- カテゴリでのタグ絞り込み・検索
- 各作品の詳細ページ（記事形式）
- 問い合わせフォーム・多言語対応

`/notes` と `/teaching` はナビからの導線とプレースホルダだけ用意済みです。

---

## 構成

```
src/
  data/        # ← ここを編集してコンテンツを増やす
    types.ts
    works.ts
    projects.ts
    profile.ts
  components/   # Nav / Footer / Card
  pages/        # Home / Works / Projects / About / Placeholder
  styles/
    global.css  # デザイントークン（:root）＋全スタイル
```
