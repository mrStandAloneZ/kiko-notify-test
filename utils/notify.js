const axios = require('axios')
const querystring = require('querystring');

// line notify
 const notify = async (message) => {
  try {
    const res = await axios({
    method: "POST",
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded',
      "Authorization": 'Bearer VlKSl8iKMiNAK8J3i574jFBsScjiLpTQ9v987rFZqbR',
      "Access-Control-Allow-Origin": "*"
    },
    data: querystring.stringify({
        message: message,
      })
  });
  if (res.status === 200) {
      console.log(res)
  }
    return null;
} catch (e) {
  console.log('IN CATCH' , e);
}
 
}


module.exports = notify
