const ImageUploadBox = ({ onUpload }) => {
  return (
    <div className="bg-white shadow-lg border-2 border-dashed border-primary/30 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <p className="text-gray-500 mb-2">Drag & drop or upload image</p>

      <input
        type="file"
        onChange={(e) => onUpload(e.target.files[0])}
      />
    </div>
  );
};

export default ImageUploadBox;