import { Color, CssProperty, EventData, Property, Style, View } from "@nativescript/core";
import { RadioGroup } from "./radiogroup";

export class Radio extends View {
    static checkEvent: string;
    public group: RadioGroup;
    on(event: 'tap', callback: (args: EventData) => void, thisArg?: any);
}

export const valueProperty: Property<Radio, string>;
export const checkedProperty: Property<Radio, string>;
export const activeColorProperty: CssProperty<Style, Color>;
export const inactiveColorProperty: CssProperty<Style, Color>;