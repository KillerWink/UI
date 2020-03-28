# UI

Theme

import "import {killerwink from @killerwink/web OR @killerwink/native}"

Wrap the application

<killerwink>
<rootApp />
<killerwink>

options : theme file

override the default theme file by creating a js object like so 

theme = {
colors: {
color1: 'blue',
...
},
fonts: {
small: '12px',
},
layout: {
margin: '20px',
 }
}

and pass it as a prop to killerwink

<killerwink theme={theme}>
<rootApp />
<killerwink>
