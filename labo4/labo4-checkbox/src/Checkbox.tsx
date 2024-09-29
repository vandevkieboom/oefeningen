import React, { useState } from 'react';

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.target.checked);
    // };

    return (
        <>
            <div className="input-box">
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                ></input>
                <label htmlFor="checkbox">Show/Hide</label>
                {checked ? <div className="background-image"></div> : ''}
            </div>
        </>
    );
};

export default Checkbox;
