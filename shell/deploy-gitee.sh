# 改为放到仓库名称下，这样代码可以不用改，同时兼容 github + gitee
if test -d './hello-unibest'; then
  rm -rf './hello-unibest'
fi
mv ./dist/build/h5 ./hello-unibest
