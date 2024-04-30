import React from 'react';
import avatar from '../assets/image-rita.png';
import backgroundPattern from '../assets/bg-pattern-card.svg';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const ProfileCard = (props) => {
  return (
    <div style={{
        backgroundColor: 'white',
        minWidth: '350px',
        maxWidth: '600px',
        height: 'auto',
        borderRadius: '14px',
        boxShadow: '0px 10px 30px hsl(185, 75%, 35%)'
    }}>
		<header style={{
            backgroundImage: `url(${backgroundPattern})`,
            backgroundPosition: '0px 0px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            textAlign: 'center',
            borderTopLeftRadius: '14px',
            borderTopRightRadius: '14px'
        }}>
			<img 
				src={avatar} 
				alt={props.name}
				style={{ margin: 'auto',
						 width: '100px',
						 border: 'solid white 4px',
						 borderRadius: '50%',
						 marginTop: '75px'

				}}/>
		</header>
		<h1 style={{ fontWeight: 'bold',
					 fontSize: '1.1rem',
					 textAlign: 'center',
					 padding: '10px 20px 0px 20px'
				}}>
			{props.name} <span style={{ fontWeight: 'normal',
										fontSize: '0.95rem',
										color: 'hsl(0, 0% 50%)',
										textAlign: 'center',
										paddingBottom: '10px'
									}}>{props.age}</span>
		</h1>
		<h2 style={{ fontWeight: 'normal',
					 fontSize: '0.95rem',
					 color: 'hsl(0, 0% 50%)',
					 textAlign: 'center',
					 paddingBottom: '10px'
				}}>{props.city}</h2>
		<div style={{ display: 'flex',
					  borderTop: 'solid rgb(206, 206, 206) 1px',
					  textAlign: 'center'
					}}>
			<div style={{ flex: 1 }}>
				<h1 style={{ fontWeight: 'bold',
					 		 fontSize: '1.1rem',
					 		 textAlign: 'center',
					 		 padding: '10px 20px 0px 20px'
						}}><CurrencyRupeeIcon sx={{ fontSize: 'inherit', verticalAlign: 'middle' }}/>{props.wageRate}</h1>
				<h2 style={{ fontWeight: 'normal',
			 				 fontSize: '0.7rem',
							 color: 'hsl(0, 0%, 50%)',
							 textAlign: 'center',
							 letterSpacing: '1px',
							 paddingBottom: '20px',
							 lineHeight: '5px'
						}}>Wage Rate</h2>
			</div>
			<div style={{ flex: 1 }}>
				<h1 style={{ fontWeight: 'bold',
					 		 fontSize: '1.1rem',
					 		 textAlign: 'center',
					 		 padding: '10px 20px 0px 20px'
						}}><CurrencyRupeeIcon sx={{ fontSize: 'inherit', verticalAlign: 'middle' }}/>{props.overtimeRate}</h1>
				<h2 style={{ fontWeight: 'normal',
			 				 fontSize: '0.7rem',
							 color: 'hsl(0, 0%, 50%)',
							 textAlign: 'center',
							 letterSpacing: '1px',
							 paddingBottom: '20px',
							 lineHeight: '5px'
						}}>Overtime Rate</h2>
			</div>
			<div style={{ flex: 1 }}>
				<h1 style={{ fontWeight: 'bold',
					 		 fontSize: '1.1rem',
					 		 textAlign: 'center',
					 		 padding: '10px 20px 0px 20px'
						}}><CurrencyRupeeIcon sx={{ fontSize: 'inherit', verticalAlign: 'middle' }}/>{props.dueAmount}</h1>
				<h2 style={{ fontWeight: 'normal',
			 				 fontSize: '0.7rem',
							 color: 'hsl(0, 0%, 50%)',
							 textAlign: 'center',
							 letterSpacing: '1px',
							 paddingBottom: '20px',
							 lineHeight: '5px'
						}}>Due Amount</h2>
			</div>
		</div>
	</div>
  )
}

export default ProfileCard