import axios from 'axios';


export const findAllBukaRekening =
async () => {
    try {
        const response = await axios.get('#');
    }catch (error){
        console.error('error ftching data: ',error);
        throw error;
    }
}
