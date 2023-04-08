import { Template } from 'meteor/templating';
import { Tickets } from '/imports/api/tickets/tickets.js';

import '/imports/ui/tickets/ticketList.html';

Template.ticketList.onCreated(function() {
    this.subscribe('Tickets');
});

Template.ticketList.helpers({
    tickets() {
        return Tickets.find({}, { sort: { createdAt: -1 } });
    },
    countTickets() {
        let nb = Tickets.find().count();
        return nb;
    }
});