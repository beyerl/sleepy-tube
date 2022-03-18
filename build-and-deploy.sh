#!/bin/bash

ng build &&
git add -A &&
git commit -m "build and deploy" &&
git push &&
git subtree push --prefix www origin gh-pages