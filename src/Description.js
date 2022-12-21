import React from 'react';
import {useLocation} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { Player } from 'video-react';



export default function Description() {

    const location = useLocation();
    const data = location.state.data
    console.log(location.state.data)
    return(
        <div>
        <h1 style={{textAlign: "center"}}>{location.state.word} &ensp; (POS: {data['POS']})</h1>
        <br/>
        <h2 style={{textAlign: "center"}}>Parts of Speach: {data['POS']}</h2>
        <h2 style={{textAlign: "center"}}>ACTING STRATEGIES:</h2>

        <div>
            {Object.keys(data)
                .filter((key) => key.includes("strategy"))
                .map((key,_) => (
                    <div>
                    <Paper style={{padding:2, margin:10, backgroundColor:"lightGrey"}}>
                        <h3 style={{textAlign: "center"}}>{key}</h3>
                        <h3 style={{textAlign: "center"}}>
                            ACTION NAME :  {data[key]["Action Name"]} 
                        </h3>
                        <h3 style={{textAlign: "center"}}>
                            ORTEGA TAXONOMY CLASS : {data[key]["Ortega Taxonomy Class"]}
                             
                        </h3>
                        <div style={{justifyContent: "center", display:"flex"}}>
                       
                            <div className='player-wrapper'>
                            <video controls
                                src={data[key]["video"]}
                                // src = "1.mp4"
                                height="400"
                                width="620">
                            </video>
                            </div>
                        </div>
                    </Paper>
                    <br/>
                    </div>
                ))
            }
        </div>


        <h2 style={{textAlign: "center"}}>GPT Prompts and Responses:</h2>
        <div>
            {Object.keys(data)
                .filter((key) => key.includes("GPT"))
                .map((key,_) => (
                    <div>
                        
                        <Paper style={{padding:2, margin:10, backgroundColor:"lightGrey"}}>
                            <h3>{key.replace("GPT::","")}?</h3>
                            <h5>{data[key]}</h5>
                        </Paper>
                        <br/>
                    </div>
                ))
            }
        </div>

        </div>
    );
}   