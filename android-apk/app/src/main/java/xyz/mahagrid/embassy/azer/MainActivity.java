package xyz.mahagrid.embassy.azer;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * MainActivity — Container Híbrido Web4 do APK "Maha Grid, DAO Embassy & Bot a zer"
 * Carrega a interface unificada (Tabuleiro 9x9, Cérebro Neynar V2 + Hub API do Bot "a zer",
 * Câmara Diplomática H-A-H / HaaS / A2H e Simulador Surfpool de 36 Carteiras).
 */
public class MainActivity extends Activity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        webView = new WebView(this);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("file:///android_asset/www/index.html");
        setContentView(webView);
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
