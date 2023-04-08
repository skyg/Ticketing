import { Template } from 'meteor/templating';
import { Tickets } from '/imports/api/tickets/tickets.js';

import '/imports/ui/tickets/ticketDetails.html';

Template.ticketDetails.onCreated(function() {
    this.subscribe('Tickets');
});

Template.ticketDetails.helpers({
    ticket() {
        const ticketId = FlowRouter.getParam('_id');
        return Tickets.findOne({ _id: ticketId });
    }
});