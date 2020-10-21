#(cd apps_dev/LanguageFragmentGenerator; yarn build)
#rm -rf static/apps/japanese
#mv -r apps_dev/LanguageFragmentGenerator/build static/apps/japanese

#(cd apps_dev/chord_solver; yarn build)
#rm -rf static/apps/music
#mv -r apps_dev/chord_solver/build static/apps/music

#acm_wasm=/Users/nilsso/Documents/Web/acm-wasm
#(cd $acm_wasm; yarn build)
#rm -rf static/apps/acm
#mv $acm_wasm/dist static/apps/acm

acm_wasm=/Users/nilsso/Documents/Web/acm-wasm-temp
(cd $acm_wasm; yarn build)
rm -rf static/apps/acm_test
mv $acm_wasm/dist static/apps/acm_test
