const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();



app.get('/api', async (req, res) => {


    // example input: http://localhost:5001/api/?msg=cat&num=1&size=512x512
    // output : 
    // {
    //     created: 1691159781,
    //     data: [
    //       {
    //         url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-uqI8eWwimeb7seu8t7x4ZF2a/user-pcriWtKDU8l4SoRzZ3ymXuq9/img-lUb7kpCxqKfAJOvlZ9zMCefg.png?st=2023-08-04T13%3A36%3A21Z&se=2023-08-04T15%3A36%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-03T23%3A43%3A39Z&ske=2023-08-04T23%3A43%3A39Z&sks=b&skv=2021-08-06&sig=CnWcWN/5P84uGhK8LZCn/3hLN/E7m%2BG9HZuiA26Ay64%3D'
    //       }
    //     ]
    //   }

    const { msg, num, size } = req.query

    if (!msg || !num || !size) {
        res.status(400).json({error: "all filed are required"})
    }

  const key = process.env.KEY; 
  const apiUrl = 'https://api.openai.com/v1/images/generations';

  try {
    const response = await axios.post(
      apiUrl,
      {
        prompt: msg,
        n: parseInt(num),
        size: size
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
        }
      }
    );

      res.json(response.data);
      console.log('logged', response.data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});

const port = 5001;
app.listen(port, () => {
  console.log(`app working on port ${port}`);
});






