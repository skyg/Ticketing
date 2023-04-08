import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '/imports/ui/tickets/ticketForm.html';

Template.ticketForm.events({
    'submit form': function(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value.trim();
        const description = form.description.value.trim();
        const status = form.status.value;

        Meteor.call('tickets.create', { title, description, status }, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                form.reset();
                FlowRouter.go('/tickets');
            }
        });
    }
});