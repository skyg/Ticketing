import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Status } from '../../status/lib/collections.js';

import './ticketForm.html';

Template.ticketForm.onCreated(function() {
    this.subscribe('Status');
});

Template.ticketForm.helpers({
    statuses() {
        return Status.find();
    },
});


Template.ticketForm.events({
    'submit form': function(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value.trim();
        const description = form.description.value.trim();
        const status = form.status.value;
        const user = Meteor.userId();

        // pas certain que ce soit utile ... better safe than sorry ?
        if (!user) {
            FlowRouter.go('/');
        }

        Meteor.call('tickets.create', { title, description, status, user }, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                form.reset();
                FlowRouter.go('/tickets/'+result);
            }
        });
    }
});