const axios = require('axios')
const querystring = require('querystring');

const authTest = 'Bearer VlKSl8iKMiNAK8J3i574jFBsScjiLpTQ9v987rFZqbR';
const authProd = 'Bearer PXGPlW3KJl62w0CaKplVK4NYyjenN1nI1MF7eTAhHeL';

// line notify
 const notify = async (message) => {
  try {
    const res = await axios({
    method: "POST",
    url: 'https://notify-api.line.me/api/notify',
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded',
      "Authorization": authProd,
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
