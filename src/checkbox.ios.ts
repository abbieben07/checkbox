import { CheckboxCommon, checkedProperty } from './checkbox.common';

// @ts-ignore
declare const NSCheckbox, NSCheckboxDelegate;
export class Checkbox extends CheckboxCommon {
    public createNativeView(): Object {
        const checkbox = NSCheckbox.new();
        checkbox.frame = CGRectMake(0, 0, 24, 24);
        checkbox.borderStyle = 0;
        checkbox.checkmarkStyle = 3;
        checkbox.borderLineWidth = 3;
        checkbox.borderCornerRadius = 1;
        //checkbox.checkmarkColor = "white"; 
        checkbox.addDelegate(CheckboxDelegate.new());
        return checkbox;
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

    /* get activeColor(): string {
        return (this.style as any).activeColor;
    } */
    set activeColor(color: string) {
        (this.style as any).activeColor = color;
        this.nativeView.checkboxFillColor = color;
        this.nativeView.checkedBorderColor = color;
    }

    /* get inactiveColor(): string {
        return (this.style as any).inactiveColor;
    } */
    set inactiveColor(color: string) {
        (this.style as any).inactiveColor = color;
        this.nativeView.checkboxFillColor = color;
        this.nativeView.uncheckedBorderColor = color;
    }
}

@NativeClass()
class CheckboxDelegate extends NSObject implements NSCheckboxDelegate {
    static ObjCProtocols = [NSCheckboxDelegate];

    static new(): CheckboxDelegate {
        return super.new() as CheckboxDelegate;
    }

    onCheckChange(checkbox: NSCheckbox) {
        const owner: Checkbox = (checkbox as any).owner;

        if (owner) {
            owner.notifyPropertyChange(checkedProperty.name, checkbox.isChecked)
        }
    }
}