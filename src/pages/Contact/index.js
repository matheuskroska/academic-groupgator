import React from "react";
import { MdPhone, MdEmail, MdOutlineTravelExplore } from "react-icons/md";

function Contact() {
    return (
        <div className="contact" >

            <h1 style={{
                marginTop: "3%",
                marginBottom: "3%",
                fontSize: "30px"
            }} > Contato </h1>
            <br />

            <p style={{ fontSize: "18px", lineHeight: "30px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fale conosco pelos canais:
            </p>
            <h2 style={{ fontSize: "18px", marginTop: "3%" }}>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <MdEmail style={{ fontSize: "26px" }} />  E-mail: contato@groupgator.com
            </h2>
            <h2 style={{ fontSize: "18px", marginTop: "3%" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <MdPhone style={{ fontSize: "26px" }} />  WhatsApp: +55 41 4002-8922
            </h2>
            <h2 style={{ fontSize: "18px", marginTop: "3%" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  < MdOutlineTravelExplore style={{ fontSize: "26px" }} /> Linkedin: linkedin.com/groupgator
            </h2>
            <table style={{
                width: "100%",
                marginTop: "5%",
                textAlign: "center",
                borderSpacing: "35px 35px",
                lineHeight: "30px"
            }}>
                <thead style={{ fontSize: "22px" }}>
                    <tr>
                        <th>Ou envie uma mensagem:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" placeholder="Assunto" style={{
                                width: "75%",
                                textAlign: "center",
                                lineHeight: "30px",
                                margin: "1%"
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder="Seu nome" style={{
                                width: "75%",
                                textAlign: "center",
                                lineHeight: "30px",
                                margin: "1%"
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder="Sua mensagem" style={{
                                width: "75%",
                                height: "100px",
                                textAlign: "center",
                                lineHeight: "30px",
                                margin: "1%"
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button style={{
                                width: "75%",
                                textAlign: "center",
                                lineHeight: "35px",
                                margin: "1%",
                                color: "#ffffff",
                                backgroundColor: "#66A571",
                                border: "none",
                                cursor: "pointer",
                                boxShadow: "-1px 2px 10px 0px rgba(0,0,0,0.48)",
                            }}  >Enviar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )

}

export default Contact;