import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';

import InputGroup from '@components/Form/InputGroup';
import DateInput, { DateType, EventType } from '@components/Form/DateInput';
import Button from '@components/Form/Button';

import GlobalStyles from './styles/global';
import mainTheme from './styles/themes/main';

const formToObject = (formData: FormData) =>
  Array.from(formData.entries()).reduce((result, [key, value]) => {
    return {
      ...result,
      [key]: value,
    };
  }, {});

const App: React.FC = () => {
  const [date, setDate] = React.useState('');
  const { handleSubmit, register, control } = useForm();

  function onSubmit(event: any) {
    event.preventDefault();

    console.log(date);
  }

  function handleDateChange(value: DateType, event: EventType) {
    setDate((value as unknown) as string);
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <form onSubmit={onSubmit}>
        <InputGroup>
          <Controller
            name="aeho"
            control={control}
            label="aehou"
            render={(props) => <DateInput {...props} />}
          />

          <DateInput
            onChange={handleDateChange}
            value={date}
            name="tester"
            placeholder="Digite a data do aeho..."
          />

          <Button type="submit">Submit</Button>
        </InputGroup>
      </form>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
