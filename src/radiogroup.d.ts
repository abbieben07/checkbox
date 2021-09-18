import { Color, CssProperty, EventData, Property, Style, View } from '@nativescript/core';

export class RadioGroup extends View {
    static checkEvent: string;

    on(event: 'tap', callback: (args: EventData) => void, thisArg?: any);
}

export const valueProperty: Property<RadioGroup, string>;
export const checkedProperty: Property<RadioGroup, string>;
export const activeColorProperty: CssProperty<Style, Color>;
export const inactiveColorProperty: CssProperty<Style, Color>;
