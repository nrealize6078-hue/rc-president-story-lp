# REALIZE CLUB 社長向けLP（ストーリー版）

「社員を想う、その先へ。」を、サービス説明LPから
**社長が社員の人生を考え、最後に一通の手紙を受け取るストーリー型LP**へ組み直した別版。
元の版（rc-president-heart-lp）はそのまま残している。

- 公開：https://nrealize6078-hue.github.io/rc-president-story-lp/ （**noindex**。本公開するときは `<meta name="robots" content="noindex">` を消す）
- 作業フォルダ＝リポジトリ。直したら `git add -A && git commit && git push` で1〜2分後に反映
- プレビュー：`.claude/launch.json` の `lp-president-story`（ポート8957）
- CTAはすべて LINE `https://lin.ee/8jf4Da7`（FV・PRESIDENT JOURNEY・最後・固定バーの4か所）

## 構成（2026年9月18日の指示書のSECTION 01〜14）

01 ファーストビュー／02 社長への問い／03 会社から見えない人生（8シーン）／04 REALIZE CLUBとは／
05 社員が体験する人生の旅（9つの体験を一本の縦ラインで）／
10 会社には見えない／11 社長の想いへ戻る／12 PRESIDENT JOURNEY／13 DAY 1・3・7／14 最後のCTA

### 05 の9つの順番（2026年9月18日 社長指定。「流れが綺麗」）

LIFE JOURNEY（LINE・いつでも伴走）→ ミオ先生 → LIFE CORE → LIFE SHIFT → LIFE EVENT Check →
LIFE Check42 → LIFE Academy → LIFE ROAD MAP → LIFE CONSULTANT

内容の出典は `Downloads/REALIZE CLUB機能説明 (2).pdf`。
Check42 の6テーマは **お金・住まい・健康・災害・万が一・人生100年**（会員サイトの「老後」ではなくPDFに合わせた）。
画面は**すべて実画面**（社長指示「あてじゃなくて実際の画面」）。
- LIFE JOURNEY：LINEのトーク画面（Downloads/S__16654404.jpg）→ `ui-mio.webp`
- ミオ先生：realizeclub.net/miosensei/ をスマホ幅で撮影 → `ui-mio-page.webp`
- CORE・SHIFT・EVENT・CONSULTANT：会員サイト（rc-dashboard の _*-preview.html）
- Check42：lifemake.realizeclub.net をスマホ幅で撮影 → `ui-check42.webp`
- Academy・ROAD MAP：本番はログインが要るので、機能説明PDF（p7・p8）の画面を切り出し → `academy-screen.webp` `roadmap-screen.webp`（PC画面なので細枠のウィンドウで表示）
- LIFE EVENT Check の後ろのミオ先生の風景は、ミオ先生が隠れるので外した
- 8シーンの写真は社長作（ChatGPT画像生成）。`life-01-marriage.jpg`〜`life-08-disaster.jpg`

## デザインの決まりごと

- 角丸カード・ピル・英字の小見出し・グラデーション・金の面は使わない。金は細い線と小さなアクセントだけ
- カードは DAY の3枚だけ
- 文章の前の装飾線・矢印は入れない（社長の方針）
- 書体：見出し＝しっぽり明朝／本文＝Noto Sans JP 300／手紙と問い＝Klee One（Google Fonts）
- 文字は文節タグ `<w-b>` で包み、全幅で文節の途中では折り返さない。`<br class="sp">` は600px以下だけの改行

## 画像

- 仮置き：PJの机（`pj-desk.jpg` 未着）は手紙の挿し絵で代用
- 生成プロンプトとファイル名は `_画像生成プロンプト.md`（ローカルのみ）
- `assets/life-01-marriage.jpg` 〜 `life-08-disaster.jpg`、`pj-desk.jpg` は置くだけで自動表示
- スマホ画面は会員サイト（rc-dashboard）の実画面を撮影したもの。Check42 とミオ先生の相談画面だけはHTMLで作った画面イメージ

## 改行の検証

`_measure.js`（ローカルのみ）をページのコンソールで読み込み `await __measure(幅)` で「決めた改行以外の折り返し」を数える。
320〜1920pxの17幅で0件を確認済み（2026年9月18日）。
