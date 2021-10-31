import { Color, CssProperty, LayoutBase, Property, StackLayout, Style, View } from '@nativescript/core';
import { checkedProperty, RadioCommon as Radio, valueProperty } from './radio.common';

export const selectedProperty = new Property<RadioGroup, string>({
    name: 'selected',
});
export const activeColorProperty = new CssProperty<Style, Color>({
    name: 'activeColor',
    cssName: 'active-color',
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
export const inactiveColorProperty = new CssProperty<Style, Color>({
    name: 'inactiveColor',
    cssName: 'inactive-color',
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
export abstract class RadioGroup extends StackLayout {
    public static valueEvent = 'valueChange';
    radios: Radio[] = [];
    public createNativeView(): Object {
        const view = super.createNativeView();
        this.eachChildView((view: any) => {

            const Children = (child: View) => {
                child.eachChildView((view: View) => {
                    if (view instanceof Radio) {
                        this.radios.push(view);
                        view.group = this;
                    } else if (view instanceof LayoutBase) {
                        Children(view);
                    }
                    return true;
                });
            };
            if (view instanceof Radio) {
                this.radios.push(view);
                view.group = this;
            } else if (view instanceof LayoutBase) {
                Children(view);
            }
            return true;
        });

        return view;
    }

    initNativeView(): void {
        (this.nativeView as any).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (this.nativeView as any).owner = null;
        super.disposeNativeView();
    }

    [selectedProperty.setNative](value: string) {
        this.radios.forEach((radio: Radio) => {
            if (radio.get(valueProperty.name) == value) {
                radio.setProperty(checkedProperty.name, true)
            } else if (radio.get(checkedProperty.name)) {
                radio.setProperty(checkedProperty.name, false)
            }
        })
    }
}

selectedProperty.register(RadioGroup);
activeColorProperty.register(Style);
inactiveColorProperty.register(Style);
