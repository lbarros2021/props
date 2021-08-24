import styled from "styled-components";

const Nome = styled.p`
margin-top:15%;
font-size:50px;
margin-left:12%;
color:#00F5FF;
`
const Idade = styled.p`
margin-top:24%;
font-size:50px;
margin-left:33%;
color:#00E5EE;
`
const Materia = styled.p`
padding-top:25%;
font-size:50px;
color:#00C5CD;
`

const About = (props) => {
    return(
        <div>
            <Nome>{props.Nome}</Nome>
            <Idade>{props.Idade}</Idade>
            <Materia>{props.Materia}</Materia>
        </div>
    );
}

export default About;
