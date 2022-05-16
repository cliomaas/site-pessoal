import { Component } from "react";
import { useNavigate } from 'react-router';
import "./Header.css"


export default function Header() {
    const getNewUser = JSON.parse(localStorage.getItem("usuario"))
    const navigate = useNavigate();
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        const input = document.getElementById("search")
        console.log(input)
        if (input.value.includes(getNewUser.nome)) {
            navigate('/sobre')
        } else {
            alert("Usuário não encontrado")
        }
    }

    return (
        <div className="header">
            <h1>CV<span style={{ color: "rgb(234, 75, 123)" }}>.</span></h1>
            <input className="search" id="search" onKeyDown={handleKeyDown} type=" text"></input>
            <div></div>
        </div>
    )
}

// class Header extends Component {
//     getNewUser = JSON.parse(localStorage.getItem("usuario"))
//     navigate = useNavigate();
//     handleSubmit() {
//         let input = document.getElementsByClassName("search").value
//         if (input.includes(this.getNewUser.nome)) {
//             console.log("oi")
//         }
//     }

//     render() {
//         return (
//             <div className="header">
//                 <h1>CV<span style={{ color: "rgb(234, 75, 123)" }}>.</span></h1>
//                 <input className="search" onSubmit={this.handleSubmit} type="text"></input>
//                 <div></div>
//             </div>
//         )
//     }
// }

// export default Header;