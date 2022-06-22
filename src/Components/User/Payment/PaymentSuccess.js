import React from 'react'
import { Typography, Box } from "@mui/material";
import successful from '../../../Assest/Images/successful.png'

export default function PaymentSuccess() {
	return (
		<Box mt={10} sx={{ display: { xs: 'block', sm: 'flex' }, textAlign: 'center'}} >
			<Box sx={{ width: { xs: '100%', md: '50%' }, paddingTop: { sm: '120px' } }}>
				<Typography component="h3" varient="h3" color="green" sx={{ fontFamily:'Iranian Sans !important'}} >پرداخت شما با  موفقیت انجام شد</Typography >
				<Typography mt={2} sx={{ fontFamily:'Iranian Sans !important'}} >بسته شما به زودی ارسال میشود</Typography >
				<Typography mt={2} sx={{ fontFamily:'Iranian Sans !important'}}>درصورت نیاز به پشتیبانی با شما  02155555 تماس بگیرید</Typography >
			</Box>
			<Box sx={{ width: { xs: '100%', md: '50%' } }}>
				<img src={successful} style={{ width: '100%' }} alt="پرداخت انجام شد" />
			</Box>
		</Box>

	)
}
