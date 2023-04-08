import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
    action: function () {
        import '/imports/ui/home/home.js';
        BlazeLayout.render('mainLayout', { content: 'home' });
    },
});

FlowRouter.route('/tickets', {
    action: function () {
        import '/imports/ui/tickets/ticketList.js';
        BlazeLayout.render('mainLayout', { content: 'ticketList' });
    }
});

FlowRouter.route('/tickets/create', {
    action: function() {
        import '/imports/ui/tickets/ticketForm.js';
        BlazeLayout.render('mainLayout', { content: 'ticketForm' });
    }
});

FlowRouter.route('/tickets/:_id', {
    name: 'ticketDetails',
    action: function () {
        import '/imports/ui/tickets/ticketDetails.js';
        BlazeLayout.render('mainLayout', { content: 'ticketDetails' });
    },
});