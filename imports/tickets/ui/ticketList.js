import { Template } from 'meteor/templating';
import { Tickets } from '../collections.js';

import './ticketList.html';

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