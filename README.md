# Simple Image Server

Retrieve image assets at any size from a single source image

## Installation

Use the package manager npm to install dependencies.

```bash
npm install
```

## Usage

### Add source images

Add source images to `/images` directory

### Start the server

You can change the port in the `.env` file.

```bash
node server.js
```

### Fetch optimised images

```bash
// Original
http://localhost:5555/image/landscape.jpg

// Optimised
http://localhost:5555/image/landscape.jpg?width=800
http://localhost:5555/image/landscape.jpg?width=1000&format=png
http://localhost:5555/image/landscape.jpg?width=1500&blur=3
```
## Options
- width
- height
- blur
- format (jpg, png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
