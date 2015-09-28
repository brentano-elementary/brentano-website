var access_token = '939349446104194|mLgZBXbXExL5cDeE8AV6lKj3oW8';
var app_id = '939349446104194';
var page_id = '165169970262208';
var timeline_album = '397825356996667';

$(document).ready(function(){
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
        FB.init({
            appId: app_id,
            version: 'v2.4',
        });
        loadFeed();
    });
});

function loadFeed(){
    var url = '/' + page_id + '/feed'
    var params = {
        'access_token': access_token,
        'fields': 'message,story,created_time,picture,object_id,from',
        'limit': 5
    }
    var template_guts = $('#fb-feed-template').html()
    FB.api(url,'get', params, function(response){
        // console.log(response)
        var template = new EJS({'text': template_guts});
        $('#fb-feed').html(template.render(response));
    });
}
