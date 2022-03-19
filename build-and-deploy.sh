#!/bin/bash

ionic build --prod -- --base-href https://beyerl.github.io/sleepy-tube/
git add -A &&
git commit -m "build and deploy" &&
git push &&
git subtree push --prefix www origin gh-pages