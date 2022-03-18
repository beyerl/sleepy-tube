#!/bin/bash

ng build --base-href=sleepy-tube &&
git add -A &&
git commit -m "build and deploy" &&
git push &&
git subtree push --prefix www origin gh-pages