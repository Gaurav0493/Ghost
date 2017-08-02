import ModalComponent from 'ghost-admin/components/modals/base';
import {reads} from 'ember-computed';

export default ModalComponent.extend({
    title: reads('model.title'),
    message: reads('model.message'),
    warnings: reads('model.warnings'),
    errors: reads('model.errors'),
    fatalErrors: reads('model.fatalErrors'),
    canActivate: reads('model.canActivate'),

    'data-test-theme-warnings-modal': true
});
