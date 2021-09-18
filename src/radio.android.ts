import { checkedProperty, valueProperty } from './radio';
import { RadioCommon } from './radio.common';

export class Radio extends RadioCommon {
    nativeView: android.widget.RadioButton;
    value: string;

    public createNativeView(): Object {
        const radio = new android.widget.RadioButton(this._context);
        radio.setOnCheckedChangeListener(new CheckChangeListener());
        return radio;
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
    public owner: Radio;

    constructor() {
        super();

        return global.__native(this);
    }

    public onCheckedChanged(radio: globalAndroid.widget.CompoundButton, isChecked: boolean): void {
        const owner = (radio as any).owner;

        if (owner) {
            owner.notify({
                eventName: Radio.checkEvent,
                object: owner,
                value: isChecked
            });
        }
    }
}
