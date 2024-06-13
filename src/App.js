import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Heading,
  Button,
  View,
  Image,
  Card
} from "@aws-amplify/ui-react";
function App({signOut}) {
  return (
    <view className='App'>
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
        <Button onClick={signOut} style={{ marginTop: '10px' }}>Sign Out</Button>
        <View> {/* Added View component */}
          <Heading level={3}>Additional Content</Heading>
          <p>This is additional content within the View component.</p>
        </View>

      </Card>
    </view>
  );
}

export default withAuthenticator(App);
