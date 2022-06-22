import React from 'react'
import { Typography, Box } from "@mui/material";
import cancelPayment from '../../../Assest/Images/cancelPayment.png'

export default function PaymentCancel() {
	const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
	const dattstring=date.toString()
	console.log(dattstring)
	return (
		<Box mt={10} sx={{ display: { xs: 'block', sm: 'flex' }, textAlign: 'center' }} >
			<Box sx={{ width: { xs: '100%', md: '50%' }, paddingTop: { sm: '120px' } }}>
				<Typography component="h3" varient="h3" color="red" sx={{ fontFamily:'Iranian Sans !important'}} >پرداخت شما کنسل شد </Typography >
				<Typography mt={2} sx={{fontFamily:'Iranian Sans !important'}} >درصورت نیاز به پشتیبانی با شماره  02155555 تماس بگیرید</Typography >
			</Box>
			<Box sx={{ width: { xs: '100%', md: '50%' } }}>
				<img src={cancelPayment} style={{ width: '100%' }} alt="پرداخت انجام شد" />
			</Box>
		</Box>

	)
}
