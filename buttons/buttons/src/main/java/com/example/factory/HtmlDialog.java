package com.example.factory;

import com.example.buttons.Button;
import com.example.buttons.HtmlButton;

public class HtmlDialog extends Dialog {
    @Override
    public Button createButton() {
        return new HtmlButton();
    }
}
