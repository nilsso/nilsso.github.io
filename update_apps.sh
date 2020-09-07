(cd apps_dev/LanguageFragmentGenerator; yarn build)
rm -rf static/apps/japanese
cp -r apps_dev/LanguageFragmentGenerator/build static/apps/japanese
