import { Template } from 'meteor/templating';
import { Tickets } from '../lib/collections.js';
import { Status } from "../../status/lib/collections";

import './ticketDetails.html';

Template.ticketDetails.onCreated(function () {
    const ticketId = FlowRouter.getParam('_id');
    this.subscribe('Ticket', ticketId);

    this.subscribe('Status');
});

Template.ticketDetails.helpers({
    ticket() {
        const ticketId = FlowRouter.getParam('_id');
        const ticket = Tickets.findOne({ _id: ticketId });
        ticket.status = Status.findOne({ _id: ticket.status });

        return ticket;
    }
});

Template.ticketDetails.events({
    'click .delete': function(event) {
        event.preventDefault();

        const ticketId = this.ticketId || event.currentTarget.getAttribute('data-ticketId');

        Meteor.call('tickets.delete', ticketId, function(error) {
            if (error) {
                alert(error.reason);
            }
            else{
                FlowRouter.go('/tickets');
            }
        });
    }
});