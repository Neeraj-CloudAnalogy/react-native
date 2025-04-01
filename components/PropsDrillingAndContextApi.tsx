import React from 'react';
import { createContext } from 'react';
import Componenta from '../components/Componenta';
import ComponentC from '../components/ComponentC';
export const mytext = createContext('');
export const myContext = createContext({ title: '', Name: '' });

function PropsDrillingAndContextApi() {
    return (
        <>
      <myContext.Provider value={{title:'react-native props drilling', Name :'sikh rahe h'}}>
     <mytext.Provider value={'react-native props drilling'}>
       <Componenta name={'Neeraj'} surname={'Sharma'} />
        <ComponentC />
      </mytext.Provider>
      </myContext.Provider>
        
        </>
    );
}

export default PropsDrillingAndContextApi;