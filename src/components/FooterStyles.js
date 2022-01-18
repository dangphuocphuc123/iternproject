import styled from 'styled-components';

export const Box = styled.div`
padding: 0px 60px;
padding-top:80px;
background:  rgb(255, 225, 225);
bottom: 0;
width: 93.4%;
overflow-x:hidden;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(230px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(150px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #000;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #f74d09;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #000;
margin-bottom: 40px;
font-weight: bold;
`;
