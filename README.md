# gulpを使用したscssファイルのコンパイルサンプル

まずはgulpのインストール
```
yarn add gulp --dev
```

sassを使用するためにsassをインストール
```
yarn add sass --dev
```

sassのコンパイルのためにgulp-sassをインストール
```
yarn add gulp-sass --dev
```

コンパイルしたcssファイルのminifyのためにgulp-clean-cssをインストール
```
yarn add gulp-clean-css --dev
```

minifyしたcssファイル名に.minを追加するためにgulp-renameをインストール
```
yarn add gulp-rename --dev
```

src/scss/以下の.scssファイルのコンパイル、minify実行。
```
yarn run sass
```