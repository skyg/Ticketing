import { Meteor } from 'meteor/meteor';

Template.registerHelper('isLoggedIn', function() {
    return Meteor.userId() !== null;
});
