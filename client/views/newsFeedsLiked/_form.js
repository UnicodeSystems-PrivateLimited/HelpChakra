Template.newsFeedsLiked_form.rendered = function() {
    
};

Template.newsFeedsLiked_form.helpers({
    /* show error message on view */
    error: function(field) {
        return MeteorisSimpleSchema.error(NewsFeedsLiked, field);
    },
    /* get current selected dropdown */
    selected: function(_id) {
        if (this._id === _id)
            return "selected";
    },
    
});