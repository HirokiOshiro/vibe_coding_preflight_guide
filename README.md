# Vibe Coding Preflight Guide

生成AIで実装に入る前に確認したい、要件定義・設計・品質・安全性の観点をまとめた単一ページガイドです。

## 公開先

- GitHub Pages（Project Pages）で公開
- 公開URL: https://hirokioshiro.github.io/vibe_coding_preflight_guide/

## リポジトリ構成

- `index.html` : 本体（HTML）
- `assets/css/styles.css` : ページスタイル
- `assets/js/main.js` : 画面インタラクション（チェックリスト、コピー、目次ハイライト）
- `404.html` : GitHub Pages用404ページ
- `robots.txt` : クローラー向け設定
- `sitemap.xml` : 検索エンジン向けサイトマップ
- `CHANGELOG.md` : バージョン履歴
- `README.md` : 運用方針・更新手順

## ローカル確認

ブラウザで `index.html` を直接開いて確認できます。

## GitHub Pages 公開手順（Project Pages想定）

1. このリポジトリに `main` ブランチへ push
2. GitHub の Settings → Pages で Source を `Deploy from a branch` に設定
3. Branch を `main` / `/ (root)` に設定
4. 公開URLで以下を確認
   - 目次リンク遷移
   - チェックリスト操作
   - Deep Diveプロンプトコピー
   - 外部参照リンク
  - 404ページ表示（存在しないURL）

## 更新フロー（推奨）

1. 本文を更新
2. フッターの「バージョン」「最終更新日」を更新
3. `CHANGELOG.md` に変更内容を追記
4. ブラウザで最低限の動作確認（下記チェックリスト）
5. コミットメッセージに変更種別を含める（例: `docs:`, `a11y:`, `meta:`）

## 公開前/更新時チェックリスト

- [ ] レイアウト崩れがない（PC/スマホ幅）
- [ ] キーボード操作（Tab, Enter, Space）が機能する
- [ ] コピー操作が機能する
- [ ] 外部リンクに誤りがない
- [ ] フッターのバージョンと `CHANGELOG.md` の最新バージョンが一致する

## バージョニング方針

- 当面は `v0.x.y` で運用
- 目安
  - `x`（minor）: 章追加や構成変更など、内容の拡張
  - `y`（patch）: 誤字修正、リンク修正、軽微なUI/文言修正

## 開発ログ（追記用）

| 日付 | バージョン | 種別 | 概要 |
|---|---|---|---|
| 2026-02-14 | v0.1.0 | 初期整備 | 公開前メタ情報、A11y改善、運用メタ追加 |
| 2026-02-14 | v0.2.0 | 構成改善 | JS分離、GitHub Pages補助ファイル追加、README整備 |

## 今後の更新で有益な運用提案

- 参照元リンク定期点検: 月1回または更新時にリンク切れ確認
- 分割トリガーを明文化: 例）編集者2名以上 / 英語版追加 / 内容が大幅増加
- 英語版方針の先行決定: 単ページ内切替か `/en/` 別ページかを先に固定
- 画像OGP導入（必要時）: SNS共有品質が必要になった段階で追加
- 将来の自動化候補: GitHub Actionsでリンクチェック（必要になった時点で導入）

## 補足（User Pagesへ切り替える場合）

- User Pagesを使う場合、原則リポジトリ名を `username.github.io` にする必要があります。
- 切り替え時は `index.html` の `canonical` / `og:url`、`robots.txt`、`sitemap.xml`、`404.html` のリンク先を更新してください。
