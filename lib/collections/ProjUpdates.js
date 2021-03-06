/**
 * This Code was created on April 2014
 * If you find any bug, unreadable code, messy code, potential bug code, etc
 * Please contact me at:
 * Ega Radiegtya / radiegtya@yahoo.co.id / 085641278479
 */

ProjUpdates = new Mongo.Collection("projUpdates");

var schemas = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        optional: true
    },
    content: {
        type: String,
        label: "Content"
    },
	parentType: {
		type: String,
		label: "Parent Type",
		optional: true
	},
	parentID: {
		type: Number,
		label: "Parent ID",
		optional: true
	},
	url: {
		type: String,
		label: "URL",
		optional: true
	},
	status: {
		type: String,
		label: "Status",
		optional: true
	},
	slug: {
		type: String,
		label: "Slug",
		optional: true
	},
	tags: {
		type: Object,
		label: "Tags",
		optional: true
	},
    imageId: {
        type: String,
        label: "Image",
        optional: true,
    },
    /* AUTOVALUE */
    appId: {
        type: String,
        label: "App Id",
        autoValue: function() {
            if (this.isInsert)
                return App.id;
        },
    },
    createdAt: {
        type: Date,
        label: "Created Date",
        autoValue: function() {
            if (this.isInsert)
                return new Date;
        },
        denyUpdate: true,
        optional: true
    },
    updatedAt: {
        type: Date,
        label: "Updated Date",
        autoValue: function() {
            return new Date();
        },
        optional: true
    },
    createdUserId: {
        type: String,
        label: "Created by",
        autoValue: function() {
            if (this.isInsert)
                return Meteor.user()._id;
        },
        denyUpdate: true,
        optional: true
    },
    updatedUserId: {
        type: String,
        label: "Updated by",
        autoValue: function() {
            return Meteor.user()._id;
        },
        optional: true
    },
    blogId: {
        type: String,
        label: "Blog Id",
        optional: true
    },
});

ProjUpdates.attachSchema(schemas);

ProjUpdates.allow({
    insert: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'projUpdates', 'insert');
        return result;
    },
    update: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'projUpdates', 'update');
        return result;
    },
    remove: function(userId, doc) {
        var result = Meteor.call('MugenRoleActions.getRoles', 'projUpdates', 'remove');
        return result;
    },
});

//activate groundDB for projUpdates collection to work offline
Ground.Collection(ProjUpdates);

ProjUpdates.helpers({
    image: function() {
        return Images.findOne(this.imageId);
    },
    createdUser: function() {
        return Meteor.users.findOne(this.createdUserId);
    },
    updatedUser: function() {
        return Meteor.users.findOne(this.updatedUserId);
    },
});