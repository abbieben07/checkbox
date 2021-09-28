import { Checkbox } from '../checkbox';
import { Radio } from '../radio';
import { RadioGroup } from '../radiogroup';

export default {
    install(Vue) {
        Vue.registerElement('Checkbox', () => Checkbox, {
            model: {
                prop: 'checked',
                event: 'checkedChange'
            }
        });

        Vue.registerElement('Radio', () => Radio, {
            model: {
                prop: 'checked',
                event: 'checkedChange'
            }
        });

        Vue.registerElement('RadioGroup', () => RadioGroup, {
            model: {
                prop: 'selected',
                event: 'selectedChange'
            }
        });
    }
};
