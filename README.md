# Tool Imagemin
解像度を維持して圧縮するツール

## Dependencies
|  library  |  version  |
| ---- | ---- |
|  gulp  |  4.0.2  |
|  gulp-imagemin  |  7.1.0  |
|  gulp-plumber  |  1.2.1  |
|  imagemin-mozjpeg  |  9.0.0  |
|  imagemin-pngquant  |  9.0.1  |

## Project setup
```
yarn install

mkdir images
```

## How to use
1. __images__ に圧縮したい画像（PNG、JPG、GIF、SVG）を格納する。
2. `yarn start`で圧縮を実施。
3. 圧縮結果が ___min__ に格納される。
