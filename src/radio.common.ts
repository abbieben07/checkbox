import { Color, CssProperty, Property, Style, View } from '@nativescript/core';
import { Radio as RadioDefinition } from './Radio';

export abstract class RadioCommon extends View implements RadioDefinition {
    public static checkEvent = 'checkChange';
}

export const valueProperty = new Property<RadioCommon, string>({
    name: 'value'
});
valueProperty.register(RadioCommon);

export const checkedProperty = new Property<RadioCommon, boolean>({
    name: 'checked'
});
checkedProperty.register(RadioCommon);

export const activeColorProperty = new CssProperty<Style, Color>({
    name: 'activeColor',
    cssName: 'active-color'
});
activeColorProperty.register(Style);

export const inactiveColorProperty = new CssProperty<Style, Color>({
    name: 'inactiveColor',
    cssName: 'inactive-color'
});
inactiveColorProperty.register(Style);
