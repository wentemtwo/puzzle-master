package com.puzzle.master;

import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebView;
import android.view.View;
import android.view.WindowManager;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Enable edge-to-edge display
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        
        // Make navigation bar transparent with light icons
        getWindow().setStatusBarColor(android.graphics.Color.TRANSPARENT);
        getWindow().setNavigationBarColor(android.graphics.Color.TRANSPARENT);
        
        // Control system bar appearance
        WindowInsetsControllerCompat controller = WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        if (controller != null) {
            // Light status bar icons (dark icons on light background)
            controller.setAppearanceLightStatusBars(false);
            // Light navigation bar icons (dark icons on light background)  
            controller.setAppearanceLightNavigationBars(false);
        }
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            // 通过Capacitor桥接调用JS返回键处理函数
            WebView webView = getBridge().getWebView();
            if (webView != null) {
                webView.post(() -> webView.evaluateJavascript(
                    "if(typeof handleBackButton==='function'){handleBackButton();}",
                    null
                ));
            }
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
}