// Description
//   A Hubot script that DESCRIPTION
//
// Configuration:
//   None
//
// Commands:
//   hubot hatena-star-count <url> - count hatena star
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.respond(/hatena-star-count (.+)$/i, function(res) {
    var url;
    url = res.match[1];
    return res.http('http://s.hatena.ne.jp/blog.json?uri=' + url).get()(function(err, _, body) {
      if (err != null) {
        return res.send(err);
      }
      return res.send(JSON.parse(body).star_count);
    });
  });
};
