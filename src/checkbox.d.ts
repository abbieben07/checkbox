import { Color, CssProperty, EventData, Property, Style, View } from '@nativescript/core';

export class Checkbox extends View {
    static checkEvent: string;

    on(event: 'tap', callback: (args: EventData) => void, thisArg?: any);
}

export const valueProperty: Property<Checkbox, string>;
export const checkedProperty: Property<Checkbox, string>;
export const activeColorProperty: CssProperty<Style, Color>;
export const inactiveColorProperty: CssProperty<Style, Color>;
