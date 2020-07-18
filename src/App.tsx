import React from 'react';
import { useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';

import Select from '@components/Select';

import GlobalStyles from './styles/global';
import mainTheme from './styles/themes/main';

const App: React.FC = () => {
  const { handleSubmit, register } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          name="user_id"
          inputRef={register}
          sizeVariation="large"
          options={[
            { id: 1, name: 'Victor' },
            { id: 2, name: 'Taila' },
          ]}
          valueKeyExtractor="id"
          optionLabelKeyExtractor="name"
        />

        {/* <input type="text" name="test" ref={register({ required: true })} /> */}

        <button onClick={() => handleSubmit(onSubmit)}>Clica</button>
      </form>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
