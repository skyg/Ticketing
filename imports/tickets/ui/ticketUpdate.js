import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tickets } from "../lib/collections";
import { Status } from "../../status/lib/collections";

import './ticketUpdate.html';

Template.ticketUpdate.onCreated(function() {
    const ticketId = FlowRouter.getParam('_id');
    this.subscribe('Ticket', ticketId);

    this.subscribe('Status');
});

Template.ticketUpdate.helpers({
    isEqual(a, b) {
        return a === b;
    },
    ticket() {
        const ticketId = FlowRouter.getParam('_id');
        return Tickets.findOne({ _id: ticketId });
    },
    statuses() {
        return Status.find();
    },
});

Template.ticketUpdate.events({
    'submit form': function(event) {
        event.preventDefault();

        const ticketId = FlowRouter.getParam('_id');

        const form = event.target;
        const title = form.title.value.trim();
        const description = form.description.value.trim();
        const status = form.status.value;

        Meteor.call('tickets.update', { _id: ticketId, title, description, status }, (error) => {
            if (error) {
                console.log(error);
            } else {
                form.reset();
                FlowRouter.go('/tickets/'+ticketId);
            }
        });
    }
});