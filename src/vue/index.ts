import { Checkbox } from '../checkbox';
import { Radio } from '../radio';
import { RadioGroup } from '../radiogroup';

export default {
    install(Vue) {
        Vue.registerElement('Checkbox', () => Checkbox, {
            model: {
                prop: 'checked',
                event: 'checkChange'
            }
        });

        Vue.registerElement('Radio', () => Radio, {
            model: {
                prop: 'checked',
                event: 'checkChange'
            }
        });

        Vue.registerElement('RadioGroup', () => RadioGroup, {
            model: {
                prop: 'value',
                event: 'checkChange'
            }
        });
    }
};
