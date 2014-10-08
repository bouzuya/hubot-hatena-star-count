# Description
#   A Hubot script that DESCRIPTION
#
# Configuration:
#   None
#
# Commands:
#   hubot hatena-star-count <url> - count hatena star
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.respond /hatena-star-count (.+)$/i, (res) ->
    url = res.match[1]
    res
      .http('http://s.hatena.ne.jp/blog.json?uri=' + url)
      .get() (err, _, body) ->
        return res.send(err) if err?
        res.send JSON.parse(body).star_count
