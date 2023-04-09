import { Template } from 'meteor/templating';
import { Tickets } from '../lib/collections.js';
import { Status } from "../../status/lib/collections";

import './ticketList.html';


Template.ticketList.onCreated(function() {
    this.subscribe('Tickets');
    this.subscribe('Status');
});

Template.ticketList.helpers({
    isEqual(a, b) {
        return a === b;
    },
    tickets() {
        return Tickets.find({}, { sort: { createdAt: -1 } });
    },
    statusName() {
        const status = Status.findOne({ _id: this.status });
        return status ? status.name : 'Indéfini';
    },
    statusColor() {
        const status = Status.findOne({ _id: this.status });
        return status ? status.color : 'text-muted';
    },
    countTickets() {
        return Tickets.find().count();
    },
    getUserInitials(userId) {
        const user = Meteor.users.findOne(userId);
        return user && user.profile && user.profile.initials;
    }
});

Template.ticketList.events({
    'click .delete': function(event) {
        event.preventDefault();

        const ticketId = this.ticketId || event.currentTarget.getAttribute('data-ticketId');

        Meteor.call('tickets.delete', ticketId, function(error) {
            if (error) {
                alert(error.reason);
            }
        });
    }
});