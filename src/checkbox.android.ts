import { checkedProperty, valueProperty } from './checkbox';
import { CheckboxCommon } from './checkbox.common';

export class Checkbox extends CheckboxCommon {
    nativeView: android.widget.CheckBox;
    value: string;

    public createNativeView(): Object {
        const checkbox = new android.widget.CheckBox(this._context);
        checkbox.setOnCheckedChangeListener(new CheckChangeListener());
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

    [valueProperty.setNative](value: string) {
        this.value = value;
    }

    [checkedProperty.setNative](value: boolean) {
        this.nativeView.setChecked(value);
    }
}

//@Interfaces([android.widget.CompoundButton.OnCheckedChangeListener])
@NativeClass()
class CheckChangeListener extends java.lang.Object implements android.widget.CompoundButton.OnCheckedChangeListener {
    public owner: Checkbox;

    constructor() {
        super();

        return global.__native(this);
    }

    public onCheckedChanged(checkbox: globalAndroid.widget.CompoundButton, isChecked: boolean): void {
        const owner = (checkbox as any).owner;

        if (owner) {
            owner.notify({
                eventName: Checkbox.checkEvent,
                object: owner,
                value: isChecked
            });
        }
    }
}
