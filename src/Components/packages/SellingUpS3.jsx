import React , {useState} from 'react';
import { uploadFile } from 'react-s3';

const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS,
        secretAccessKey: process.env.REACT_APP_SECRET,
}

const SellingUpS3 = ({form, setForm, title, required}) => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        
        uploadFile(file, config)
            .then(data => {console.log(data); setForm({...form, backInfo: data.location})})
            .catch(err => console.error(err))
    }

    return <div className="inputDivPackage">
    
      <div className="PAYtitlePackage" style={{ display: "flex" }}>
        {title} <p style={{ color: "red" }}>{required}</p>
      </div>
      <input
        onChange={handleFileInput}
        type="file"
        className="AQinputPackage"
        style={{ backgroundColor: "transparent" }}
      ></input>
      <button onClick={() => handleUpload(selectedFile)} className='PAYbutton' style={{maxHeight: '25px'}}><p className='PAYbuttonText' style={{marginTop: '5px'}}> Upload File </p></button>
     
    </div>
}

export default SellingUpS3;