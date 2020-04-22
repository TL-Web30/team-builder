import React from 'react';


function TeamForm(props){
const {values, onChangeHandler, submitHandler} = props

    return(
        <form onSubmit={submitHandler}>
            <label>
                Given Name:
                <input                
                name="name"
                onChange={onChangeHandler}
                placeholder="Given Name"
                type="text"
                value={values.name}
                />
            </label>
            
            <label>
                Stage Name:
                <input                
                name="stageName"
                onChange={onChangeHandler}
                placeholder="Stage Name"
                type="text"
                value={values.stageName}
                />
            </label>

            <label>
                Instagram @:
                <input                
                name="insta"
                onChange={onChangeHandler}
                placeholder="@exoExample"
                type="text"
                value={values.insta}
                />
            </label>
            
            <label>
                Choose a Power:
                <select name="power" value={values.power} onChange={onChangeHandler}>
                    <option value="null">Please choose an option</option>
                    <option value="earth">Earth</option>
                    <option value="fire">Fire</option>
                    <option value="flight">Flight</option>
                    <option value="frost">Frost</option>
                    <option value="healing">Healing</option>          
                    <option value="light">Light</option>
                    <option value="lightning">Lightning</option>
                    <option value="telekinesis">Telekinesis</option>
                    <option value="teleportation">Teleportation</option>
                    <option value="time control">Time Control</option>
                    <option value="wind">Wind</option>
                </select>
            </label>
                
            <p>Select member position: </p> 
            <div>
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Dancer"
                    />
                    <label>Dancer</label>
                
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Leader"
                    />
                    <label>Leader</label>
                
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Maknae"
                    />
                    <label>Maknae</label>
                
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Rapper"
                    />
                    <label>Rapper</label>
                
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Visual"
                    />
                    <label>Visual</label>
                
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Vocalist"
                    />
                    <label>Vocalist</label>
                </div>

                <button type="submit">Submit</button>
        </form>
    )
}

export default TeamForm;