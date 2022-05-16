import styled from 'styled-components'

export const Container =styled.div `
display:flex;
flex-direction: column;
max-width: 800px;

`

export const  ContainerImage =styled.div `
display:flex;
flex-direction: column;
padding: 10px;
flex-wrap: wrap;
max-width: 800px;
margin:10px;
justify-content:center;
align-items: center;




`

export const CardImage=styled.div `
display:flex;
flex-direction: column;
flexWrap='wrap';
font-size: 16px;
justify-content:center;
`
export const TitleCard=styled.p`
font-size:20px;
line-height: 18px;
font-weight: 800;
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: 		#9ACD32;
text-Transform: uppercase;

`

export const TitleCardPag=styled.p`
font-size: 16px;
line-height: 10px;
font-weight: 600;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: 	#32CD32;
text-Transform: uppercase;

`

export const TitleSecond=styled.p`
font-size:18px;
line-height: 40px;
font-weight: 500;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: 	#32CD32;
text-align:center;
font-style: oblique;
`

export const Paragraf=styled.p`
font-size:18px;
line-height: 20px;
font-weight: 400;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color:	red;
text-align:center;
font-style: oblique;
`
export const Center=styled.div`
text-align:center;
margin:auto;
justify-content:center;
`