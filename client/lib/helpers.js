import { Meteor } from 'meteor/meteor';

Template.registerHelper('isLoggedIn', function() {
    return Meteor.userId() !== null;
});

Template.registerHelper('getUserName', function(userId) {
    const user = Meteor.users.findOne(userId);
    return user && user.profile && user.profile.name;
});

Template.registerHelper('getUserInitials', function(userId) {
    const user = Meteor.users.findOne(userId);
    return user && user.profile && user.profile.initials;
});
