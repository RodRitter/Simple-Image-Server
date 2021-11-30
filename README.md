# Simple Image Server

Deliver multiple optimised image sizes and formats from large, high quality source images.

## Installation

Use the package manager npm to install dependencies.

```bash
npm install
```

## Usage

### Add source images

Add your large source images in the `/images` directory.

eg. `/images/landscape.jpg`

### Start the server

You can change the port in the `.env` file.

```bash
node server.js

Simple Image Server Running
http://localhost:5555
```

### Fetch optimised images

```bash
// Original
http://localhost:5555/landscape.jpg

// Optimised
http://localhost:5555/landscape.jpg?width=800
http://localhost:5555/landscape.jpg?width=1000&format=png
http://localhost:5555/landscape.jpg?width=1500&blur=3
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
