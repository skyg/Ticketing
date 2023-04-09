import { Meteor } from 'meteor/meteor';

import { Tickets } from '../imports/tickets/lib/collections.js';
import { Status } from '../imports/status/lib/collections.js';
import '../imports/tickets/server/methods.js';

Meteor.publish('Tickets', function () {
    return Tickets.find();
});
Meteor.publish('Ticket', function (ticketId) {
    return Tickets.find({ _id: ticketId });
});

Meteor.publish('Status', function () {
    return Status.find();
});

Meteor.startup(() => {

    //Tickets.remove({});
    //Status.remove({});

    if (Tickets.find().count() === 0) {
        const sampleTickets = [
            {
                title: 'Mon premier ticket',
                description: 'Ceci est un ticket de test pour voir.',
                createdAt: new Date(),
                status: '',
            }
        ];

        sampleTickets.forEach((ticket) => {
            Tickets.insert(ticket);
        });
    }

    if (Status.find().count() === 0) {

        const statusList = [
            {name: 'Ouvert', color: 'text-grey',},
            {name: 'A faire', color: 'text-warning',},
            {name: 'En cours', color: 'text-primary',},
            {name: 'Terminée', color: 'text-success',}
        ];

        statusList.forEach((status) => {
            Status.insert(status);
        });
    }

});
