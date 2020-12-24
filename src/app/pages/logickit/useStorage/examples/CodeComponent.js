import React from 'react';
import Code from 'react-code-prettify';

const txtCode = `
import React, {useState} from 'react';

/**
 * @requires 🖖LogicKit
 */
import {
    useStorage,
    StorageStrategy
} from '../../../../../logickit';


export function ExampleComponent()
{
    const [strategy, setStrategy] = useState(StorageStrategy.LOCAL);
    const [key, setKey] = useState("");
    
    const [storageValue, setStorageValue, deleteStorageItem] = useStorage(strategy, key, "");

    const onChangeStrategyHandler = (e) => {
        setStrategy(e.target.value);
    }

    const onChangeKeyHandler = (e) => {
        setKey(e.target.value);
    }

    const onChangeValueHandler = (e) => {
        setStorageValue(e.target.value)
    }

    return (
        <>  
            <div>
                <label htmlFor='strategy'>
                    <span> Strategy </span>
                    <select  
                        name='strategy' 
                        value={strategy} 
                        onChange={onChangeStrategyHandler} 
                    >
                        <option 
                            value={StorageStrategy.LOCAL}
                            label={StorageStrategy.LOCAL}
                        />
                        <option 
                            value={StorageStrategy.SESSION}
                            label={StorageStrategy.SESSION}
                        />
                        <option 
                            value={StorageStrategy.COOKIE}
                            label={StorageStrategy.COOKIE}
                        />
                    </select>
                </label>
            </div>
            <label htmlFor='key'>
                <span> Key </span>
                <input 
                    type='text' 
                    name='key' 
                    value={key} 
                    placeholder="key"
                    onChange={onChangeKeyHandler} 
                />
            </label>
            <label htmlFor='value'>
                <span> Value </span>
                <input 
                    type='text' 
                    name='value' 
                    placeholder="value"
                    value={storageValue || ""} 
                    onChange={onChangeValueHandler} 
                />
            </label>

            <div>
                <h5>Stored with {strategy}</h5>
                <div>Value</div>
                <pre className="pre-well">
                    {JSON.stringify(storageValue, null, 4)}
                </pre>
            </div>

            {
                storageValue == undefined 
                ?
                null
                :
                <button 
                    onClick={deleteStorageItem}
                >
                    Delete item
                </button>
            }
        </>
    )
}
`
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
export function ExampleComponentCodeSnippet(){

    return <Code
        codeString={htmlEntities(txtCode)} 
        language="javascript" 
    />
}
