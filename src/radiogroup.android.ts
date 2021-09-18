import { Radio } from './radio.android';
import { valueProperty } from './radiogroup';
import { RadioGroupCommon } from './radiogroup.common';

export class RadioGroup extends RadioGroupCommon {
    nativeView: android.widget.RadioGroup;

    public createNativeView(): Object {
        const radiogroup = new android.widget.RadioGroup(this._context);
        radiogroup.setOnCheckedChangeListener(new CheckChangeListener());
        return radiogroup;
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
        this.eachChildView((view: any) => {
            if (view instanceof Radio) {
                if (view.value === value) {
                    this.nativeView.check(view.nativeView.getId());
                    return false;
                }
            }
            return true;
        });
    }

    public getSelectedValue(): string {
        const id = this.nativeView.getCheckedRadioButtonId();
        let value = null;
        this.eachChildView((view: any) => {
            if (view instanceof Radio) {
                if (view.nativeView.getId() === id) {
                    value = view.value;
                    return false;
                }
            }
            return true;
        });

        return value;
    }

    public reset(): void {
        this.nativeView.clearCheck();
    }
}

//@Interfaces([android.widget.RadioGroup.OnCheckedChangeListener])
@NativeClass()
class CheckChangeListener extends java.lang.Object implements android.widget.RadioGroup.OnCheckedChangeListener {
    public owner: RadioGroup;

    constructor() {
        super();

        return global.__native(this);
    }
    public onCheckedChanged(radiogroup: globalAndroid.widget.RadioGroup, checkedId: number): void {
        const owner: RadioGroup = (radiogroup as any).owner;

        if (owner) {
            owner.notify({
                eventName: RadioGroup.checkEvent,
                object: owner,
                value: owner
            });
        }
    }
}
