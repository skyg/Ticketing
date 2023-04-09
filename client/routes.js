import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
    action: function () {
        import '../imports/home/ui/home.js';
        BlazeLayout.render('mainLayout', { content: 'home' });
    },
});

FlowRouter.route('/tickets', {
    action: function () {
        import '../imports/tickets/ui/ticketList.js';
        BlazeLayout.render('mainLayout', { content: 'ticketList' });
    },
    triggersEnter: [
        function(context, redirect) {
            if (!Meteor.userId()) {
                redirect('/');
            }
        }
    ]
});

FlowRouter.route('/tickets/create', {
    action: function() {
        import '../imports/tickets/ui/ticketForm.js';
        BlazeLayout.render('mainLayout', { content: 'ticketForm' });
    },
    triggersEnter: [
        function(context, redirect) {
            if (!Meteor.userId()) {
                redirect('/');
            }
        }
    ]
});

FlowRouter.route('/tickets/:_id', {
    name: 'ticketDetails',
    action: function () {
        import '../imports/tickets/ui/ticketDetails.js';
        BlazeLayout.render('mainLayout', { content: 'ticketDetails' });
    },
    triggersEnter: [
        function(context, redirect) {
            if (!Meteor.userId()) {
                redirect('/');
            }
        }
    ]
});

FlowRouter.route('/tickets/update/:_id', {
    name: 'ticketUpdate',
    action: function () {
        import '../imports/tickets/ui/ticketUpdate.js';
        BlazeLayout.render('mainLayout', { content: 'ticketUpdate' });
    },
    triggersEnter: [
        function(context, redirect) {
            if (!Meteor.userId()) {
                redirect('/');
            }
        }
    ]
});