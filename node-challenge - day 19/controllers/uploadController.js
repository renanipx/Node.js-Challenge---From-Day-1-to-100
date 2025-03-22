const multer = require('multer');
const path = require('path');

// Set up multer storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.UPLOAD_DIR); // Use directory from .env
  },
  filename: (req, file, cb) => {
    // Generate a unique file name based on timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Initialize multer with storage settings
const upload = multer({ storage: storage });

// Controller function to handle file upload
exports.handleFileUpload = (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).send('Error uploading file.');
    }
    res.status(200).send('File uploaded successfully!');
  });
};
