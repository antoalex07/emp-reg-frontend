# Employee Register Application Frontend

This code is after a long run of failures so I wasn't sure whether I would get to publish this one here, that is the reason for the late initial commit. I've written the backend code for the program in Java Spring Boot a little while ago and have been continously trying to create a frontend code for this. I have little experience in javascript so this took a while but was able to catch up to an extend. I've also been able to learn a few things in HTML and CSS. This has been quite the experience. I am proud to have been able to come up with my own idea for the frontend website design. I have to make a few more adjustments in the backend and a lot more in frontend. Good luck  to all of that


there are ways to style the code without bringing in extra css files and instead just naming the divs with appropriate classes its called css in js libraries this might be a way to reduce the code complexity and i am gonna learn that

also i need to change the logo to an svg icon to make it more compatible with the website

```flex-direction: column``` is used to make every modules inside a div arrange one below another 

```     {
      field: 'actions',
      headerName: 'Edit',
      width: 150,
      renderCell: (params) => (
        <div>
            {params.row.isEditable ? (
              <Button onClick={() => handleButtonClick(params.row.id, params.row.date)}>
                <EditNotifications />
              </Button>
            ) : (
              <Button onClick={() => handleDeleteButtonClick(params.row.id)}>
                 <GridDeleteIcon />
              </Button>
            )}
        </div>
      ), 
    },
```
the above code is a reference on how to treat a boolean value in your data to be represented in the table


consider that u have a text field of some sort and its type is number mine looks something like this

```
      <Paper
            component="form"
            sx={{
                  marginTop: '6%',
                  marginLeft: '12px',
                  p: '10px 4px',
                  display: 'flex',
                  width: 350,
                  borderRadius: '30px',
                  alignItems: 'center',
                  backgroundColor: '#c2f3dd'
            }}
      >
            <TodayRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
            <InputBase
                  id='overtime'
                  placeholder='Overtime Hours'
                  type='number'
                  defaultValue={attendance.overtime}
                  onKeyDown={handleKeyPress}
                  sx={{ flex: 1, marginLeft: '10px', fontSize: '18px' }}
            />
      </Paper>
```
so for this code the textfield appearing will have a spin button that allows you to increase or decrease the number in the box by 1 since here its not particularly useful and also ruins the color grade (not that its great) so if you want to remove that add these to the `sx` part in the `InputBase`

```
      sx={{ 
            flex: 1, 
            marginLeft: '10px', 
            fontSize: '18px',
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
            "& input[type=number]": { MozAppearance: "inputbase" } 
      }}
```

```
@media all and (min-width:960px) and (max-width: 1024px) {
  /* put your css styles in here */
}

@media all and (min-width:801px) and (max-width: 959px) {
  /* put your css styles in here */
}

@media all and (min-width:769px) and (max-width: 800px) {
  /* put your css styles in here */
}

@media all and (min-width:569px) and (max-width: 768px) {
  /* put your css styles in here */
}

@media all and (min-width:481px) and (max-width: 568px) {
  /* put your css styles in here */
}

@media all and (min-width:321px) and (max-width: 480px) {
  /* put your css styles in here */
}

@media all and (min-width:0px) and (max-width: 320px) {
  /* put your css styles in here */
}
```
style changes across various devices
