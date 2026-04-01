const ImageUploadBox = ({ onUpload }) => {
  return (
    <div className="border p-4 rounded">
      <h3>Upload Image (Optional)</h3>

      <input
        type="file"
        onChange={(e) => onUpload(e.target.files[0])}
      />
    </div>
  );
};

export default ImageUploadBox;