Template.newsFeed_form.rendered = function() {
    
};

Template.newsFeed_form.helpers({
    /* show error message on view */
    error: function(field) {
        return MeteorisSimpleSchema.error(NewsFeed, field);
    },
    /* get current selected dropdown */
    selected: function(_id) {
        if (this._id === _id)
            return "selected";
    },
    
});