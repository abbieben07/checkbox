import { Color, ContainerView, CssProperty, Property, Style } from '@nativescript/core';
import { RadioGroup as RadioGroupDefinition } from './RadioGroup';

export abstract class RadioGroupCommon extends ContainerView implements RadioGroupDefinition {
    public static checkEvent = 'checkChange';
}

export const valueProperty = new Property<RadioGroupCommon, string>({
    name: 'value'
});
valueProperty.register(RadioGroupCommon);

export const checkedProperty = new Property<RadioGroupCommon, boolean>({
    name: 'checked'
});
checkedProperty.register(RadioGroupCommon);

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
