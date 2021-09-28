import { CheckboxCommon, checkedProperty, valueProperty } from './checkbox.common';
export class Checkbox extends CheckboxCommon {
    nativeView: android.widget.CheckBox;

    public createNativeView(): Object {
        const checkbox = new android.widget.CheckBox(this._context);
        checkbox.setOnCheckedChangeListener(new CheckboxListener());
        return checkbox;
    }

    initNativeView(): void {
        (this.nativeView as any).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (this.nativeView as any).owner = null;
        super.disposeNativeView();
    }

    [checkedProperty.setNative](value: boolean) {
        this.nativeView.setChecked(value);
    }

    get activeColor(): string {
        return (this.style as any).activeColor;
    }
    set activeColor(color: string) {
        (this.style as any).activeColor = color;
    }

    get inactiveColor(): string {
        return (this.style as any).inactiveColor;
    }
    set inactiveColor(color: string) {
        (this.style as any).inactiveColor = color;
    }
}
@NativeClass()
@Interfaces([android.widget.CompoundButton.OnCheckedChangeListener])
class CheckboxListener extends java.lang.Object implements android.widget.CompoundButton.OnCheckedChangeListener {
    constructor() {
        super();
        return global.__native(this);
    }

    public onCheckedChanged(checkbox: globalAndroid.widget.CompoundButton, isChecked: boolean): void {
        const owner: Checkbox = (checkbox as any).owner;

        if (owner) {
            owner.notifyPropertyChange(checkedProperty.name, isChecked)
        }
    }
}
