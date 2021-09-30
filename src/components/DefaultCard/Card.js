import React from "react";
import FutebolImage from "../Assets/Images/futebol_background.jpg"
function Note(props) {
    return (
        <div
            style={{
                backgroundImage: `url(${FutebolImage})`,
                outline: "1px solid #000000",
                borderRadius: "20px",
                height: "300px",
                width: "500px",
                padding: "2.5%",
                boxShadow: "8px 8px 12px 0px #4a4a4a"
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    borderRadius: "20px 20px 20px 20px ",
                    outline: "1px solid #000000",
                    height: "50px",
                    width: "auto",
                    textAlign: "center",
                    marginBottom: "4%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >

                <div>
                    <h1>{props.category}</h1>
                </div>
            </div>

            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    outline: "1px solid #000000",
                    borderRadius: "20px 20px 20px 20px ",
                    height: "210px",
                    width: "auto",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div>
                    <h3>{props.title}</h3>
                    <h4>{props.date}</h4>
                    <h4>{props.members}</h4>

                    <button
                        style={{
                            backgroundColor: "#1c542b",
                            borderRadius: "40px",
                            display: "inline-block",
                            cursor: "pointer",
                            color: "#ffffff",
                            fontFamily: "Arial",
                            fontSize: "15px",
                            padding: "10px 70px",
                            textShadow: "0px 1px 0px #2f6627",
                            border: "None",
                            boxShadow: "2px 2px 8px 0px #4a4a4a",
                        }}
                    >Sair
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Note;
