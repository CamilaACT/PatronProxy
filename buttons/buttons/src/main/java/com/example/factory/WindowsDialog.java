package com.example.factory;

import com.example.buttons.Button;
import com.example.buttons.WindowsButton;

public class WindowsDialog extends Dialog{
    @Override
    public Button createButton() {
        return new WindowsButton();
    }
}
