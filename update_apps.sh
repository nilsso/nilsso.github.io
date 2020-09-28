#(cd apps_dev/LanguageFragmentGenerator; yarn build)
#rm -rf static/apps/japanese
#cp -r apps_dev/LanguageFragmentGenerator/build static/apps/japanese

(cd apps_dev/chord_solver; yarn build)
rm -rf static/apps/music
cp -r apps_dev/chord_solver/build static/apps/music
