@echo off
set "JAVA_HOME=d:\wowo\w1\jdk-17.0.2"
set "ANDROID_HOME=d:\wowo\w1\android-sdk"
set "PATH=d:\wowo\w1\jdk-17.0.2\bin;d:\wowo\w1\node-v24.18.0-win-x64;d:\wowo\w1\android-sdk\cmdline-tools\latest\bin;%PATH%"
yes | sdkmanager.bat --sdk_root=d:\wowo\w1\android-sdk --licenses