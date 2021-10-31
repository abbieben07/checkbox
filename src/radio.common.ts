import { Color, CssProperty, Property, Style, View } from '@nativescript/core';
import { Radio as RadioDefinition } from './radio';
import { RadioGroup } from './radiogroup';

export abstract class RadioCommon extends View implements RadioDefinition {
    public static checkedEvent: string = 'checkedChange';
    public group: RadioGroup = null;
}

export const valueProperty = new Property<RadioCommon, string>({
    name: 'value',
});
valueProperty.register(RadioCommon);

export const checkedProperty = new Property<RadioCommon, boolean>({
    name: 'checked',
});
checkedProperty.register(RadioCommon);

export const activeColorProperty = new CssProperty<Style, Color>({
    name: 'activeColor',
    cssName: 'active-color',
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
activeColorProperty.register(Style);

export const inactiveColorProperty = new CssProperty<Style, Color>({
    name: 'inactiveColor',
    cssName: 'inactive-color',
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
inactiveColorProperty.register(Style);
