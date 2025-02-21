import { upload } from '@testing-library/user-event/dist/upload';
import React from 'react';
import * as XLSX from 'xlsx';
import { BASE_URL } from './util';

function FileInput({ onFileUpload }) {
  const [data, setData] = React.useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);

      setData(sheetData);
    };
    

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}


export default FileInput;