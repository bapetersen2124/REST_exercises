$(document).ready(function(){
var list = $('#postList')
var content = $('#container')

$('#clear').on('click', function(event){
  $(content).empty();
})

$('#allPosts').on('click', function(event){
  $(content).empty();
    $.get("https://jsonplaceholder.typicode.com/posts", function(posts){
        posts.forEach(function(post){
        var div = $('<div></div>');
        div.text(post.title);
        content.append(div)
      })
  })
});

$('#postID10').on('click', function(event){
    $(content).empty();
    $.get("https://jsonplaceholder.typicode.com/posts/10", function(post){
        var div = $('<div></div>');
        div.text(post.title);
        content.append(div)
      })
  });


$('#commentsPostId12').on('click', function(event){
  $(content).empty();
  $.get('https://jsonplaceholder.typicode.com/posts/12/comments', function(comments){
    comments.forEach(function(comment){
      var p1 = $('<p></p>');
      p1.text(comment.email);
      var p2 = $('<p></p>');
      p2.text(comment.name);
      var p3 = $('<p></p>')
      p3.text(comment.body)
      content.append('<br/>', p1, p2, p3, '______', '<br/>');
    })
  })
})


$('#user2').on('click',function(event){
  $(content).empty();
  $.get('https://jsonplaceholder.typicode.com/user/2/posts', function(posts){
    posts.forEach(function(post){
      var p1 = $('<p></p>');
      p1.text(post.title);
      var p2 = $('<p></p>');
      p2.text(post.body);
      content.append(p1, p2, '______')
    })
  })
})

$('#newPost').on('click', function(event){
$(content).empty();
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json, text/plain, */*"
  },
  body: JSON.stringify({
    userId: 1,
    title: "New Post",
    body: "Text for a new Post!"
  })
}).then(response => {
    if (response.ok) {
      return response.json();
    }
  }).then(jsonResponse => {
    var p1 = $('<p></p>');
    p1.text(jsonResponse.title);
    var p2 = $('<p></p>');
    p2.text(jsonResponse.body);
    content.append(p1, p2)
}).catch(error => {
      console.log(error.message)
    })
});


$('#replacePost12').on('click', function(event) {
  $(content).empty();
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json, text/plain, */*"
    },
    data: {
      userId: 1,
      title: "Replacing Post 12",
      body: "Text for an even newer post!"
      }
  }).then(response => {
    if (response.ok){
    return response.json();
    }
  }).then(jsonResponse => {
      console.log(jsonResponse);
  }).catch(error => {
    console.log(error.message)
    })
});


$('#updatedTitle').on('click', function(event){
  $(content).empty();
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: "PUT",
    data: {
      title: "Updated Title"
    }
  }).then(response => {
    if (response.ok) {
      console.log(response.json())
      return response.json()
    }
  }).then (jsonResponse => {
      console.log(jsonResponse);
  }).catch(error => {
    console.log(error.message)
  })
});

$('#deletedPost').on('click', function(event){
  $(content).empty();
  fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: "DELETE"
  }).then(response => {
    if (response.ok) {
      console.log(response.json())
      return response.json();
    }
  }).then (jsonResponse => {
    console.log(jsonResponse);
  }).catch(error => {
    console.log(error.message)
  })
});

});
