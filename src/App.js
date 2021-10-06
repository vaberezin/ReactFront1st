import React from "react";
import Table from "./Table";

class App extends React.Component{
    render(){

        

        const characters = [
            {
                name:   'Charlie',
                job:    'janitor',
            },
            {
                name:   'Mac',
                job:    'Bouncer',
            },
            {
                name:   'Dee',
                job:    'Aspiring Actress',
            },
            {
                name:   'Dennis',
                job:    'Bartender',
            }
        ]

        const headerCustom = [
            
                'JoooB',
                'NAme',
            
        ]

        const myAttrib = {
            characters,
            headerCustom,
        }

        return(
            <div className = "container">
                <Table mya = {myAttrib}  />
            </div>
        );
    }
}

export default App;
