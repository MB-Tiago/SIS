import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ViewStudents.css";
import Sidebar from "./Sidebar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function BasicModal({ open, handleClose, student }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ 
        position: 'absolute', 
        width: 400, 
        bgcolor: 'background.paper', 
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Typography variant="h6" component="h2">
          ID: {student.IdNumber}
        </Typography>
        <Typography variant="body1">
          Last: {student.Last}
        </Typography>
        <Typography variant="body1">
          First: {student.First}
        </Typography>
        <Typography variant="body1">
          Middle: {student.Middle}
        </Typography>
        <Typography variant="body1">
          Course: {student.Course}
        </Typography>
        <Typography variant="body1">
          Year: {student.Year}
        </Typography>
      </Box>
    </Modal>
  );
}



function ViewStudent() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1337/viewstudents")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="baby">
        <Sidebar />
        <div className="babies">
          <h1>View Students</h1>

          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Middle Name</TableCell>
                  <TableCell align="right">Course</TableCell>
                  <TableCell align="right">Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.IdNumber}>
                    <TableCell align="right">{student.IdNumber} </TableCell>
                    <TableCell align="right">{student.First}</TableCell>
                    <TableCell align="right">{student.Last}</TableCell>
                    <TableCell align="right">{student.Middle}</TableCell>
                    <TableCell align="right">{student.Course}</TableCell>
                    <TableCell align="right">{student.Year}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => handleEditStudent(student)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {selectedStudent && (
        <BasicModal
          open={openModal}
          handleClose={handleCloseModal}
          student={selectedStudent}
        />
      )}
    </>
  );
}

export default ViewStudent;
