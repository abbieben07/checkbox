import { Color } from '@nativescript/core';
import { checkedProperty, RadioCommon, valueProperty } from './radio.common';
import { RadioGroup, selectedProperty } from './radiogroup';

// @ts-ignore
declare const NSCheckbox, NSCheckboxDelegate;
export class Radio extends RadioCommon {
    public createNativeView(): Object {
        const radio = NSCheckbox.new();
        radio.frame = CGRectMake(0, 0, 24, 24);
        radio.borderStyle = 1;
        radio.checkmarkStyle = 1;
        radio.borderLineWidth = 2;
        radio.checkmarkColor = new Color("yellow").ios;
        radio.addDelegate(CheckboxDelegate.new());
        return radio;
    }

    initNativeView(): void {
        this.nativeView.owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        this.nativeView.owner = null;
        super.disposeNativeView();
    }

    [checkedProperty.setNative](value: boolean) {
        this.nativeView.isChecked = value;
    }

    get activeColor(): string {
        return (this.style as any).activeColor;
    }
    set activeColor(color: string) {
        (this.style as any).activeColor = color;
        this.nativeView.checkboxFillColor = color;
        this.nativeView.checkedBorderColor = color;
    }

    get inactiveColor(): string {
        return (this.style as any).inactiveColor;
    }
    set inactiveColor(color: string) {
        (this.style as any).inactiveColor = color;
        this.nativeView.uncheckedBorderColor = color;
    }
}

@NativeClass()
class CheckboxDelegate extends NSObject implements NSCheckboxDelegate {
    static ObjCProtocols = [NSCheckboxDelegate];

    static new(): CheckboxDelegate {
        return super.new() as CheckboxDelegate;
    }

    onCheckChange(radio: NSCheckbox) {
        const owner: Radio = (radio as any).owner;

        if (owner) {
            owner.notifyPropertyChange(checkedProperty.name, radio.isChecked);
            if (owner.group && radio.isChecked && owner.group.get(selectedProperty.name) != owner.get(valueProperty.name)) {
                (owner.group as RadioGroup).setProperty(selectedProperty.name, owner.get(valueProperty.name))
            }
        }
    }
}