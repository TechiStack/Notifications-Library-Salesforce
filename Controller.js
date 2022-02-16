({
    handleShowNotice : function(component, event, helper) {
        component.find("notifLib").showNotice({
            "variant": "error",
            "header": "Something has gone wrong!",
            "message": "Unfortunately, there was a problem updating the record.",
            closeCallback: function() {
                alert("You closed the alert!");
            }
        });
    },
    handleShowToast : function(component, event, helper) {
        //Accepted variants are info, success, warning, and error.
        component.find('notifLib').showToast({
            "title": "Success!",
            "message": "Record {0} created! See it {1}!",
            "messageData": [
                'Salesforce',
                {
                    url: 'http://www.salesforce.com/',
                    label: 'here',
                }
            ]
        });
    }
})
