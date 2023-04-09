import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Tickets } from './collections.js';

Meteor.methods({
    'tickets.create'(ticket) {
        check(ticket, Object);
        check(ticket.title, String);
        check(ticket.description, String);
        check(ticket.status, String);

        ticket.createdAt = new Date();

        const ticketId = Tickets.insert(ticket);

        return ticketId;
    }
});