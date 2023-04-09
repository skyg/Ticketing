import { Template } from 'meteor/templating';
import { Tickets } from '../collections.js';

import './ticketDetails.html';

Template.ticketDetails.onCreated(function () {
    const ticketId = FlowRouter.getParam('_id');
    this.subscribe('Ticket', ticketId);
});

Template.ticketDetails.helpers({
    ticket() {
        const ticketId = FlowRouter.getParam('_id');
        return Tickets.findOne({ _id: ticketId });
    }
});