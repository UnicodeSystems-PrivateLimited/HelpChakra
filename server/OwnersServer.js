Meteor.publishComposite('owners', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Owners with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Owners.find(doc, sort);
        },
        children: [
            /* return all related Users */
            {
                find: function(collection) {
                    return Meteor.users.find({
                        $or: [
                            {_id: collection.createdUserId},
                            {_id: collection.updatedUserId},
                        ]
                    });
                }
            },
            
        ],
    }
});


Meteor.methods({
    "Owners.insert": function(doc) {
        var _id = Owners.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Owners.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */