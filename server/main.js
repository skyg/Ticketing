import { Meteor } from 'meteor/meteor';
import { Tickets } from '../imports/tickets/collections.js';
import '../imports/tickets/methods.js';

Meteor.publish('Tickets', function () {
    return Tickets.find();
});

Meteor.publish('Ticket', function (ticketId) {
    return Tickets.find({ _id: ticketId });
});

Meteor.startup(() => {

    //Tickets.remove({});

    if (Tickets.find().count() === 0) {
        const sampleTickets = [
            {
                title: 'Mon premier ticket',
                description: 'Ceci est un ticket de test pour voir.',
                createdAt: new Date(),
                status: 'open',
            }
        ];

        sampleTickets.forEach((ticket) => {
            Tickets.insert(ticket);
        });
    }

});
