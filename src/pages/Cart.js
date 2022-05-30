import React, { useEffect, useState } from 'react'
import WithUser from '../Layouts/WithUser'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Alert from '@mui/material/Alert';

const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.valueInput?.trim() === '') {
            reject();
          } else {
            resolve(user);
          }
        }, 200),
      ),
    [],
  );
};

function computeMutation(newRow, oldRow) {
  if (newRow.valueInput !== oldRow.valueInput) {
    return `Name from '${oldRow.valueInput}' to '${newRow.valueInput}'`;
  }
  if (newRow.age !== oldRow.age) {
    return `Age from '${oldRow.age || ''}' to '${newRow.age || ''}'`;
  }
  return null;
}


function Cart() {
  const mutateRow = useFakeMutation();
  const noButtonRef = React.useRef(null);
  const [promiseArguments, setPromiseArguments] = React.useState(null);

  const [snackbar, setSnackbar] = React.useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = React.useCallback(
    (newRow, oldRow) =>
      new Promise((resolve, reject) => {
        const mutation = computeMutation(newRow, oldRow);
        if (mutation) {
          // Save the arguments to resolve or reject the promise later
          setPromiseArguments({ resolve, reject, newRow, oldRow });
        } else {
          resolve(oldRow); // Nothing was changed
        }
      }),
    [],
  );

  const handleNo = () => {
    const { oldRow, resolve } = promiseArguments;
    resolve(oldRow); // Resolve with the old row to not update the internal state
    setPromiseArguments(null);
  };

  const handleYes = async () => {
    const { newRow, oldRow, reject, resolve } = promiseArguments;

    try {
      // Make the HTTP request to save in the backend
      const response = await mutateRow(newRow);
      setSnackbar({ children: 'User successfully saved', severity: 'success' });
      resolve(response);
      setPromiseArguments(null);
    } catch (error) {
      setSnackbar({ children: "Name can't be empty", severity: 'error' });
      reject(oldRow);
      setPromiseArguments(null);
    }
  };

  const handleEntered = () => {
    // The `autoFocus` is not used because, if used, the same Enter that saves
    // the cell triggers "No". Instead, we manually focus the "No" button once
    // the dialog is fully open.
    // noButtonRef.current?.focus();
  };

  const renderConfirmDialog = () => {
    if (!promiseArguments) {
      return null;
    }

    const { newRow, oldRow } = promiseArguments;
    const mutation = computeMutation(newRow, oldRow);

    return (
      <Dialog
        maxWidth="xs"
        TransitionProps={{ onEntered: handleEntered }}
        open={!!promiseArguments}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent dividers>
          {`Pressing 'Yes' will change ${mutation}.`}
        </DialogContent>
        <DialogActions>
          <Button ref={noButtonRef} onClick={handleNo}>
            No
          </Button>
          <Button onClick={handleYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };


  const [productLocal, setProductLocal] = useState([])
  const [plus, setPlus] = useState([])
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'نام کالا', width: 150 },
    { field: 'valueInput', headerName: 'تعداد', width: 70 , editable: true  },
    {
      field: 'price',
      headerName: 'قیمت',
      type: 'number',
      width: 70,
    },
    { field: 'delete', headerName: 'حذف', width: 70 },


  ];

  useEffect(() => {
    const data = localStorage.getItem('cart');
    const initialData = data !== null ? JSON.parse(data) : null;
    setProductLocal(initialData);
  }, [])
  const navigate = useNavigate()
  function handlePyment() {
    return navigate('/finalbuy')
  }
  return (
    <Box sx={{ padding: 5 }}>
      <h1>سبد خرید</h1>
      <div style={{ height: 400, width: '100%' }}>
        {productLocal == null ? "هیچ کالایی انتخاب نشده است" :
          <>
            <div style={{ height: 400, width: '100%' }}>
              {renderConfirmDialog()}

              <DataGrid
                rows={productLocal}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                processRowUpdate={processRowUpdate}
                experimentalFeatures={{ newEditingApi: true }}
              />
              {!!snackbar && (
                <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
                  <Alert {...snackbar} onClose={handleCloseSnackbar} />
                </Snackbar>
              )}
            </div>
          </>


        }
      </div>
      <h2>جمع:
        <span>1040030 تومان</span>
      </h2>
      <Button onClick={handlePyment} variant="contained" color="success">
        نهایی کردن خرید
      </Button>
      {productLocal == null ? "loading" :
        <>
          {Object.values(productLocal).map(item => {
            let count = []
            let arr = [{}]
            count = parseInt(item.valueInput) * parseInt(item.price)
          }
          )}

        </>

      }
    </Box>
  )
}
export default WithUser(Cart)




