import { RadioCommon, checkedProperty, valueProperty } from './radio.common';
import { RadioGroup, selectedProperty } from './radiogroup';

export class Radio extends RadioCommon {
    nativeView: android.widget.RadioButton;

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

    [checkedProperty.setNative](value: boolean) {
        this.nativeView.setChecked(value);
    }
}

@NativeClass()
@Interfaces([android.widget.CompoundButton.OnCheckedChangeListener])
class CheckChangeListener extends java.lang.Object implements android.widget.CompoundButton.OnCheckedChangeListener {

    constructor() {
        super();

        return global.__native(this);
    }

    public onCheckedChanged(radio: globalAndroid.widget.CompoundButton, isChecked: boolean): void {
        const owner: Radio = (radio as any).owner;

        if (owner) {
            owner.notifyPropertyChange(checkedProperty.name, isChecked);
            if (owner.group && isChecked && owner.group.get(selectedProperty.name) != owner.get(valueProperty.name)) {
                (owner.group as RadioGroup).setProperty(selectedProperty.name, owner.get(valueProperty.name))
            }
        }

    }
}
