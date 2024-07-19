#!/usr/bin/env bash

ANDROID_DIR=android
IOS_DIR=ios

if [[ "$@" == *"--clean"* ]]; then
  (
    set +e
    echo "Doing a full clean build.."
    echo "Removing app/node_modules..."
    rm -rf ../../node_modules
    echo "Removing android and ios directories..."
    rm -rf android ios
    set -e
  )
fi

yarn install

echo "Preparing the react-native-in-app-payment module..."
yarn workspace react-native-in-app-payment clean
yarn workspace react-native-in-app-payment prepare

if [[ ! -d "${ANDROID_IDR}" || ! -d "${IOS_DIR}" ]]; then
  echo "Android and/or iOS directories do not exist. Running prebuild..."
  npx expo prebuild
fi