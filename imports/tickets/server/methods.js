import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Tickets } from '../lib/collections.js';

Meteor.methods({
    'tickets.create'(ticket) {
        // Refuse if not logged in
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        check(ticket, Object);
        check(ticket.title, String);
        check(ticket.description, String);
        check(ticket.status, String);

        ticket.createdAt = new Date();
        ticket.user = Meteor.userId();

        const ticketId = Tickets.insert(ticket);

        return ticketId;
    },
    'tickets.update'(ticket) {
        ticket.updatedAt = new Date();
        Tickets.update({ _id: ticket._id }, { $set: ticket });
    },
    'tickets.delete'(ticketId) {
        Tickets.remove(ticketId);
    },
});