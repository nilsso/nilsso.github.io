curl -s https://api.github.com/repos/KaTeX/KaTeX/releases/latest \
    | grep "browser_download_url.*zip" \
    | cut -d : -f 2,3 \
    | tr -d \" \
    | wget -qi -
unzip -o -qq katex.zip
mkdir -p static/{css/fonts,js/katex}
mv katex/katex.min.css static/css/
mv katex/katex.min.js \
    katex/contrib/mathtex-script-type.min.js \
    katex/contrib/auto-render.min.js \
    static/js/katex
mv katex/fonts/* static/css/fonts
rm -rf {katex,katex.zip}
