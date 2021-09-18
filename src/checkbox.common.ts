import { Color, CssProperty, Property, Style, View } from '@nativescript/core';
import { Checkbox as CheckboxDefinition } from './checkbox';

export abstract class CheckboxCommon extends View implements CheckboxDefinition {
    public static checkEvent = 'checkChange';
}

export const valueProperty = new Property<CheckboxCommon, string>({
    name: 'value'
});
valueProperty.register(CheckboxCommon);

export const checkedProperty = new Property<CheckboxCommon, boolean>({
    name: 'checked'
});
checkedProperty.register(CheckboxCommon);

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
