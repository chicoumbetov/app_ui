import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// import { Authenticator, SignIn } from 'aws-amplify-react-native';
// import Amplify, { Auth, Hub } from 'aws-amplify';
// Get the aws resources configuration parameters
// import awsconfig from './src/aws-exports'; // if you are using Amplify CLI
// import { View, TextInput, Button } from 'react-native';

//Amplify.configure(awsconfig);

const initialFormState = {
  username: '', password: '', email: '', authCode: '', formType: 'signUp'
}

export default function App() {
  const [formState, updateFormState] = useState(initialFormState)
  const [username, updateUsername] = useState('')
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // to attach any input handler
  function onChange(e) {
    e.persist()
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
  }

  const { formType } = formState

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
              <StatusBar />        
      </SafeAreaProvider>
    );
  }
}