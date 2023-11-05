const axios = require('axios');
const fs = require('fs');
const path = require('path');
const https = require('https')

const imageFilePath = path.join(__dirname, '/public/images', 'car.jpg');

const requestUrl = "https://aip.baidubce.com/rest/2.0/ocr/v1/license_plate";
const accessToken = '24.78c87bf506eaeb0ebd8b202f32360c3c.2592000.1700646689.282335-41606987';

async function getCarNumber() {
  try {
    const image = fs.readFileSync(imageFilePath, { encoding: 'base64' });

    const params = {
      image: image
    };

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    const queryString = new URLSearchParams(params).toString();

    const fullUrl = `${requestUrl}?access_token=${accessToken}`;

    const options = {
        hostname: 'aip.baidubce.com',
        path: `/rest/2.0/ocr/v1/license_plate?access_token=${accessToken}`,
        method: 'POST',
        headers: headers
    };



    const response = await axios.post(fullUrl, queryString, { headers });

    const json_data = response.data;

    if (json_data && json_data.words_result && json_data.words_result.number) {
      return json_data.words_result.number;
    } else {
      throw new Error('Car number not found');
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
    getCarNumber,
};
