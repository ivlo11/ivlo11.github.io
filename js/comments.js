$(function() {
  var ref = new Firebase("https://techblogcomments.firebaseio.com/"),
      postRef = ref.child(slugify(window.location.pathname)),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      };

  postRef.on("child_added", function(snapshot) {
    var newPost = snapshot.val();
    $(".comments").prepend('<div class="comment">' +
      '<h4>' + newPost.name + '</h4>' +
      '<div class="profile-image"><img src="http://www.gravatar.com/avatar/' + newPost.md5Email + '?s=100&d=retro"/></div> ' +
      '<span class="date">' + moment(newPost.postedAt).fromNow() + '</span><p>' + escapeHtml(newPost.message)  + '</p></div>');
  });

  $("#comment").submit(function() {
    postRef.push().set({
      name: $("#name").val(),
      message: $("#message").val(),
      md5Email: md5($("#email").val()),
      postedAt: Firebase.ServerValue.TIMESTAMP
    });

    $("input[type=text], textarea").val("");
    return false;
  });

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function slugify(text) {
    return text.toString().toLowerCase().trim()
      .replace(/&/g, '-and-')
      .replace(/[\s\W-]+/g, '-')
      .replace(/[^a-zA-Z0-9-_]+/g,'');
  }
});
