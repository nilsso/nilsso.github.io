(cd apps/japanese; yarn build)
rm -rf static/apps/japanese
cp -r apps/japanese/build static/apps/japanese
