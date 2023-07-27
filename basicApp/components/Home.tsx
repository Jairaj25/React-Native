import axios from "axios";
import { Button, Text, View } from "react-native"

export const Home = (props:any) => {
    const url = 'http://localhost:6000/users';
    const {token} = props.route.params;
    const getAllUsers = async () => {
        try {
            const res = await axios.get(url, {
                headers: {
                  'auth': token,
                },
              });
              console.log(res.data);
        }
        catch (err) {
            return err;
        }
    }
    return (
        <View>
            <Button title='Get All Users' onPress={() => getAllUsers()} />
        </View>
    )
}