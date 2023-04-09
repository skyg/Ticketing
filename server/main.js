import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

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

Accounts.onCreateUser((options, user) => {
    const name = user.emails[0].address.split('@')[0];
    const initials = name.slice(0, 2);
    user.profile = { name, initials };
    return user;
});

Meteor.startup(() => {

    //Tickets.remove({});
    //Status.remove({});

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
