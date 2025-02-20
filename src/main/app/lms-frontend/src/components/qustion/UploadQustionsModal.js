import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import FileInput from './../../util/FileInput';

const UploadQustionsModal = ({ isOpen, onClose, onSave }) => {
  const [department, setDepartment] = useState({
    name: '',
    description: '',
  });



  const handleSubmit = () => {
    onSave(department);
    setDepartment({ name: '', description: '' });
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '1px solid #BDBDBD',
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Add Qustions
        </Typography>


        <FileInput />

        <Box mt={2}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
          >
            Upload
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{ ml: 2 }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UploadQustionsModal;
