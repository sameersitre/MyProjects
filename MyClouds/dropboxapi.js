var dbx = new Dropbox({ accessToken: "42lnSZxd8PAAAAAAAAAADy1uJawFjW1W9HewEjzO9NLEnp-iLIdKXPWWMMm_g9Sw"});
dbx.usersGetCurrentAccount()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });