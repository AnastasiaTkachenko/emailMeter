import axios from 'axios'
import {token} from "@/variables";

export const getUsers = async (from, to) => {
    const {data} = await axios.get('https://step-meter-pp4publmdq-ez.a.run.app/users',
        {
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json'
            },
            params:{
                'workouts_from': from,
                'workouts_to': to,
                'limit':100
            },
        });
    return data.results;

}
export const getUserDetails = async (userName) => {
    const {data} = await axios.get(`https://step-meter-pp4publmdq-ez.a.run.app/${userName}/workouts`, {
        headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
        },
    });
    return data.results;
}


