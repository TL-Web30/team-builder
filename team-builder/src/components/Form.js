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
                Instagram:
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
                    <option value="null">Choose a power</option>
                    <option value="Earth">Earth</option>
                    <option value="Fire">Fire</option>
                    <option value="Flight">Flight</option>
                    <option value="Frost">Frost</option>
                    <option value="Healing">Healing</option>          
                    <option value="Light">Light</option>
                    <option value="Lightning">Lightning</option>
                    <option value="Telekinesis">Telekinesis</option>
                    <option value="Teleportation">Teleportation</option>
                    <option value="Time Control">Time Control</option>
                    <option value="Wind">Wind</option>
                </select>
            </label>
                
            <p>Select member position</p> 
            <div>
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Dancer"
                    />
                    <label for="Dancer">Dancer</label>
                </div>
                <div>
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Leader"
                    />
                    <label for="Leader">Leader</label>
                </div>
                <div>
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Maknae"
                    />
                    <label for="Maknae">Maknae</label>
                </div>
                <div>
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Vocalist"
                    />
                    <label for="Vocalist">Vocalist</label>
                </div>
                <div>
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Visual"
                    />
                    <label for="Visual">Visual</label>
                </div>
                <div>
                    <input
                    name="position"
                    onChange={onChangeHandler}
                    type="radio"
                    value="Vocalist"
                    />
                    <label for="Vocalist">Vocalist</label>
                </div>

        </form>
    )
}

export default TeamForm;