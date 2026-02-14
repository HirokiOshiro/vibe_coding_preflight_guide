<!-- markdownlint-configure-file {"MD024": {"siblings_only": true}} -->

# Changelog

このファイルはこのプロジェクトの主要な変更履歴を記録します。

運用方針:

- 形式は Keep a Changelog を参考
- バージョンは `v0.x.y` で管理
- 変更区分は `Added / Changed / Fixed` を基本とする

## [v0.2.0] - 2026-02-14

### Added

- `assets/js/main.js` を追加し、ページ内インタラクション処理を外部化
- `robots.txt`、`sitemap.xml`、`404.html` を追加

### Changed

- `index.html` のインラインJavaScriptを削除し、`assets/js/main.js` を `defer` 読み込みへ変更
- `index.html` に `canonical` と `og:url` を追加
- `README.md` を最新構成（`index.html` + `assets/js/main.js` + 補助ファイル）へ更新

## [v0.2.1] - 2026-02-14

### Added

- `assets/css/styles.css` を追加し、ページスタイルを外部ファイル化

### Changed

- `index.html` のインラインCSSを削除し、`assets/css/styles.css` 参照へ変更
- `README.md` の構成説明をCSS分離後の状態に更新

## [v0.1.0] - 2026-02-14

### Added

- 公開用メタ情報（description, OGP, Twitter card, theme-color, favicon）を追加
- フッターに公開情報（バージョン、最終更新日、更新方針）を追加

### Changed

- 用語カードのカーソル挙動をクリック操作前提に統一
- 参照元の未確定URL項目を「URL確認中」として明示

### Fixed

- チェックリスト項目をキーボード（Enter / Space）で操作可能に改善
- 用語カードとDeep Diveプロンプトをキーボード操作対応
- フォーカス可視化（focus-visible）を追加
