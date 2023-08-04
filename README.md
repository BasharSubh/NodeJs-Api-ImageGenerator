# NodeJs-Api-ImageGenerator

A simple web application for image generation.

## Introduction

This project is a simple web application that leverages the OpenAI API to generate images based on user input. Users can provide a prompt, the number of images to generate, and the desired size for the images. The application then sends a request to the OpenAI API and displays the generated images to the user.

## API Endpoint

The application exposes the following API endpoint for generating images:
```
Endpoint: /api
Method: GET
Parameters:
msg: The prompt for image generation (e.g., "cat").
num: The number of images to generate (e.g., 3).
size: The desired size for the images (e.g., "512x512").
```
Example URL: http://localhost:5001/api?msg=cat&num=3&size=512x512
```
   output : 
     {
         created: 1691159781,
         data: [
           {
             url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-uqI8eWwimeb7seu8t7x4ZF2a/user-pcriWtKDU8l4SoRzZ3ymXuq9/img-lUb7kpCxqKfAJOvlZ9zMCefg.png?st=2023-08-04T13%3A36%3A21Z&se=2023-08-04T15%3A36%3A21Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-08-03T23%3A43%3A39Z&ske=2023-08-04T23%3A43%3A39Z&sks=b&skv=2021-08-06&sig=CnWcWN/5P84uGhK8LZCn/3hLN/E7m%2BG9HZuiA26Ay64%3D'
           }
         ]
       }
```

## Environment Variables

This project uses the KEY environment variable to store the OpenAI API key. Ensure you have set the KEY variable as mentioned in the installation steps.
## Contributing

Guidelines for contributing to the project.

## License

This project is licensed under the MIT License.

## Contact
contact me at bashar.subh@gmail.com
